from flask import Blueprint, request, session, redirect
from flask_bcrypt import check_password_hash, generate_password_hash

import os
import requests

from extensions import db
from models.user import User
from schemas.auth_schema import (
    RegisterSchema,
    LoginSchema,
    UserResponseSchema
)


auth_bp = Blueprint("auth", __name__, url_prefix="/auth")

register_schema = RegisterSchema()
login_schema = LoginSchema()
user_response_schema = UserResponseSchema()


@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()

    errors = register_schema.validate(data)

    if errors:
        return {"errors": errors}, 400

    existing_user = User.query.filter_by(email=data["email"]).first()

    if existing_user:
        return {"error": "An account with this email already exists."}, 409

    password_hash = generate_password_hash(
        data["password"]
    ).decode("utf-8")

    user = User(
        first_name=data["first_name"],
        last_name=data["last_name"],
        role=data["role"],
        email=data["email"],
        password_hash=password_hash,
        auth_provider="local"
    )

    db.session.add(user)
    db.session.commit()

    session["user_id"] = user.id

    return {
        "message": "Account created successfully.",
        "user": user_response_schema.dump(user)
    }, 201


@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    errors = login_schema.validate(data)

    if errors:
        return {"errors": errors}, 400

    user = User.query.filter_by(email=data["email"]).first()

    if not user:
        return {"error": "Invalid email or password."}, 401

    if user.auth_provider != "local":
        return {
            "error": f"This account uses {user.auth_provider} authentication."
        }, 400

    if not user.password_hash:
        return {"error": "This account does not have a password."}, 400

    if not check_password_hash(user.password_hash, data["password"]):
        return {"error": "Invalid email or password."}, 401

    session["user_id"] = user.id

    return {
        "message": "Login successful.",
        "user": user_response_schema.dump(user)
    }, 200


@auth_bp.route("/me", methods=["GET"])
def current_user():
    user_id = session.get("user_id")

    if not user_id:
        return {"error": "Not authenticated."}, 401

    user = db.session.get(User, user_id)

    if not user:
        session.clear()
        return {"error": "User not found."}, 404

    return {
        "user": user_response_schema.dump(user)
    }, 200


@auth_bp.route("/logout", methods=["POST"])
def logout():
    session.clear()

    return {
        "message": "Logged out successfully."
    }, 200

@auth_bp.route("/microsoft/callback")
def microsoft_callback():
    code = request.args.get("code")

    if not code:
        return {"error": "Microsoft authorization code was not provided."}, 400

    token_response = requests.post(
        "https://login.microsoftonline.com/common/oauth2/v2.0/token",
        data={
            "client_id": os.getenv("MICROSOFT_CLIENT_ID"),
            "client_secret": os.getenv("MICROSOFT_CLIENT_SECRET"),
            "code": code,
            "redirect_uri": "http://localhost:5000/auth/microsoft/callback",
            "grant_type": "authorization_code",
            "scope": "openid profile email User.Read",
        },
        timeout=10
    )

    if not token_response.ok:
        return {
            "error": "Failed to obtain Microsoft access token.",
            "details": token_response.json()
        }, 400

    token_data = token_response.json()
    access_token = token_data.get("access_token")

    if not access_token:
        return {"error": "Microsoft did not return an access token."}, 400

    user_response = requests.get(
        "https://graph.microsoft.com/v1.0/me",
        headers={
            "Authorization": f"Bearer {access_token}"
        },
        timeout=10
    )

    if not user_response.ok:
        return {
            "error": "Failed to retrieve Microsoft account information."
        }, 400

    microsoft_user = user_response.json()

    microsoft_id = microsoft_user.get("id")
    email = microsoft_user.get("mail") or microsoft_user.get("userPrincipalName")
    display_name = microsoft_user.get("displayName") or ""

    if not microsoft_id or not email:
        return {
            "error": "Microsoft account did not provide the required user information."
        }, 400

    user = User.query.filter_by(
        microsoft_id=microsoft_id
    ).first()

    if not user:
        user = User.query.filter_by(
            email=email
        ).first()

    if not user:
        name_parts = display_name.split(" ", 1)

        user = User(
            first_name=name_parts[0] if name_parts else "Microsoft",
            last_name=name_parts[1] if len(name_parts) > 1 else "",
            email=email,
            role="user",
            auth_provider="microsoft",
            microsoft_id=microsoft_id
        )

        db.session.add(user)
        db.session.commit()

    session["user_id"] = user.id

    return {
        "message": "Microsoft login successful.",
        "user": user_response_schema.dump(user)
    }, 200

@auth_bp.route("/google")
def google_login():
    client_id = os.getenv("GOOGLE_CLIENT_ID")

    if not client_id:
        return {"error": "Google Client ID is not configured."}, 500

    google_auth_url = (
        "https://accounts.google.com/o/oauth2/v2/auth"
        "?client_id={client_id}"
        "&redirect_uri={redirect_uri}"
        "&response_type=code"
        "&scope=openid%20email%20profile"
        "&access_type=offline"
        "&prompt=select_account"
    ).format(
        client_id=client_id,
        redirect_uri="http://localhost:5000/auth/google/callback"
    )

    return redirect(google_auth_url)


@auth_bp.route("/google/callback")
def google_callback():
    code = request.args.get("code")

    if not code:
        return {
            "error": "Google authorization code was not provided."
        }, 400

    token_response = requests.post(
        "https://oauth2.googleapis.com/token",
        data={
            "client_id": os.getenv("GOOGLE_CLIENT_ID"),
            "client_secret": os.getenv("GOOGLE_CLIENT_SECRET"),
            "code": code,
            "redirect_uri": "http://localhost:5000/auth/google/callback",
            "grant_type": "authorization_code"
        },
        timeout=10
    )

    if not token_response.ok:
        return {
            "error": "Failed to obtain Google access token.",
            "details": token_response.json()
        }, 400

    token_data = token_response.json()

    access_token = token_data.get("access_token")

    if not access_token:
        return {
            "error": "Google did not return an access token."
        }, 400

    user_response = requests.get(
        "https://openidconnect.googleapis.com/v1/userinfo",
        headers={
            "Authorization": f"Bearer {access_token}"
        },
        timeout=10
    )

    if not user_response.ok:
        return {
            "error": "Failed to retrieve Google account information."
        }, 400

    google_user = user_response.json()

    google_id = google_user.get("sub")
    email = google_user.get("email")
    first_name = google_user.get("given_name")
    last_name = google_user.get("family_name")

    if not google_id or not email:
        return {
            "error": "Google account did not provide the required user information."
        }, 400

    user = User.query.filter_by(
        google_id=google_id
    ).first()

    if not user:
        user = User.query.filter_by(
            email=email
        ).first()

    if not user:
        user = User(
            first_name=first_name or "Google",
            last_name=last_name or "",
            email=email,
            role="user",
            auth_provider="google",
            google_id=google_id
        )

        db.session.add(user)
        db.session.commit()

    session["user_id"] = user.id

    return {
        "message": "Google login successful.",
        "user": user_response_schema.dump(user)
    }, 200

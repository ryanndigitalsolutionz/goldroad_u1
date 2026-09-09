from flask_restful import Resource
from flask import request
from flask_bcrypt import generate_password_hash

from extensions import db
from models.user import User
from schemas.user_schema import UserSchema


user_schema = UserSchema()
users_schema = UserSchema(many=True)


class UserListResource(Resource):
    def get(self):
        users = User.query.all()
        return users_schema.dump(users), 200

    def post(self):
        data = request.get_json()

        password = data.pop("password", None)

        if not password:
            return {"error": "Password is required"}, 400

        if User.query.filter_by(email=data.get("email")).first():
            return {"error": "Email already exists"}, 409

        password_hash = generate_password_hash(password).decode("utf-8")

        user = User(
            **data,
            password_hash=password_hash
        )

        db.session.add(user)
        db.session.commit()

        return user_schema.dump(user), 201


class UserResource(Resource):
    def get(self, user_id):
        user = db.session.get(User, user_id)

        if not user:
            return {"error": "User not found"}, 404

        return user_schema.dump(user), 200

from flask_restful import Resource
from flask import request

from extensions import db
from models.profile import Profile
from schemas.profile_schema import ProfileSchema


profile_schema = ProfileSchema()
profiles_schema = ProfileSchema(many=True)


class ProfileListResource(Resource):
    def get(self):
        profiles = Profile.query.all()
        return profiles_schema.dump(profiles), 200

    def post(self):
        data = request.get_json()

        profile = profile_schema.load(data)

        db.session.add(profile)
        db.session.commit()

        return profile_schema.dump(profile), 201


class ProfileResource(Resource):
    def get(self, user_id):
        profile = db.session.get(Profile, user_id)

        if not profile:
            return {"error": "Profile not found"}, 404

        return profile_schema.dump(profile), 200

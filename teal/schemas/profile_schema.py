from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow import fields

from extensions import db
from models.profile import Profile


class ProfileSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Profile
        load_instance = True
        sqla_session = db.session

    user_id = fields.Int(required=True)
    created_at = fields.DateTime(dump_only=True)
    updated_at = fields.DateTime(dump_only=True)
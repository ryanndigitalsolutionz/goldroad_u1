from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow import fields

from extensions import db
from models.user import User


class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True
        sqla_session = db.session
        exclude = ("password_hash",)

    id = fields.Int(dump_only=True)
    created_at = fields.DateTime(dump_only=True)
    updated_at = fields.DateTime(dump_only=True)
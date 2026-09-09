from marshmallow import (
    Schema,
    fields,
    validate,
    validates_schema,
    ValidationError
)
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

from models.user import User


class RegisterSchema(Schema):
    first_name = fields.String(required=True)
    last_name = fields.String(required=True)
    role = fields.String(required=True)
    email = fields.Email(required=True)

    password = fields.String(
        required=True,
        load_only=True,
        validate=validate.Length(min=8)
    )

    confirm_password = fields.String(
        required=True,
        load_only=True
    )

    @validates_schema
    def validate_passwords(self, data, **kwargs):
        if data["password"] != data["confirm_password"]:
            raise ValidationError({
                "confirm_password": ["Passwords do not match."]
            })


class LoginSchema(Schema):
    email = fields.Email(required=True)

    password = fields.String(
        required=True,
        load_only=True
    )


class UserResponseSchema(SQLAlchemyAutoSchema):

    class Meta:
        model = User
        load_instance = True
        exclude = ("password_hash",)
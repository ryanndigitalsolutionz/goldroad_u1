from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow import fields

from extensions import db
from models.project import Project


class ProjectSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Project
        load_instance = True
        sqla_session = db.session

    id = fields.Int(dump_only=True)
    client_id = fields.Int(required=True)
    created_at = fields.DateTime(dump_only=True)
    updated_at = fields.DateTime(dump_only=True)
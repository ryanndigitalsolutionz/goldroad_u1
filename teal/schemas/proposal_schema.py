from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow import fields

from extensions import db
from models.proposal import Proposal


class ProposalSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Proposal
        load_instance = True
        sqla_session = db.session

    id = fields.Int(dump_only=True)
    project_id = fields.Int(required=True)
    freelancer_id = fields.Int(required=True)
    created_at = fields.DateTime(dump_only=True)
    updated_at = fields.DateTime(dump_only=True)
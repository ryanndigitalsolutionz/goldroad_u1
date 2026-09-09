from flask_restful import Resource
from flask import request

from extensions import db
from models.proposal import Proposal
from schemas.proposal_schema import ProposalSchema


proposal_schema = ProposalSchema()
proposals_schema = ProposalSchema(many=True)


class ProposalListResource(Resource):
    def get(self):
        proposals = Proposal.query.all()
        return proposals_schema.dump(proposals), 200

    def post(self):
        data = request.get_json()

        proposal = proposal_schema.load(data)

        db.session.add(proposal)
        db.session.commit()

        return proposal_schema.dump(proposal), 201


class ProposalResource(Resource):
    def get(self, proposal_id):
        proposal = db.session.get(Proposal, proposal_id)

        if not proposal:
            return {"error": "Proposal not found"}, 404

        return proposal_schema.dump(proposal), 200

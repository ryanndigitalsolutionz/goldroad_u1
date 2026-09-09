from extensions import db
from datetime import datetime


class Proposal(db.Model):
    __tablename__ = "proposals"

    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
    freelancer_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    cover_letter = db.Column(db.Text, nullable=False)
    proposed_amount = db.Column(db.Numeric(10, 2), nullable=False)
    proposed_timeline = db.Column(db.String, nullable=True)
    status = db.Column(db.String, nullable=False, default="pending")
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now)

    project = db.relationship("Project", back_populates="proposals")
    freelancer = db.relationship("User", back_populates="proposals", foreign_keys=[freelancer_id])

    def __repr__(self):
        return f"<Proposal project_id={self.project_id} freelancer_id={self.freelancer_id}>"
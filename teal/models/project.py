from extensions import db
from datetime import datetime


class Project(db.Model):
    __tablename__ = "projects"

    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.Text, nullable=False)
    category = db.Column(db.String, nullable=False)
    skills_required = db.Column(db.Text, nullable=True)
    budget_type = db.Column(db.String, nullable=False)
    budget_amount = db.Column(db.Numeric(10, 2), nullable=True)
    timeline = db.Column(db.String, nullable=True)
    experience_level = db.Column(db.String, nullable=True)
    additional_requirements = db.Column(db.Text, nullable=True)
    status = db.Column(db.String, nullable=False, default="open")
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now)

    client = db.relationship("User", back_populates="projects", foreign_keys=[client_id])
    proposals = db.relationship("Proposal", back_populates="project", cascade="all, delete-orphan")

    def __repr__(self):
        return f"<Project {self.title}>"
from extensions import db
from datetime import datetime


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    role = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    password_hash = db.Column(db.String, nullable=True)
    auth_provider = db.Column(db.String, default="local", nullable=False)
    provider_id = db.Column(db.String, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now)

    profile = db.relationship("Profile", back_populates="user", uselist=False, cascade="all, delete-orphan")
    projects = db.relationship("Project", back_populates="client", foreign_keys="Project.client_id")
    proposals = db.relationship("Proposal", back_populates="freelancer", foreign_keys="Proposal.freelancer_id")

    def __repr__(self):
        return f"<User {self.email}>"
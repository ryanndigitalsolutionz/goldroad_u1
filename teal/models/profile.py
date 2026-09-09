from extensions import db
from datetime import datetime


class Profile(db.Model):
    __tablename__ = "profiles"

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), primary_key=True, unique=True, nullable=False)
    title = db.Column(db.String, nullable=True)
    location = db.Column(db.String, nullable=True)
    bio = db.Column(db.Text, nullable=True)
    skills = db.Column(db.Text, nullable=True)
    availability = db.Column(db.String, nullable=True)
    experience_level = db.Column(db.String, nullable=True)
    completed_projects = db.Column(db.Integer, default=0)
    rating = db.Column(db.Numeric(3, 2), default=0.00)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now)


    user = db.relationship("User", back_populates="profile")

    def __repr__(self):
        return f"<Profile user_id={self.user_id}>"

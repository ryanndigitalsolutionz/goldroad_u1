from app import app
from extensions import db, bcrypt

from models.user import User
from models.profile import Profile
from models.project import Project
from models.proposal import Proposal


with app.app_context():

    Proposal.query.delete()
    Project.query.delete()
    Profile.query.delete()
    User.query.delete()


    client = User(
        first_name="Dalion",
        last_name="Gamer",
        email="daliongamer002@gmail.com",
        password_hash=bcrypt.generate_password_hash("2026NmO.").decode("utf-8"),
        role="client"
    )

    freelancer = User(
        first_name="Ryan",
        last_name="Makori",
        email="ryan.makori@student.moringaschool.com",
        password_hash=bcrypt.generate_password_hash("RDL_offic1al").decode("utf-8"),
        role="freelancer"
    )

    db.session.add_all([client, freelancer])
    db.session.commit()


    client_profile = Profile(
        user_id=client.id,
        title="Startup Founder",
        location="Nairobi",
        bio="Looking for talented people to help build great products.",
        skills="Product Management, Business",
        availability="Available",
        experience_level="Intermediate",
        completed_projects=0,
        rating=0
    )

    freelancer_profile = Profile(
        user_id=freelancer.id,
        title="Full Stack Software Engineer",
        location="Nairobi",
        bio="I build modern web applications and digital products.",
        skills="Python, Flask, React, JavaScript",
        availability="Available",
        experience_level="Intermediate",
        completed_projects=0,
        rating=0
    )

    db.session.add_all([client_profile, freelancer_profile])
    db.session.commit()


    project = Project(
        client_id=client.id,
        title="Build a Freelance Marketplace",
        description="Build a modern freelance marketplace platform.",
        category="Web Development",
        skills_required="Python, Flask, React",
        budget_type="Fixed",
        budget_amount=50000,
        timeline="2 months",
        experience_level="Intermediate",
        additional_requirements="Clean and responsive UI.",
        status="open"
    )

    db.session.add(project)
    db.session.commit()


    proposal = Proposal(
        project_id=project.id,
        freelancer_id=freelancer.id,
        cover_letter="I would love to help build this marketplace.",
        proposed_amount=45000,
        proposed_timeline="6 weeks",
        status="pending"
    )

    db.session.add(proposal)
    db.session.commit()

    print("Database seeded successfully!")
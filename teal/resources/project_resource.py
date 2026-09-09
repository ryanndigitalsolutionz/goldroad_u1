from flask_restful import Resource
from flask import request

from extensions import db
from models.project import Project
from schemas.project_schema import ProjectSchema


project_schema = ProjectSchema()
projects_schema = ProjectSchema(many=True)


class ProjectListResource(Resource):
    def get(self):
        projects = Project.query.all()
        return projects_schema.dump(projects), 200

    def post(self):
        data = request.get_json()

        project = project_schema.load(data)

        db.session.add(project)
        db.session.commit()

        return project_schema.dump(project), 201


class ProjectResource(Resource):
    def get(self, project_id):
        project = db.session.get(Project, project_id)

        if not project:
            return {"error": "Project not found"}, 404

        return project_schema.dump(project), 200

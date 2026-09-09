from flask import Flask
from flask_cors import CORS

from config import Config
from extensions import db, ma, bcrypt, migrate

from models.user import User
from models.profile import Profile
from models.project import Project
from models.proposal import Proposal

from resources.auth_resource import auth_bp

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)
ma.init_app(app)
bcrypt.init_app(app)
migrate.init_app(app, db)

CORS(
    app,
    origins=["http://localhost:5173"],
    supports_credentials=True
)

app.register_blueprint(auth_bp)


if __name__ == "__main__":
    app.run(debug=True)

@app.route("/")
def home():
    return {
        "status": "Healthy",
        "message": "GoldRoad U1 is flawlessly rendering!"
    }


if __name__ == "__main__":
    app.run(debug=True)

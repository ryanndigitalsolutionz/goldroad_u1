import os
from dotenv import load_dotenv

load_dotenv()


class Config:
    SECRET_KEY = os.getenv("SECRET_KEY")

    SQLALCHEMY_DATABASE_URI = "sqlite:///goldroad.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    PAYSTACK_PUBLIC_KEY = os.getenv("PAYSTACK_PUBLIC_KEY")
    PAYSTACK_SECRET_KEY = os.getenv("PAYSTACK_SECRET_KEY")

    PAYPAL_CLIENT_ID = os.getenv("PAYPAL_CLIENT_ID")
    PAYPAL_CLIENT_SECRET = os.getenv("PAYPAL_CLIENT_SECRET")
    PAYPAL_MODE = os.getenv("PAYPAL_MODE", "sandbox")

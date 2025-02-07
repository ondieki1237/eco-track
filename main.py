from fastapi import FastAPI, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI()

# MongoDB Connection
MONGO_URI = os.getenv("MONGO_URI", "mongodb+srv://bellarinseth:R73Me8mnoD5HoQtF@cluster0.7obez.mongodb.net/")
client = AsyncIOMotorClient(MONGO_URI)
db = client.eco_track  # Use your actual database name

@app.get("/")
async def root():
    return {"message": "Welcome to EcoTrack API"}

@app.post("/add_user/")
async def add_user(user: dict):
    result = await db.users.insert_one(user)
    return {"id": str(result.inserted_id)}

@app.get("/users/")
async def get_users():
    users = await db.users.find().to_list(100)
    return users

from fastapi import FastAPI, Form, Depends, HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware
from passlib.context import CryptContext
from starlette.requests import Request
import databases
import sqlalchemy
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from pydantic import BaseModel, ValidationError

# Initialize FastAPI
app = FastAPI()

# Enable CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8000"],  # Update this to your frontend's URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Session middleware
app.add_middleware(SessionMiddleware, secret_key="your-secret-key")

# Database setup (SQLite for now)
DATABASE_URL = "sqlite:///./test.db"
database = databases.Database(DATABASE_URL)
metadata = sqlalchemy.MetaData()

Base = declarative_base(metadata=metadata)

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, autoincrement=True)
    email = Column(String(50), unique=True, index=True)
    password = Column(String(100))

class RecycleBin(Base):
    __tablename__ = "recycle_bins"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    location = Column(String(200), nullable=False)
    description = Column(String(255), nullable=True)

# Create tables
engine = sqlalchemy.create_engine(DATABASE_URL)
Base.metadata.create_all(bind=engine)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def hash_password(password: str):
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str):
    return pwd_context.verify(plain_password, hashed_password)

# User signup
@app.post("/register/")
async def register(email: str = Form(...), password: str = Form(...), db: Session = Depends(get_db)):
    if db.query(User).filter(User.email == email).first():
        raise HTTPException(status_code=400, detail="Email already registered")
    new_user = User(email=email, password=hash_password(password))
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"message": "User registered successfully"}

# User login
@app.post("/login/")
async def login(request: Request, email: str = Form(...), password: str = Form(...), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == email).first()
    if not user or not verify_password(password, user.password):
        raise HTTPException(status_code=400, detail="Invalid email or password")
    
    # Set user ID in session
    request.session['user_id'] = user.id
    return JSONResponse(content={"message": "Login successful", "user_id": user.id}, status_code=200)

# Profile endpoint
@app.get("/profile/")
async def profile(request: Request, db: Session = Depends(get_db)):
    user_id = request.session.get('user_id')
    if not user_id:
        raise HTTPException(status_code=401, detail="Not authenticated")
    
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    return {"message": f"Welcome, {user.email}"}

# Logout endpoint
@app.post("/logout/")
async def logout(request: Request):
    if 'user_id' not in request.session:
        raise HTTPException(status_code=401, detail="Not authenticated")
    
    request.session.clear()
    return {"message": "Logged out successfully"}

# Add a new recycle bin
@app.post("/recycle-bin/")
async def add_recycle_bin(
    name: str = Form(...), 
    location: str = Form(...), 
    description: str = Form(None),
    db: Session = Depends(get_db)
):
    new_bin = RecycleBin(name=name, location=location, description=description)
    db.add(new_bin)
    db.commit()
    db.refresh(new_bin)
    return {
        "message": "Recycle bin added successfully",
        "bin": {
            "id": new_bin.id,
            "name": new_bin.name,
            "location": new_bin.location,
            "description": new_bin.description
        }
    }

# Get all recycle bins
@app.get("/recycle-bins/")
async def get_recycle_bins(db: Session = Depends(get_db)):
    bins = db.query(RecycleBin).all()
    return bins
from fastapi import FastAPI, Form, Depends, HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware  # Import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware  # Correct import for SessionMiddleware
from passlib.context import CryptContext  # To handle password hashing
from starlette.requests import Request
import databases
import sqlalchemy
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

# Initialize FastAPI and set up session middleware
app = FastAPI()

# Enable CORS middleware to allow your frontend to make requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8000"],  # Allow your frontend's URL
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Set up session middleware for handling sessions
app.add_middleware(SessionMiddleware, secret_key="your-secret-key")  # Secure secret key for sessions

# Database setup (SQLite for example)
DATABASE_URL = "sqlite:///./test.db"
database = databases.Database(DATABASE_URL)
metadata = sqlalchemy.MetaData()

Base = declarative_base(metadata=metadata)

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, autoincrement=True)
    email = Column(String(50), unique=True, index=True)
    password = Column(String(100))  # Store hashed passwords, not plaintext

# Create tables
engine = sqlalchemy.create_engine(DATABASE_URL)
Base.metadata.create_all(bind=engine)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Initialize password hashing context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Helper function to get database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Utility function to hash passwords
def hash_password(password: str):
    return pwd_context.hash(password)

# Utility function to verify passwords
def verify_password(plain_password: str, hashed_password: str):
    return pwd_context.verify(plain_password, hashed_password)

# User signup route
@app.post("/register/")
async def register(email: str = Form(...), password: str = Form(...), db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_password = hash_password(password)
    new_user = User(email=email, password=hashed_password)  # Store hashed password
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    return {"message": "User registered successfully"}

# User login route
@app.post("/login/")
async def login(request: Request, email: str = Form(...), password: str = Form(...), db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == email).first()
    if not db_user or not verify_password(password, db_user.password):  # Compare hashed password
        raise HTTPException(status_code=400, detail="Invalid email or password")
    
    # Store user ID in session cookie
    request.session['user_id'] = db_user.id
    
    return JSONResponse(content={"message": "Login successful"}, status_code=200)

# Protect routes that require login
@app.get("/profile/")
async def profile(request: Request):
    user_id = request.session.get('user_id')
    if not user_id:
        raise HTTPException(status_code=401, detail="Not authenticated")
    
    return {"message": f"Welcome user {user_id}"}

# User logout route
@app.post("/logout/")
async def logout(request: Request):
    request.session.clear()  # Clear the session
    return {"message": "Logged out successfully"}

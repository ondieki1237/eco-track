from pydantic import BaseModel
from bson import ObjectId

class EcoData(BaseModel):
    name: str
    description: str
    location: str

    class Config:
        json_encoders = {
            ObjectId: str
        }

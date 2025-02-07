from pydantic import BaseModel

class EcoTrackSchema(BaseModel):
    name: str
    type: str
    date: str

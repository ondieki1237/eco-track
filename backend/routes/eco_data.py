from fastapi import APIRouter, Depends
from fastapi import HTTPException
from .crud import create_eco_data, get_eco_data
from .models import EcoData
from motor.motor_asyncio import AsyncIOMotorCollection

router = APIRouter()

def get_db():
    return Depends(lambda: app.mongodb["eco_data"])

@router.post("/eco_data/")
async def add_eco_data(data: EcoData, collection: AsyncIOMotorCollection = Depends(get_db)):
    eco_data = await create_eco_data(collection, data.dict())
    return {"id": str(eco_data)}

@router.get("/eco_data/{item_id}")
async def read_eco_data(item_id: str, collection: AsyncIOMotorCollection = Depends(get_db)):
    eco_data = await get_eco_data(collection, item_id)
    if eco_data:
        return eco_data
    raise HTTPException(status_code=404, detail="Item not found")

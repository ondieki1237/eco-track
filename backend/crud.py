from motor.motor_asyncio import AsyncIOMotorCollection

async def get_eco_data(collection: AsyncIOMotorCollection, item_id: str):
    return await collection.find_one({"_id": item_id})

async def create_eco_data(collection: AsyncIOMotorCollection, data: dict):
    result = await collection.insert_one(data)
    return result.inserted_id

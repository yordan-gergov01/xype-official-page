from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from app.routers.calculator import router

load_dotenv()

app = FastAPI(title="XYPE API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173", # localhost URL
        "https://xype.io",       # production
    ],
    allow_methods=["POST"],
    allow_headers=["Content-Type"],
)

app.include_router(router)


@app.get("/health")
async def health():
    return {"status": "ok"}
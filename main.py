from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import os

app = FastAPI(title="ggit.ai - Dental AI Assistant")

# Ensure static and templates directories exist
os.makedirs("static/css", exist_ok=True)
os.makedirs("static/js", exist_ok=True)
os.makedirs("templates", exist_ok=True)

# Mount static files (CSS/JS)
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def read_index(request: Request):
    return templates.TemplateResponse(request=request, name="index.html")

@app.post("/submit-lead")
async def handle_lead(
    name: str = Form(...), 
    email: str = Form(...), 
    clinic: str = Form(...),
    country: str = Form(...)
):
    # Here you will integrate your PostgreSQL logic using SQLAlchemy or asyncpg
    # Example: await db.execute(leads.insert().values(name=name, email=email, clinic=clinic, country=country))
    return {"status": "success", "message": "Demo booked! Our team will contact you shortly."}

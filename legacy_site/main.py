from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import os

app = FastAPI(title="ggit.ai - Dental AI Assistant")

# Автоматично уверяване, че папките за статични файлове и шаблони съществуват
os.makedirs("legacy_site/static/css", exist_ok=True)
os.makedirs("legacy_site/static/js", exist_ok=True)
os.makedirs("legacy_site/templates", exist_ok=True)

# Монтиране на статичните файлове (за CSS, изображения и видео бекграунд)
app.mount("/static", StaticFiles(directory="legacy_site/static"), name="static")
templates = Jinja2Templates(directory="legacy_site/templates")


@app.get("/", response_class=HTMLResponse)
async def read_index(request: Request):
    """
    Рандира и визуализира основния Landing Page (index.html) в браузъра.
    """
    return templates.TemplateResponse(request=request, name="index.html")


@app.post("/submit-lead")
async def handle_lead(
    name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),  # 📞 Полето за телефон е интегрирано правилно в FastAPI
    clinic: str = Form(...),
    country: str = Form(...),
):
    """
    Ендпоинт за обработка на изпратените контакти (leads).
    Готов за бъдеща PostgreSQL интеграция.
    """
    # Бъдещо развитие: Тук ще добавиш твоята база данни
    # Пример: await db.execute(leads.insert().values(name=name, email=email, phone=phone, clinic=clinic, country=country))

    return {
        "status": "success",
        "message": "Demo booked! Our team will contact you shortly.",
    }


@app.get("/privacy", response_class=HTMLResponse)
async def read_privacy(request: Request):
    """
    Рандира и визуализира страницата с Политиката за поверителност (privacy.html).
    """
    return templates.TemplateResponse(request=request, name="privacy.html")


@app.get("/terms", response_class=HTMLResponse)
async def read_terms(request: Request):
    """
    Рандира и визуализира страницата с Общите условия за ползване (terms.html).
    """
    return templates.TemplateResponse(request=request, name="terms.html")

from fastapi import APIRouter, UploadFile, File, Form
from app.services.resume_parser import extract_text_from_pdf
from app.services.ai_engine import generate_question

router = APIRouter(prefix="/resume", tags=["Resume"])

@router.post("/upload")
async def upload_resume(
    file: UploadFile = File(...),
    role: str = Form(...)
):
    try:
        file_location = f"uploaded_{file.filename}"

        with open(file_location, "wb") as f:
            f.write(await file.read())

        resume_text = extract_text_from_pdf(file_location)

        print("Extracted Text:", resume_text[:200].encode("ascii", errors="replace").decode("ascii"))

        question = generate_question(role, resume_text)

        return {
            "message": "Resume processed",
            "resume_text": resume_text,
            "question": question
        }

    except Exception as e:
        return {"error": str(e)}
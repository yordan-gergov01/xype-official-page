from fastapi import APIRouter, HTTPException
from app.models.schemas import CalculatorInput, CalculatorResponse, AuditRequest
from app.services.calculator import calculate
from app.services.ai_analysis import analyze
from app.services.email_service import send_audit_request

router = APIRouter(prefix="/api", tags=["calculator"])


@router.post("/calculate", response_model=CalculatorResponse)
async def calculate_roi(data: CalculatorInput):
    try:
        result = calculate(data)
        ai_analysis = analyze(data, result)
        return CalculatorResponse(calculation=result, ai_analysis=ai_analysis)
    except ValueError as e:
        raise HTTPException(status_code=422, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail="Грешка при анализа. Моля опитайте отново.")


@router.post("/audit-request")
async def audit_request(data: AuditRequest):
    try:
        send_audit_request(data)
        return {"success": True}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Грешка при изпращане на имейл.")
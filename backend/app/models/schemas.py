from pydantic import BaseModel, EmailStr
from enum import Enum


class BusinessSector(str, Enum):
    trade = "trade"
    services = "services"
    manufacturing = "manufacturing"
    logistics = "logistics"
    finance = "finance"
    other = "other"


class EmployeeCount(str, Enum):
    small = "1-5"
    medium = "6-20"
    large = "21-50"
    enterprise = "50+"


class RepeatPeriod(str, Enum):
    daily = "daily"
    weekly = "weekly"
    monthly = "monthly"


class CalculatorInput(BaseModel):
    sector: BusinessSector
    employee_count: EmployeeCount
    process_description: str
    repeat_count: int
    repeat_period: RepeatPeriod
    people_involved: int
    minutes_per_cycle: int
    hourly_rate_eur: float  # 5–100€


class CalculationResult(BaseModel):
    hours_lost_per_month: float
    cost_per_month_eur: float
    cost_per_year_eur: float


class AIAnalysis(BaseModel):
    process_category: str
    automation_complexity: str  # "easy" | "middle" | "difficult"
    analysis_text: str


class CalculatorResponse(BaseModel):
    calculation: CalculationResult
    ai_analysis: AIAnalysis


class AuditRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str | None = None
    process_description: str
    cost_per_year_eur: float
    automation_complexity: str


class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str | None = None
    message: str
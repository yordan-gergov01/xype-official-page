from app.models.schemas import CalculatorInput, CalculationResult, BusinessSector, EmployeeCount

SECTOR_BG = {
    BusinessSector.trade: "Търговия",
    BusinessSector.services: "Услуги",
    BusinessSector.manufacturing: "Производство",
    BusinessSector.logistics: "Логистика",
    BusinessSector.finance: "Финанси/Счетоводство",
    BusinessSector.other: "Друго",
}

EMPLOYEE_COUNT_BG = {
    EmployeeCount.small: "1-5 служители",
    EmployeeCount.medium: "6-20 служители",
    EmployeeCount.large: "21-50 служители",
    EmployeeCount.enterprise: "50+ служители",
}


def build_analysis_prompt(data: CalculatorInput, result: CalculationResult) -> str:
    return f"""Ти си експерт по бизнес автоматизация и изкуствен интелект. Анализирай следния бизнес процес и върни отговор САМО като валиден JSON без никакъв друг текст.

КОНТЕКСТ ЗА БИЗНЕСА:
- Сфера: {SECTOR_BG[data.sector]}
- Размер: {EMPLOYEE_COUNT_BG[data.employee_count]}

ПРОЦЕСЪТ:
- Описание: {data.process_description}
- Повторения: {data.repeat_count} пъти {_period_bg(data.repeat_period)}
- Участници: {data.people_involved} човека
- Времетраене: {data.minutes_per_cycle} минути на цикъл

ИЗЧИСЛЕНИ ЗАГУБИ:
- Изгубени часове/месец: {result.hours_lost_per_month}
- Изгубена сума/месец: {result.cost_per_month_eur}€
- Изгубена сума/година: {result.cost_per_year_eur}€

ИНСТРУКЦИИ:
Върни САМО този JSON без markdown, без обяснения:
{{
  "process_category": "<кратко название на типа процес, напр. 'Обработка на документи'>",
  "automation_complexity": "<една от: Лесна, Средна, Сложна>",
  "analysis_text": "<3-4 изречения на български: какъв е процесът, защо е подходящ/неподходящ за автоматизация, какво би спечелил бизнесът>"
}}

ВАЖНО за automation_complexity:
- Лесна: повтарящи се задачи с ясни правила (въвеждане на данни, генериране на документи, изпращане на имейли)
- Средна: задачи с условна логика или интеграции между системи
- Сложна: задачи изискващи преценка, неструктурирани данни или сложни workflows"""


def _period_bg(period) -> str:
    return {"daily": "на ден", "weekly": "на седмица", "monthly": "на месец"}[period.value]
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

ПРИМЕРИ ЗА КАЧЕСТВЕН АНАЛИЗ:
Пример 1:
{{
  "process_category": "Обработка на фактури",
  "automation_complexity": "Лесна",
  "analysis_text": "Процесът е класически случай на ръчно въвеждане на структурирани данни — задача, която AI решава надеждно. OCR модел извлича данните от PDF фактурите, след което RPA робот ги въвежда директно в счетоводния софтуер без човешка намеса. При 20 фактури на ден това означава, че двамата служители връщат тези 117 часа месечно към работа с реална стойност."
}}

Пример 2:
{{
  "process_category": "Интеграция между системи",
  "automation_complexity": "Средна",
  "analysis_text": "Основното предизвикателство тук е, че данните живеят в три отделни системи без връзка помежду им. API интеграция или RPA робот може да събира статусите автоматично всяка сутрин и да генерира отчета без човешка намеса. Трите служители спестяват 49 часа месечно, а мениджмънтът получава отчета в 8:00 вместо в 10:00."
}}

ИНСТРУКЦИИ:
Върни САМО този JSON без markdown, без обяснения:
{{
  "process_category": "<кратко название на типа процес>",
  "automation_complexity": "<една от: Лесна, Средна, Сложна>",
  "analysis_text": "<3-4 изречения: каква конкретна технология решава проблема и какъв е конкретният резултат за този бизнес. Използвай конкретните числа от изчислените загуби. Без общи фрази.>"
}}

ВАЖНО за automation_complexity:
- Лесна: повтарящи се задачи с ясни правила (въвеждане на данни, генериране на документи, изпращане на имейли)
- Средна: задачи с условна логика или интеграции между системи
- Сложна: задачи изискващи преценка, неструктурирани данни или сложни workflows"""


def _period_bg(period) -> str:
    return {"daily": "на ден", "weekly": "на седмица", "monthly": "на месец"}[period.value]
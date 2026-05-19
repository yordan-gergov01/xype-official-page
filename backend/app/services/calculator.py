from app.models.schemas import CalculatorInput, CalculationResult, RepeatPeriod

def calculate(data: CalculatorInput) -> CalculationResult:
    monthly_cycles = _to_monthly_cycles(data.repeat_count, data.repeat_period)

    minutes_per_month = monthly_cycles * data.people_involved * data.minutes_per_cycle
    hours_lost_per_month = round(minutes_per_month / 60, 2)

    cost_per_month = round(hours_lost_per_month * data.hourly_rate_eur, 2)
    cost_per_year = round(cost_per_month * 12, 2)

    return CalculationResult(
        hours_lost_per_month=hours_lost_per_month,
        cost_per_month_eur=cost_per_month,
        cost_per_year_eur=cost_per_year,
    )


def _to_monthly_cycles(count: int, period: RepeatPeriod) -> float:
    if period == RepeatPeriod.daily:
        return count * 22  # working days per month
    if period == RepeatPeriod.weekly:
        return count * 4.33
    return count  # monthly
import json
import os
from openai import OpenAI
from app.models.schemas import CalculatorInput, CalculationResult, AIAnalysis
from app.prompts.analysis import build_analysis_prompt


def analyze(data: CalculatorInput, result: CalculationResult) -> AIAnalysis:
    client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

    prompt = build_analysis_prompt(data, result)

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
        {
        "role": "system",
        "content": "You are a business automation expert. You respond ONLY with valid JSON. Never use generic phrases. Always mention specific technology (OCR, RPA, API integration, AI agent). Always use the exact numbers from the calculated losses."
        },
        {
        "role": "user",
        "content": prompt
        }
    ],
        temperature=0.3,
        max_tokens=500,
    )

    raw = response.choices[0].message.content.strip()

    try:
        parsed = json.loads(raw)
    except json.JSONDecodeError:
        # Guard error if the model returns something wrong
        raise ValueError(f"Невалиден JSON от AI: {raw}")

    return AIAnalysis(
        process_category=parsed["process_category"],
        automation_complexity=parsed["automation_complexity"],
        analysis_text=parsed["analysis_text"],
    )
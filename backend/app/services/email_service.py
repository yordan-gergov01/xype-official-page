import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from app.models.schemas import AuditRequest, ContactRequest
import os


def send_audit_request(data: AuditRequest) -> None:
    subject = f"Ново запитване за AI одит - {data.name}"

    body = f"""
    Ново запитване за безплатен AI одит от сайта.

    ИМЕ: {data.name}
    ИМЕЙЛ: {data.email}
    ТЕЛЕФОН: {data.phone or "не е предоставен"}

    ПРОЦЕС:
    {data.process_description}

    ИЗЧИСЛЕНИ ЗАГУБИ:
    - Годишна загуба: {data.cost_per_year_eur}€
    - Сложност на автоматизация: {data.automation_complexity}
    """

    _send(subject, body)


def send_contact_request(data: ContactRequest) -> None:
    subject = f"Ново запитване от сайта - {data.name}"

    body = f"""
    Ново запитване от формата за контакт.

    ИМЕ: {data.name}
    ИМЕЙЛ: {data.email}
    ТЕЛЕФОН: {data.phone or "не е предоставен"}

    СЪОБЩЕНИЕ:
    {data.message}
    """

    _send(subject, body)


def _send(subject: str, body: str) -> None:
    email_from = os.getenv("EMAIL_FROM")
    email_to = os.getenv("EMAIL_TO")
    smtp_host = os.getenv("SMTP_HOST")
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    smtp_user = os.getenv("SMTP_USER")
    smtp_pass = os.getenv("SMTP_PASS")

    msg = MIMEMultipart()
    msg["From"] = email_from
    msg["To"] = email_to
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain", "utf-8"))

    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()
        server.login(smtp_user, smtp_pass)
        server.sendmail(email_from, email_to, msg.as_string())
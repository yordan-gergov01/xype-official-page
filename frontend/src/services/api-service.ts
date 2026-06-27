import { CalculatorInput, CalculatorResponse, AuditRequest, ContactRequest } from '@/types/calculator';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000';

export async function calculateROI(input: CalculatorInput): Promise<CalculatorResponse> {
  const response = await fetch(`${API_URL}/api/calculate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error('Грешка при изчислението. Моля опитайте отново.');
  }

  return response.json();
}

export async function submitAuditRequest(data: AuditRequest): Promise<void> {
  const response = await fetch(`${API_URL}/api/audit-request`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Грешка при изпращането. Моля опитайте отново.');
  }
}

export async function submitContactRequest(data: ContactRequest): Promise<void> {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Грешка при изпращането. Моля опитайте отново.');
  }
}
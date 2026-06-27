export type BusinessSector =
  | 'trade'
  | 'services'
  | 'manufacturing'
  | 'logistics'
  | 'finance'
  | 'other';

export type EmployeeCount = '1-5' | '6-20' | '21-50' | '50+';

export type RepeatPeriod = 'daily' | 'weekly' | 'monthly';

export interface CalculatorInput {
  sector: BusinessSector;
  employee_count: EmployeeCount;
  process_description: string;
  repeat_count: number;
  repeat_period: RepeatPeriod;
  people_involved: number;
  minutes_per_cycle: number;
  hourly_rate_eur: number;
}

export interface CalculationResult {
  hours_lost_per_month: number;
  cost_per_month_eur: number;
  cost_per_year_eur: number;
}

export interface AIAnalysis {
  process_category: string;
  automation_complexity: 'Лесна' | 'Средна' | 'Сложна';
  analysis_text: string;
}

export interface CalculatorResponse {
  calculation: CalculationResult;
  ai_analysis: AIAnalysis;
}

export interface AuditRequest {
  name: string;
  email: string;
  phone?: string;
  process_description: string;
  cost_per_year_eur: number;
  automation_complexity: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export type Step = 'step1' | 'step2' | 'step3' | 'results' | 'audit';
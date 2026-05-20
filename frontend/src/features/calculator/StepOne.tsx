import { CalculatorInput, BusinessSector, EmployeeCount } from '@/types/calculator';
import Button from '@/components/ui/Button';

const SECTORS: { value: BusinessSector; label: string }[] = [
  { value: 'trade', label: 'Търговия' },
  { value: 'services', label: 'Услуги' },
  { value: 'manufacturing', label: 'Производство' },
  { value: 'logistics', label: 'Логистика' },
  { value: 'finance', label: 'Финанси / Счетоводство' },
  { value: 'other', label: 'Друго' },
];

const EMPLOYEE_COUNTS: { value: EmployeeCount; label: string }[] = [
  { value: '1-5', label: '1 - 5 служители' },
  { value: '6-20', label: '6 - 20 служители' },
  { value: '21-50', label: '21 - 50 служители' },
  { value: '50+', label: '50+ служители' },
];

const selectClass =
  'w-full bg-[#111111] border border-[#1F1F1F] text-foreground px-4 py-3 text-[15px] font-sans mb-4 focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer';

interface Props {
  data: Pick<CalculatorInput, 'sector' | 'employee_count'>;
  onChange: (data: Partial<CalculatorInput>) => void;
  onNext: () => void;
}

function StepOne({ data, onChange, onNext }: Props) {
  const isValid = data.sector && data.employee_count;

  return (
    <div>
      <p className="uppercase text-primary mb-6" style={{ fontSize: 13, letterSpacing: '0.25em' }}>
        Стъпка 1 от 3 - За вашия бизнес
      </p>

      <div className="flex flex-col gap-1">
        <label style={{ fontSize: 13, color: '#555555' }}>Сфера на дейност</label>
        <select
          className={selectClass}
          value={data.sector ?? ''}
          onChange={(e) => onChange({ sector: e.target.value as BusinessSector })}
        >
          <option value="" disabled>Изберете сфера...</option>
          {SECTORS.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>

        <label style={{ fontSize: 13, color: '#555555' }}>Брой служители</label>
        <select
          className={selectClass}
          value={data.employee_count ?? ''}
          onChange={(e) => onChange({ employee_count: e.target.value as EmployeeCount })}
        >
          <option value="" disabled>Изберете...</option>
          {EMPLOYEE_COUNTS.map((e) => (
            <option key={e.value} value={e.value}>{e.label}</option>
          ))}
        </select>
      </div>

      <Button variant="outline" fullWidth disabled={!isValid} onClick={onNext}>
        Напред
      </Button>
    </div>
  );
}

export default StepOne;
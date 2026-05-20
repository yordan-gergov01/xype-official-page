import { CalculatorInput, RepeatPeriod } from '@/types/calculator';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/TextArea';

const PERIODS: { value: RepeatPeriod; label: string }[] = [
  { value: 'daily', label: 'на ден' },
  { value: 'weekly', label: 'на седмица' },
  { value: 'monthly', label: 'на месец' },
];

const selectClass =
  'w-full bg-[#111111] border border-[#1F1F1F] text-foreground px-4 py-3 text-[15px] font-sans mb-4 focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer';

  interface Props {
    data: Pick<
      CalculatorInput,
      'process_description' | 'repeat_count' | 'repeat_period' | 'people_involved' | 'minutes_per_cycle'
    >;
    onChange: (data: Partial<CalculatorInput>) => void;
    onNext: () => void;
    onBack: () => void;
  }

function StepTwo({ data, onChange, onNext, onBack }: Props) {
  const isValid =
    data.process_description?.trim().length > 10 &&
    data.repeat_count > 0 &&
    data.repeat_period &&
    data.people_involved > 0 &&
    data.minutes_per_cycle > 0;

  return (
    <div>
      <p className="uppercase text-primary mb-6" style={{ fontSize: 13, letterSpacing: '0.25em' }}>
        Стъпка 2 от 3 - Процесът
      </p>

      <div className="flex flex-col gap-1">
        <label style={{ fontSize: 13, color: '#555555' }}>Опишете процеса</label>
        <Textarea
          rows={4}
          placeholder="Пример: Ръчно въвеждаме фактури от имейл в счетоводния софтуер..."
          value={data.process_description ?? ''}
          onChange={(e) => onChange({ process_description: e.target.value })}
        />

        <label style={{ fontSize: 13, color: '#555555' }}>Колко пъти се повтаря?</label>
        <div className="flex gap-3">
          <Input
            type="number"
            min={1}
            placeholder="Брой"
            value={data.repeat_count || ''}
            onChange={(e) => onChange({ repeat_count: Number(e.target.value) })}
            className="mb-4"
          />
          <select
            className={selectClass}
            value={data.repeat_period ?? ''}
            onChange={(e) => onChange({ repeat_period: e.target.value as RepeatPeriod })}
          >
            <option value="" disabled>Период...</option>
            {PERIODS.map((p) => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </select>
        </div>

        <label style={{ fontSize: 13, color: '#555555' }}>Колко служители участват?</label>
        <Input
          type="number"
          min={1}
          placeholder="Брой служители"
          value={data.people_involved || ''}
          onChange={(e) => onChange({ people_involved: Number(e.target.value) })}
        />

        <label style={{ fontSize: 13, color: '#555555' }}>Колко минути отнема на един човек?</label>
        <Input
          type="number"
          min={1}
          placeholder="Минути на цикъл"
          value={data.minutes_per_cycle || ''}
          onChange={(e) => onChange({ minutes_per_cycle: Number(e.target.value) })}
        />
      </div>

      <div className="flex gap-3 mt-2">
        <Button variant="outline" onClick={onBack}>
          Назад
        </Button>
        <Button variant="outline" fullWidth disabled={!isValid} onClick={onNext}>
          Напред
        </Button>
      </div>
    </div>
  );
}

export default StepTwo;
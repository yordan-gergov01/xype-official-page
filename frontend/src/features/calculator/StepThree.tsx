import { CalculatorInput } from '@/types/calculator';
import Button from '@/components/ui/Button';

interface Props {
  data: Pick<CalculatorInput, 'hourly_rate_eur'>;
  onChange: (data: Partial<CalculatorInput>) => void;
  onSubmit: () => void;
  onBack: () => void;
  loading: boolean;
}

function StepThree({ data, onChange, onSubmit, onBack, loading }: Props) {
  const rate = data.hourly_rate_eur || 10;

  return (
    <div>
      <p className="uppercase text-primary mb-6" style={{ fontSize: 13, letterSpacing: '0.25em' }}>
        Стъпка 3 от 3 - Цена на времето
      </p>

      <div className="flex flex-col gap-4">
        <div>
          <label style={{ fontSize: 13, color: '#555555' }}>
            Приблизителна стойност на час труд
          </label>
          <p style={{ fontSize: 12, color: '#444444' }} className="mb-6">
            (Помага ни да изчислим по-точно за по-добри резултати)
          </p>

          <div className="flex items-center justify-between mb-3">
            <span style={{ fontSize: 13, color: '#555555' }}>5€</span>
            <span
              className="text-primary font-semibold"
              style={{ fontSize: 22 }}
            >
              {rate}€ / час
            </span>
            <span style={{ fontSize: 13, color: '#555555' }}>100€</span>
          </div>

          <input
            type="range"
            min={5}
            max={100}
            step={1}
            value={rate}
            onChange={(e) => onChange({ hourly_rate_eur: Number(e.target.value) })}
            className="w-full accent-primary cursor-pointer"
          />
        </div>
      </div>

      <div className="flex gap-3 mt-10">
        <Button variant="outline" onClick={onBack} disabled={loading}>
          ← Назад
        </Button>
        <Button variant="outline" fullWidth onClick={onSubmit} disabled={loading}>
          {loading ? 'Анализираме...' : 'Изчисли резултата →'}
        </Button>
      </div>
    </div>
  );
}

export default StepThree;
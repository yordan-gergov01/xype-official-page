import Button from '@/components/ui/Button';
import { formatNumber } from '@/utils/formatNumber';
import { CalculatorResponse } from '@/types/calculator';

const COMPLEXITY_COLOR = {
  'Лесна': '#5a9e72',
  'Средна': '#e0a035',
  'Сложна': '#c0392b',
};

interface Props {
  results: CalculatorResponse;
  onAuditRequest: () => void;
}

function ResultsView({ results, onAuditRequest }: Props) {
  const { calculation, ai_analysis } = results;

  return (
    <div className="flex flex-col gap-8">

      <div>
        <p className="uppercase text-primary mb-5" style={{ fontSize: 13, letterSpacing: '0.25em' }}>
          Вашите резултати
        </p>
        <div className="flex flex-col gap-3">
          <div
            className="flex justify-between items-center px-5 py-4"
            style={{ border: '1px solid #1F1F1F', backgroundColor: '#0C0C0C' }}
          >
            <span style={{ fontSize: 14, color: '#555555' }}>Изгубени часове / месец</span>
            <span className="text-foreground font-semibold" style={{ fontSize: 18 }}>
              {calculation.hours_lost_per_month}ч
            </span>
          </div>

          <div
            className="flex justify-between items-center px-5 py-4"
            style={{ border: '1px solid #1F1F1F', backgroundColor: '#0C0C0C' }}
          >
            <span style={{ fontSize: 14, color: '#555555' }}>Изгубена сума / месец</span>
            <span className="text-foreground font-semibold" style={{ fontSize: 18 }}>
              {formatNumber(calculation.cost_per_month_eur)}€
            </span>
          </div>

          <div
            className="flex justify-between items-center px-5 py-4"
            style={{ border: '1px solid #2a2a2a', backgroundColor: '#111111' }}
          >
            <span style={{ fontSize: 14, color: '#888888' }}>Изгубена сума / година</span>
            <span className="font-bold" style={{ fontSize: 24, color: '#5a9e72' }}>
              {formatNumber(calculation.cost_per_year_eur)}€
            </span>
          </div>
        </div>
      </div>

      <div style={{ borderLeft: '2px solid #1F1F1F', paddingLeft: '1.25rem' }}>
        <div className="flex items-center gap-3 mb-3">
          <span style={{ fontSize: 13, color: '#555555' }}>Категория:</span>
          <span style={{ fontSize: 13, color: '#888888' }}>{ai_analysis.process_category}</span>
          <span
            className="ml-auto px-3 py-1"
            style={{
              fontSize: 12,
              color: COMPLEXITY_COLOR[ai_analysis.automation_complexity],
              border: `1px solid ${COMPLEXITY_COLOR[ai_analysis.automation_complexity]}`,
            }}
          >
            {ai_analysis.automation_complexity} автоматизация
          </span>
        </div>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: '#777777' }}>
          {ai_analysis.analysis_text}
        </p>
      </div>

      <div
        className="flex flex-col gap-4 px-5 py-6"
        style={{ border: '1px solid #1F1F1F', backgroundColor: '#0C0C0C' }}
      >
        <p className="text-foreground font-semibold" style={{ fontSize: 17 }}>
          Искате да разберете как точно да автоматизирате този процес?
        </p>
        <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.7 }}>
          Заявете безплатен AI одит - ще се свържем с вас и ще разгледаме конкретните
          възможности за вашия бизнес.
        </p>
        <Button variant="outline" fullWidth onClick={onAuditRequest}>
          Искам безплатен AI одит
        </Button>
      </div>

    </div>
  );
}

export default ResultsView;
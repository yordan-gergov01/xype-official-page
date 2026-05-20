import { useState } from 'react';

import { AuditRequest } from '@/types/calculator';
import { CalculatorResponse } from '@/types/calculator';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Loader from '@/components/ui/Loader';

import { submitAuditRequest } from '@/services/api-service';

interface Props {
  results: CalculatorResponse;
  onBack: () => void;
}

function AuditCTA({ results, onBack }: Props) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError(false);

    const data: AuditRequest = {
      name,
      email,
      phone: phone || undefined,
      process_description: '',
      cost_per_year_eur: results.calculation.cost_per_year_eur,
      automation_complexity: results.ai_analysis.automation_complexity,
    };

    try {
      await submitAuditRequest(data);
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const isValid = name.trim().length > 1 && email.includes('@');

  if (submitted) {
    return (
      <div className="text-center py-16 flex flex-col gap-4">
        <p className="text-primary uppercase" style={{ fontSize: 13, letterSpacing: '0.25em' }}>
          Заявката е изпратена
        </p>
        <p className="text-foreground font-semibold" style={{ fontSize: 22 }}>
          Ще се свържем с вас скоро.
        </p>
        <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.7 }}>
          Проверете имейла си - ще получите потвърждение от нас в рамките на 24 часа.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="uppercase text-primary mb-2" style={{ fontSize: 13, letterSpacing: '0.25em' }}>
        Безплатен AI одит
      </p>
      <p className="text-foreground font-semibold mb-1" style={{ fontSize: 20 }}>
        Оставете контакт и ще се свържем с вас.
      </p>
      <p className="mb-8" style={{ fontSize: 14, color: '#555555', lineHeight: 1.7 }}>
        Ще разгледаме заедно процеса и ще ви покажем конкретни възможности за автоматизация.
      </p>

      <Input
        placeholder="Вашето име"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Имейл адрес"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="tel"
        placeholder="Телефон (по желание)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      {error && (
        <p className="text-red-500 text-sm mb-4">
          Нещо се обърка. Моля опитайте отново.
        </p>
      )}

      <div className="flex gap-3 mt-2">
        <Button variant="outline" onClick={onBack} disabled={loading}>
          ← Назад
        </Button>
        <Button variant="outline" fullWidth onClick={handleSubmit} disabled={!isValid || loading}>
          {loading ? <Loader /> : 'Изпратете заявката →'}
        </Button>
      </div>
    </div>
  );
}

export default AuditCTA;
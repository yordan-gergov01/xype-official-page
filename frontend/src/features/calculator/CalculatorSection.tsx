import { useState } from 'react';

import { CalculatorInput, CalculatorResponse, Step } from '@/types/calculator';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import ResultsView from './ResultsView';
import AuditCTA from './AuditCTA';
import { calculateROI } from '@/services/api-service';

const INITIAL_INPUT: Partial<CalculatorInput> = {
  hourly_rate_eur: 10,
};

function CalculatorSection() {
  const [step, setStep] = useState<Step>('step1');
  const [input, setInput] = useState<Partial<CalculatorInput>>(INITIAL_INPUT);
  const [results, setResults] = useState<CalculatorResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (data: Partial<CalculatorInput>) => {
    setInput((prev) => ({ ...prev, ...data }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await calculateROI(input as CalculatorInput);
      setResults(response);
      setStep('results');
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="research" style={{ backgroundColor: '#0C0C0C' }} className="py-24 px-6">
      <div className="max-w-[560px] mx-auto">

        {step !== 'results' && step !== 'audit' && (
          <>
            <p className="uppercase text-primary" style={{ fontSize: 14, letterSpacing: '0.3em' }}>
              Безплатен калкулатор
            </p>
            <h2 className="mt-4 text-[28px] font-semibold text-foreground leading-[1.3]">
              Колко губи бизнесът ти от ръчна работа?
            </h2>
            <p className="mt-3 mb-10" style={{ fontSize: 14, lineHeight: 1.7, color: '#555555' }}>
              Попълнете данните за един повтарящ се процес и ще изчислим загубеното
              време и пари - безплатно, за секунди.
            </p>
          </>
        )}

        {step === 'step1' && (
          <StepOne
            data={input as any}
            onChange={handleChange}
            onNext={() => setStep('step2')}
          />
        )}

        {step === 'step2' && (
          <StepTwo
            data={input as any}
            onChange={handleChange}
            onNext={() => setStep('step3')}
            onBack={() => setStep('step1')}
          />
        )}

        {step === 'step3' && (
          <StepThree
            data={input as any}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onBack={() => setStep('step2')}
            loading={loading}
          />
        )}

        {step === 'results' && results && (
          <ResultsView
            results={results}
            onAuditRequest={() => setStep('audit')}
          />
        )}

        {step === 'audit' && results && (
          <AuditCTA
            results={results}
            onBack={() => setStep('results')}
          />
        )}

        {error && (
          <p className="text-red-500 text-sm mt-4">{error}</p>
        )}

      </div>
    </section>
  );
}

export default CalculatorSection;
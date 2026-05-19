import ResearchForm from './ResearchForm';

function ResearchSection() {
  return (
    <section id="research" style={{ backgroundColor: '#0C0C0C' }} className="py-24 px-6">
      <div className="max-w-[560px] mx-auto">
        <p className="uppercase text-primary" style={{ fontSize: 14, letterSpacing: '0.3em' }}>
          Проучване
        </p>
        <h2 className="mt-4 text-[28px] font-semibold text-foreground leading-[1.3]">
          Какво е най-голямото затруднение във вашия бизнес в момента?
        </h2>
        <p className="mt-3" style={{ fontSize: 14, lineHeight: 1.7, color: '#555555' }}>
          Правим проучване на реалните предизвикателства на българския бизнес. Вашият отговор ни
          помага да разберем къде AI може да има истинска стойност.
        </p>
        <ResearchForm />
      </div>
    </section>
  );
}

export default ResearchSection;

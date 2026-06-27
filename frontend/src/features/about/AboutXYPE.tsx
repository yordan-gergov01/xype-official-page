import Reveal from '@/components/Reveal';

const CARDS = [
  { title: '100% по поръчка', text: 'Без шаблони и компромиси.' },
  { title: 'От идея до внедряване', text: 'Поемаме целия път - от стратегията до работещото решение.' },
  { title: 'Фокус върху българския пазар', text: 'Разбираме контекста, в който работите.' },
];

function AboutXYPE() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <p className="flex items-center gap-3 uppercase text-primary text-[13px] tracking-[0.3em]">
            <span className="inline-block w-0.5 h-3.5 bg-current" />
            Кои сме ние?
          </p>
          <h2 className="mt-5 font-bold text-foreground leading-[1.1] text-[clamp(32px,5vw,52px)]">
            XYPE е специализирана AI агенция.
          </h2>
          <div className="mt-6 max-w-[640px] flex flex-col gap-5 text-[16px] leading-[1.8] text-[#777777]">
            <p>
              Проектираме и внедряваме интелигентни системи, които променят начина, по който
              работят бизнесите.
            </p>
            <p>
              Не доставяме готови решения. Всяка система е изградена специално за процесите, данните
              и логиката на конкретния бизнес.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 120}>
              <div className="h-full p-8 border border-[#1A1A1A] bg-[#0F0F0F] text-center transition-colors duration-300 hover:border-secondary">
                <h3 className="text-foreground font-semibold text-[19px]">{card.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.65] text-[#777777]">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutXYPE;

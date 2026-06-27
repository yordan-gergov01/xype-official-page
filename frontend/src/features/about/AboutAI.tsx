import { FiZap, FiLink } from 'react-icons/fi';
import { FaBrain } from 'react-icons/fa';
import type { IconType } from 'react-icons';

import Reveal from '@/components/Reveal';

const CARDS: { icon: IconType; title: string; text: string }[] = [
  {
    icon: FiZap,
    title: 'Автоматизация',
    text: 'Поема повтарящите се задачи и освобождава екипа ви за работата, която наистина носи стойност.',
  },
  {
    icon: FaBrain,
    title: 'Интелигентност',
    text: 'Решения, базирани на данни и закономерности, а не на предположения и интуиция.',
  },
  {
    icon: FiLink,
    title: 'Интеграция',
    text: 'Вписва се безпроблемно в инструментите и процесите, които вече използвате.',
  },
];

function AboutAI() {
  return (
    <section className="py-24 px-6 bg-[#0C0C0C]">
      <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left - narrative */}
        <Reveal>
          <p className="flex items-center gap-3 uppercase text-primary text-[13px] tracking-[0.3em]">
            <span className="inline-block w-0.5 h-3.5 bg-current" />
            Какво е изкуствен интелект?
          </p>
          <h2 className="mt-5 font-bold text-foreground leading-[1.1] text-[clamp(32px,5vw,52px)]">
            Системи, които учат, разбират и действат.
          </h2>
          <div className="mt-6 flex flex-col gap-5 text-[16px] leading-[1.8] text-[#777777]">
            <p>
              AI системите анализират данни, разпознават закономерности и вземат решения - без да им
              се налага да бъдат програмирани за всяка ситуация поотделно.
            </p>
            <p>
              Представете си служител, който никога не спи, обработва хиляди документа за секунди и
              става по-добър с всяко взаимодействие.
            </p>
            <p>
              Именно тук минава границата между компаниите, които ще водят в следващото десетилетие,
              и тези, които ще наваксват.
            </p>
          </div>
        </Reveal>

        {/* Right - capability cards */}
        <div className="flex flex-col gap-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 120}>
              <div className="flex items-start gap-4 p-6 border border-[#1A1A1A] bg-[#0F0F0F] transition-colors duration-300 hover:border-secondary">
                <div className="flex items-center justify-center shrink-0 w-10 h-10 bg-[rgba(90,158,114,0.10)] text-primary">
                  <card.icon size={20} />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold text-[17px]">{card.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-[1.65] text-[#777777]">{card.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutAI;

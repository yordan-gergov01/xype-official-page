import { FiMessageSquare, FiShare2, FiBarChart2 } from 'react-icons/fi';
import { FaPuzzlePiece } from 'react-icons/fa';
import type { IconType } from 'react-icons';

import Reveal from '@/components/Reveal';

const SERVICES: { icon: IconType; title: string; text: string }[] = [
  {
    icon: FiMessageSquare,
    title: 'AI чатботове и асистенти',
    text: 'Интелигентни асистенти, които отговарят на клиентски запитвания, квалифицират потенциални клиенти и подкрепят екипа ви денонощно.',
  },
  {
    icon: FiShare2,
    title: 'Автоматизация на процеси',
    text: 'Поемаме повтарящите се процеси с автоматизация, която се адаптира и подобрява във времето.',
  },
  {
    icon: FiBarChart2,
    title: 'Анализ на данни и отчети',
    text: 'Превръщаме суровите данни в ясни изводи чрез автоматизиран анализ и интелигентни табла.',
  },
  {
    icon: FaPuzzlePiece,
    title: 'Персонализирани AI интеграции',
    text: 'Вграждаме AI възможности директно във вашите инструменти, CRM и бизнес системи.',
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-[#0C0C0C]">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <p className="flex items-center gap-3 uppercase text-primary text-[13px] tracking-[0.3em]">
            <span className="inline-block w-0.5 h-3.5 bg-current" />
            Какво изграждаме
          </p>
          <h2 className="mt-5 font-bold text-foreground leading-[1.1] text-[clamp(32px,5vw,52px)]">
            Нашите възможности.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 2) * 120}>
              <div className="h-full p-8 border border-[#1A1A1A] bg-[#0F0F0F] transition-colors duration-300 hover:border-secondary">
                <div className="text-primary">
                  <service.icon size={26} />
                </div>
                <h3 className="mt-5 text-foreground font-semibold text-[20px]">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-[#777777]">{service.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

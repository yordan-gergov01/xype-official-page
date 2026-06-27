import Reveal from '@/components/Reveal';

function WorkSection() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <p className="flex items-center gap-3 uppercase text-primary text-[13px] tracking-[0.3em]">
            <span className="inline-block w-0.5 h-3.5 bg-current" />
            Нашата работа
          </p>
          <h2 className="mt-5 font-bold text-foreground leading-[1.1] text-[clamp(32px,5vw,52px)]">
            Проекти в подготовка.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-[#777777]">
            В момента подготвяме селекция от реализирани проекти - очаквайте я съвсем скоро.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="aspect-[4/3] p-6 border border-[#161616] bg-[#0D0D0D] flex flex-col justify-end gap-3">
                <div className="h-3 w-1/3 animate-pulse bg-[#1C1C1C]" />
                <div className="h-2.5 w-2/3 animate-pulse bg-[#161616]" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;

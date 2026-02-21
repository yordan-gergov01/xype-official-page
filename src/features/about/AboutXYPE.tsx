function AboutXYPE() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[680px] mx-auto border-l-2 border-secondary pl-8">
        <p className="uppercase text-primary" style={{ fontSize: 11, letterSpacing: '0.3em' }}>
          Кои сме ние?
        </p>
        <h2 className="mt-4 text-[32px] font-semibold text-foreground">
          XYPE е специализирана AI агенция.
        </h2>
        <div
          className="mt-6 flex flex-col gap-5"
          style={{ fontSize: 16, lineHeight: 1.8, color: '#777777' }}
        >
          <p>
            Проектираме и внедряваме интелигентни системи, които трансформират начина, по който
            бизнесите работят.
          </p>
          <p>
            Не доставяме готови шаблони. Всяко решение е изградено специално за процесите, данните и
            логиката на конкретния бизнес.
          </p>
          <p>Работим с компании, за които AI не е мода, а следваща стъпка.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutXYPE;

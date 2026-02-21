function AboutAI() {
  return (
    <section style={{ backgroundColor: '#0C0C0C' }} className="py-24 px-6">
      <div className="max-w-[680px] mx-auto border-l-2 border-secondary pl-8">
        <p className="uppercase text-primary" style={{ fontSize: 11, letterSpacing: '0.3em' }}>
          Какво е изкуствен интелект?
        </p>
        <h2 className="mt-4 text-[32px] font-semibold text-foreground">
          Системи, които учат, разбират и действат.
        </h2>
        <div
          className="mt-6 flex flex-col gap-5"
          style={{ fontSize: 16, lineHeight: 1.8, color: '#777777' }}
        >
          <p>
            AI системите анализират данни, разпознават закономерности и вземат решения — без да им
            се налага да бъдат програмирани за всяка ситуация.
          </p>
          <p>
            Представете си служител, който никога не спи, обработва хиляди документа за секунди и се
            учи от всяко взаимодействие с клиент.
          </p>
          <p>
            Именно тук е разликата между компаниите, които ще оцелеят в следващото десетилетие, и
            тези, които няма да го направят.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutAI;

import NeuralCanvas from '@/components/NeuralCanvas';

function HeroSection({ onScrollToForm }: { onScrollToForm: () => void }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <NeuralCanvas />
      <div className="relative z-10 text-center max-w-[720px] px-6">
        <p className="uppercase text-primary" style={{ fontSize: 14, letterSpacing: '0.35em' }}>
          Изкуствен интелект · Бизнес · България
        </p>

        <div className="relative mt-6">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, rgba(90,158,114,0.10), transparent 70%)',
            }}
          />
          <h1
            className="relative text-foreground font-bold leading-[1.1]"
            style={{ fontSize: 'clamp(44px, 7vw, 88px)' }}
          >
            AI не е бъдещето.
            <br />
            Той вече е тук.
          </h1>
        </div>

        <p
          className="mt-8 mx-auto max-w-[540px]"
          style={{ fontSize: 17, lineHeight: 1.7, color: '#888888' }}
        >
          Изкуственият интелект вече не е тема само за технологичните гиганти. Той навлиза в малкия
          и среден бизнес — тихо, но необратимо.
        </p>

        <button
          onClick={onScrollToForm}
          className="mt-12 border border-primary bg-transparent text-primary px-9 py-3.5 text-[15px] tracking-[0.05em] cursor-pointer transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_28px_rgba(90,158,114,0.3)]"
        >
          Споделете с нас →
        </button>
      </div>
    </section>
  );
}

export default HeroSection;

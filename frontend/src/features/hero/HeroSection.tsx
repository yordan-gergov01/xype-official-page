import NeuralCanvas from '@/components/NeuralCanvas';
import Button from '@/components/ui/Button';

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

        <div className="mt-12 flex justify-center">
          <Button variant="outline" onClick={onScrollToForm}>
            Изчисли колко губи бизнесът ти →
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

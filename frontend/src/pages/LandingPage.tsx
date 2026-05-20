import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import AboutAI from '@/features/about/AboutAI';
import AboutXYPE from '@/features/about/AboutXYPE';
import CalculatorSection from '@/features/calculator/CalculatorSection';
import HeroSection from '@/features/hero/HeroSection';

function LandingPage() {
  const scrollToForm = () => {
    document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-background text-foreground font-sans">
      <Navbar />
      <HeroSection onScrollToForm={scrollToForm} />
      <AboutAI />
      <AboutXYPE />
      <CalculatorSection />
      <Footer />
    </div>
  );
}

export default LandingPage;

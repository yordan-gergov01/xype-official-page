import Reveal from '@/components/Reveal';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import AboutAI from '@/features/about/AboutAI';
import AboutXYPE from '@/features/about/AboutXYPE';
import CalculatorSection from '@/features/calculator/CalculatorSection';
import ContactSection from '@/features/contact/ContactSection';
import HeroSection from '@/features/hero/HeroSection';
import ServicesSection from '@/features/services/ServicesSection';
import WorkSection from '@/features/work/WorkSection';

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
      <ServicesSection />
      <WorkSection />
      <Reveal>
        <CalculatorSection />
      </Reveal>
      <ContactSection />
      <Footer />
    </div>
  );
}

export default LandingPage;

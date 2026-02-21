import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import AboutAI from '@/features/about/AboutAI';
import AboutXYPE from '@/features/about/AboutXYPE';
import HeroSection from '@/features/hero/HeroSection';
import ResearchSection from '@/features/leads-form/ReasearchSection';
import ResearchForm from '@/features/leads-form/ResearchForm';

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
      <ResearchSection />
      <Footer />
    </div>
  );
}

export default LandingPage;

import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { IntelligenceSection } from '@/components/IntelligenceSection';
import { GlobalAnalysisSection } from '@/components/GlobalAnalysisSection';
import { NewsSection } from '@/components/NewsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <IntelligenceSection />
        <GlobalAnalysisSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

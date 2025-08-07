import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { IntelligenceSection } from '@/components/IntelligenceSection';
import { GlobalAnalysisSection } from '@/components/GlobalAnalysisSection';
import { Footer } from '@/components/Footer';
import NewsSection from '@/components/NewsSection';
import { useAppDispatch, useAppSelector } from '@/store';
import { useCallback, useEffect } from 'react';
import { getNews } from '@/slices/newsSlice';

const Index = () => {
  const { news, loading } = useAppSelector((state) => state.newsSlice)

  const dispatch = useAppDispatch();

  const getNewsFromFirebase = useCallback(async () => {
    await dispatch(getNews());
  }, [dispatch]);

  useEffect(() => {
    getNewsFromFirebase();
  }, [getNewsFromFirebase]);
  
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <IntelligenceSection />
        <GlobalAnalysisSection />
        <NewsSection news={news} loading={loading} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AIChatWidget from '@/components/AIChatWidget';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import ServicesGrid from '@/components/home/ServicesGrid';
import AboutSection from '@/components/home/AboutSection';
import CTASection from '@/components/home/CTASection';

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <AboutSection />
      <CTASection />
    </main>
    <Footer />
    <FloatingWhatsApp />
    <AIChatWidget />
  </div>
);

export default Index;

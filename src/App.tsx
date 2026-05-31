import { useMemo } from 'react';
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';
import AboutSection from './sections/AboutSection';
import BlogSection from './sections/BlogSection';
import ContactSection from './sections/ContactSection';
import HeroSection from './sections/HeroSection';
import ProcessSection from './sections/ProcessSection';
import ProjectsSection from './sections/ProjectsSection';
import ServicesSection from './sections/ServicesSection';
import Footer from './components/Footer';
import { personalInfo } from './data/site';

export default function App() {
  const whatsappHref = useMemo(() => {
    const message = encodeURIComponent(
      'Merhaba Fevzi, web sitesi hakkında bilgi almak istiyorum.',
    );

    return `https://wa.me/${personalInfo.whatsappNumber}?text=${message}`;
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 font-sans text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-120px] top-[260px] h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-[-180px] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <Header />
      <WhatsAppButton href={whatsappHref} />

      <HeroSection whatsappHref={whatsappHref} />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection whatsappHref={whatsappHref} />
      <Footer />
    </main>
  );
}
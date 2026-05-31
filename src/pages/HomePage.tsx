import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import BlogSection from '../sections/BlogSection';
import ContactSection from '../sections/ContactSection';
import ProcessSection from '../sections/ProcessSection';
import ProjectsSection from '../sections/ProjectsSection';
import ServicesSection from '../sections/ServicesSection';

type HomePageProps = {
  whatsappHref: string;
};

export default function HomePage({ whatsappHref }: HomePageProps) {
  return (
    <>
      <HeroSection whatsappHref={whatsappHref} />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection whatsappHref={whatsappHref} />
    </>
  );
}

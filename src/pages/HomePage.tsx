import HeroSection from '../sections/HeroSection';
import ProcessSection from '../sections/ProcessSection';

type HomePageProps = {
  whatsappHref: string;
};

export default function HomePage({ whatsappHref }: HomePageProps) {
  return (
    <>
      <HeroSection whatsappHref={whatsappHref} />
      <ProcessSection />
    </>
  );
}

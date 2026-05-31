import PageHero from '../components/PageHero';
import AboutSection from '../sections/AboutSection';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımda"
        title="Markaların dijital vitrini için temiz, hızlı ve güven veren arayüzler kuruyorum."
        description="Frontend geliştirmeyi sadece ekran tasarımı olarak değil; güven, hız, mesaj netliği ve iletişim aksiyonu üreten bir sistem olarak ele alıyorum."
      />
      <AboutSection />
    </>
  );
}

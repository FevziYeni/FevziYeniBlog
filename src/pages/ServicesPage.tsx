import PageHero from '../components/PageHero';
import PrimaryButton from '../components/PrimaryButton';
import ProcessSection from '../sections/ProcessSection';
import ServicesSection from '../sections/ServicesSection';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetler"
        title="Kurumsal web sitesi, marka vitrini ve React frontend geliştirme."
        description="İhtiyaca göre hızlı açılan, mobilde güçlü görünen ve müşteriyi iletişime taşıyan profesyonel web arayüzleri hazırlıyorum."
      >
        <PrimaryButton href="/iletisim">Teklif al</PrimaryButton>
      </PageHero>
      <ServicesSection />
      <ProcessSection />
    </>
  );
}

import PageHero from '../components/PageHero';
import ContactSection from '../sections/ContactSection';

type ContactPageProps = {
  whatsappHref: string;
};

export default function ContactPage({ whatsappHref }: ContactPageProps) {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Yeni web projen için kısa bir mesaj yeterli."
        description="Kurumsal site, portfolio, marka vitrini veya frontend geliştirme ihtiyacını birlikte netleştirebiliriz."
      />
      <ContactSection whatsappHref={whatsappHref} />
    </>
  );
}

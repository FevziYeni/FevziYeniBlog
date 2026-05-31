import PageHero from '../components/PageHero';
import PrimaryButton from '../components/PrimaryButton';

export default function NotFoundPage() {
  return (
    <PageHero
      eyebrow="404"
      title="Bu sayfa yayında görünmüyor."
      description="Aradığın bağlantı taşınmış olabilir. Ana sayfaya dönerek güncel sayfalara ulaşabilirsin."
    >
      <PrimaryButton href="/">Ana sayfaya dön</PrimaryButton>
    </PageHero>
  );
}

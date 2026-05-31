import PageHero from '../components/PageHero';
import BlogSection from '../sections/BlogSection';

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Frontend, web tasarım ve dijital marka üzerine notlar."
        description="Blog alanı; öğrendiklerimi, çalışma yaklaşımımı ve müşterilerin karar vermesine yardımcı olacak pratik fikirleri paylaşmak için ayrıldı."
      />
      <BlogSection />
    </>
  );
}

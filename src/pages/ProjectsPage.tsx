import PageHero from '../components/PageHero';
import ProjectsSection from '../sections/ProjectsSection';

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projeler"
        title="Canlıya alınmış işler ve gelişen frontend çalışmalarım."
        description="Kurumsal web siteleri, marka tanıtım sayfaları ve kişisel portfolio projelerini tek bir yerde topluyorum."
      />
      <ProjectsSection />
    </>
  );
}

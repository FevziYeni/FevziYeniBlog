import { BriefcaseBusiness, ExternalLink } from 'lucide-react';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data/site';

type ProjectsSectionProps = {
  isPage?: boolean;
};

export default function ProjectsSection({ isPage = false }: ProjectsSectionProps) {
  return (
    <section id="projeler" className={`relative z-10 pb-20 ${isPage ? 'pt-32 lg:pt-40' : 'pt-20'}`}>
      <Container>
        <div className="mb-12">
          <SectionHeader
            eyebrow="Projeler"
            title="Yayına alınmış ve geliştirilmiş web çalışmalarım."
            description="Her projede hızlı açılış, mobil uyum, temiz arayüz ve güven veren marka sunumu önceliklidir."
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} canlı sitesini aç`}
              className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]"
            >
              <div className="relative h-48 overflow-hidden p-5">
                <img
                  src={project.imageUrl ?? '/images/web-design-hero.webp'}
                  alt={`${project.title} proje sunum görseli`}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = '/images/web-design-hero.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 via-slate-950/50 to-slate-950" />
                <div className="relative flex items-start justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-white">
                    {project.status}
                  </span>
                  <ExternalLink className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <div className="relative mt-20 flex items-center gap-2 text-sm text-cyan-200">
                  <BriefcaseBusiness className="h-4 w-4" />
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.liveUrl ? (
                  <span
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-200 transition hover:text-white"
                  >
                    Canlı siteyi aç <ExternalLink className="h-4 w-4" />
                  </span>
                ) : null}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

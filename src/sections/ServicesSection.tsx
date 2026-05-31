import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import { services } from '../data/site';

type ServicesSectionProps = {
  isPage?: boolean;
};

export default function ServicesSection({ isPage = false }: ServicesSectionProps) {
  return (
    <section id="hizmetler" className={`relative z-10 pb-20 ${isPage ? 'pt-32 lg:pt-40' : 'pt-20'}`}>
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Hizmetler"
            title="Markanı internette daha profesyonel gösteren çözümler."
          />
          <a href="/iletisim" className="font-bold text-cyan-200 transition hover:text-white">
            Hizmet teklifi al →
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <motion.article
              key={service.title}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl transition hover:bg-white/[0.07]"
            >
              <div className="relative h-32 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={`${service.title} için web tasarım görseli`}
                  className="h-full w-full object-cover opacity-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/10 via-slate-950/45 to-slate-950" />
                <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-200 ring-1 ring-white/10 backdrop-blur">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{service.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

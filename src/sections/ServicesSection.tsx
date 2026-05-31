import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import { services } from '../data/site';

export default function ServicesSection() {
  return (
    <section id="hizmetler" className="relative z-10 py-20">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Hizmetler"
            title="Markanı internette daha profesyonel gösteren çözümler."
          />
          <a href="#iletisim" className="font-bold text-cyan-200 transition hover:text-white">
            Hizmet teklifi al →
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <motion.article
              key={service.title}
              whileHover={{ y: -8 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:bg-white/[0.07]"
            >
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-black">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

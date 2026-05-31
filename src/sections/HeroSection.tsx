import { motion } from 'framer-motion';
import { BadgeCheck, MessageCircle, Sparkles, Zap } from 'lucide-react';
import Container from '../components/Container';
import PrimaryButton from '../components/PrimaryButton';
import { featureCards, personalInfo, stats } from '../data/site';

type HeroSectionProps = {
  whatsappHref: string;
};

export default function HeroSection({ whatsappHref }: HeroSectionProps) {
  return (
    <section id="anasayfa" className="relative z-10 pb-20 pt-32 lg:pb-28 lg:pt-40">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
              <Sparkles className="h-4 w-4" />
              React • TypeScript • Tailwind ile modern web deneyimleri
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Markanı internette daha güçlü gösteren
              <span className="block bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
                frontend arayüzler geliştiriyorum.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Ben {personalInfo.name}. Freelance frontend developer olarak işletmeler,
              girişimler ve kişisel markalar için hızlı, modern, mobil uyumlu ve dönüşüm
              odaklı web siteleri hazırlıyorum.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton href="/projeler">Projeleri gör</PrimaryButton>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp'tan yaz
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
                >
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 to-violet-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[2rem] border border-white/10 bg-slate-950 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">
                    {personalInfo.brandName.toLowerCase().replace(' ', '')}.dev
                  </span>
                </div>

                <div className="grid gap-4">
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-300 to-violet-400 p-6 text-slate-950">
                    <img
                      src="/images/web-design-hero.webp"
                      alt="Modern web tasarım arayüzü ve responsive site mockup görseli"
                      className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-multiply"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/80 via-white/40 to-slate-950/10" />
                    <div className="relative">
                    <div className="mb-8 flex items-center justify-between">
                      <BadgeCheck className="h-7 w-7" />
                      <span className="rounded-full bg-slate-950/10 px-3 py-1 text-xs font-bold">
                        Premium UI
                      </span>
                    </div>
                    <h3 className="text-3xl font-black">Web siten ilk izlenimindir.</h3>
                    <p className="mt-3 text-sm font-medium text-slate-800">
                      Modern tasarım, hızlı açılış ve doğru mesaj ile ziyaretçiyi müşteriye çeviririz.
                    </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {featureCards.slice(0, 2).map((card) => (
                      <div key={card.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                        <div className="text-cyan-300">{card.icon}</div>
                        <p className="mt-4 text-sm font-bold">{card.title}</p>
                        <p className="mt-1 text-xs text-slate-400">{card.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-sm font-bold">Frontend Stack</p>
                      <Zap className="h-5 w-5 text-yellow-300" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'Tailwind', 'Vite', 'Next.js', 'API'].map((item) => (
                        <span key={item} className="rounded-full bg-white/10 px-3 py-2 text-xs text-slate-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

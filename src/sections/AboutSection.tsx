import { Star } from 'lucide-react';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';

const highlights = ['Temiz Kod', 'Responsive UI', 'Satış Odaklı Tasarım'];

type AboutSectionProps = {
  isPage?: boolean;
};

export default function AboutSection({ isPage = false }: AboutSectionProps) {
  return (
    <section id="hakkimda" className={`relative z-10 pb-20 ${isPage ? 'pt-32 lg:pt-40' : 'pt-20'}`}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Hakkımda"
            title="Kod yazarken sadece ekranı değil, kullanıcının karar anını tasarlarım."
          />

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 text-slate-300 backdrop-blur-xl lg:p-9">
            <div className="mb-7 overflow-hidden rounded-3xl border border-white/10">
              <img
                src="/images/web-design-hero.webp"
                alt="Profesyonel web sitesi tasarım çalışma alanı"
                className="h-56 w-full object-cover"
              />
            </div>
            <p className="text-lg leading-8">
              Frontend tarafında React, TypeScript ve Tailwind CSS ile modern arayüzler
              geliştiriyorum. Benim için iyi bir web sitesi; hızlı açılan, mobilde güçlü
              görünen, mesajı net veren ve kullanıcıyı doğru aksiyona yönlendiren bir sistemdir.
            </p>
            <p className="mt-5 text-lg leading-8">
              Freelance işlerimde sadece tasarım ve kod teslim etmiyorum. Markanın internette
              nasıl görüneceğini, ziyaretçiye nasıl güven vereceğini ve iletişim aksiyonunu
              nasıl artıracağını da birlikte düşünüyorum.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <Star className="mb-3 h-5 w-5 text-cyan-300" />
                  <p className="font-bold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

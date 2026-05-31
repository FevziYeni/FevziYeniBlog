import { CheckCircle2 } from 'lucide-react';
import Container from '../components/Container';
import PrimaryButton from '../components/PrimaryButton';
import SectionHeader from '../components/SectionHeader';
import { audienceCards, seoFaqs } from '../data/site';

export default function SearchIntentSection() {
  return (
    <section className="relative z-10 py-20">
      <Container>
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeader
            eyebrow="Web sitesi yaptırmak"
            title="İşletmeni internette daha güvenilir gösterecek net bir web sistemi."
          />
          <p className="max-w-2xl text-lg leading-8 text-slate-400">
            Hedefim sadece güzel görünen bir tasarım yapmak değil; web sitesi arayan
            müşterinin güven duyduğu, hizmetlerini hızlı anladığı ve sana kolayca
            ulaşabildiği bir yapı kurmak.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {audienceCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <CheckCircle2 className="h-7 w-7 text-cyan-300" />
              <h3 className="mt-5 text-xl font-black">{card.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{card.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl lg:grid-cols-[0.85fr_1.15fr] lg:p-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              Sık aranan konular
            </p>
            <h3 className="mt-4 text-3xl font-black tracking-tight">
              Web sitesi yaptırmadan önce netleşmesi gerekenler.
            </h3>
            <p className="mt-5 leading-8 text-slate-400">
              Bu yapı Google’a ne sunduğunu anlatırken ziyaretçiye de karar vermesi için
              kısa ve güvenilir cevaplar verir.
            </p>
            <div className="mt-7">
              <PrimaryButton href="/iletisim">Web sitesi teklifi al</PrimaryButton>
            </div>
          </div>

          <div className="grid gap-4">
            {seoFaqs.map((item) => (
              <article key={item.question} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h4 className="font-black text-white">{item.question}</h4>
                <p className="mt-3 leading-7 text-slate-400">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

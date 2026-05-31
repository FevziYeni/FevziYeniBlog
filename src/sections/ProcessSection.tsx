import Container from '../components/Container';
import { processSteps } from '../data/site';

export default function ProcessSection() {
  return (
    <section className="relative z-10 py-20">
      <Container>
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-7 backdrop-blur-xl lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-violet-300">
                Süreç
              </p>
              <h2 className="text-4xl font-black tracking-tight">Her proje net bir sistemle ilerler.</h2>
              <p className="mt-5 leading-8 text-slate-400">
                Tasarıma başlamadan önce hedefi netleştirir, sonra içerik, arayüz ve teknik yapıyı aynı çizgide kurarım.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {processSteps.map((item) => (
                <article key={item.step} className="rounded-3xl border border-white/10 bg-slate-950/40 p-6">
                  <p className="text-sm font-black text-cyan-300">{item.step}</p>
                  <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

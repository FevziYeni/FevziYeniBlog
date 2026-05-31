import { ArrowRight } from 'lucide-react';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import { blogPosts } from '../data/site';

export default function BlogSection() {
  return (
    <section id="blog" className="relative z-10 py-20">
      <Container>
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <SectionHeader eyebrow="Blog" title="Notlar, fikirler ve frontend yazıları." />
          <p className="max-w-2xl text-lg leading-8 text-slate-400">
            Blog bölümü kişisel markanı güçlendirir. Sadece “iş yapıyorum” demek yerine,
            bildiğini gösterir ve müşteriye güven verirsin.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full bg-cyan-300/10 px-3 py-2 text-xs font-bold text-cyan-200">
                  {post.category}
                </span>
                <span className="text-xs text-slate-500">{post.readTime}</span>
              </div>
              <h3 className="text-2xl font-black leading-tight">{post.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{post.description}</p>
              <button className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-200">
                Yakında oku <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { ArrowRight, Code2, Mail, MapPin, MessageCircle, Phone, Target } from 'lucide-react';
import type { FormEvent } from 'react';
import { useState } from 'react';
import Container from '../components/Container';
import { personalInfo } from '../data/site';

type ContactSectionProps = {
  whatsappHref: string;
};

export default function ContactSection({ whatsappHref }: ContactSectionProps) {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    projectType: '',
    message: '',
  });

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = encodeURIComponent(
      [
        'Merhaba Fevzi, yeni bir web projesi için bilgi almak istiyorum.',
        form.name ? `Adım: ${form.name}` : '',
        form.contact ? `İletişim: ${form.contact}` : '',
        form.projectType ? `Proje türü: ${form.projectType}` : '',
        form.message ? `Not: ${form.message}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
    );

    window.open(`https://wa.me/${personalInfo.whatsappNumber}?text=${message}`, '_blank', 'noreferrer');
  };

  return (
    <section id="iletisim" className="relative z-10 py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-300 to-violet-400 p-8 text-slate-950 lg:p-10">
            <div className="mb-8 overflow-hidden rounded-3xl border border-slate-950/10 shadow-2xl shadow-slate-950/20">
              <img
                src="/images/visuals/service-corporate.webp"
                alt="Web sitesi projesi için iletişim görseli"
                className="h-56 w-full object-cover"
              />
            </div>
            <Target className="h-10 w-10" />
            <h2 className="mt-8 text-4xl font-black tracking-tight sm:text-5xl">
              Birlikte güçlü bir web vitrini kuralım.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-800">
              Kurumsal site, landing page, portfolyo, işletme tanıtımı veya frontend geliştirme ihtiyacın varsa kısa bir mesaj yeterli.
            </p>

            <div className="mt-8 grid gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-slate-950 px-5 py-4 font-bold text-white transition hover:-translate-y-1"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp üzerinden iletişime geç
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 rounded-2xl bg-white/40 px-5 py-4 font-bold text-slate-950 transition hover:bg-white/60"
              >
                <Mail className="h-5 w-5" />
                {personalInfo.email}
              </a>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl lg:p-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              Hızlı Bilgi
            </p>
            <h3 className="text-3xl font-black">Proje için mesaj bırak</h3>

            <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none ring-cyan-300 transition placeholder:text-slate-500 focus:ring-2"
                  placeholder="Adınız"
                />
                <input
                  value={form.contact}
                  onChange={(event) => updateField('contact', event.target.value)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none ring-cyan-300 transition placeholder:text-slate-500 focus:ring-2"
                  placeholder="Telefon / E-posta"
                />
              </div>
              <input
                value={form.projectType}
                onChange={(event) => updateField('projectType', event.target.value)}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none ring-cyan-300 transition placeholder:text-slate-500 focus:ring-2"
                placeholder="Proje türü: Kurumsal site, portfolio, blog..."
              />
              <textarea
                value={form.message}
                onChange={(event) => updateField('message', event.target.value)}
                className="min-h-36 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none ring-cyan-300 transition placeholder:text-slate-500 focus:ring-2"
                placeholder="Kısaca neye ihtiyacınız var?"
              />
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-200">
                Mesajı gönder
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>

            <div className="mt-8 grid gap-3 text-sm text-slate-400 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> {personalInfo.phone}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {personalInfo.location}
              </div>
              <a href={personalInfo.github} className="flex items-center gap-2 transition hover:text-white">
                <Code2 className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

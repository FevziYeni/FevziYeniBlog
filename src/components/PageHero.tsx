import type { ReactNode } from 'react';
import Container from './Container';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative z-10 pb-10 pt-32 lg:pb-14 lg:pt-40">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
            {eyebrow}
          </p>
          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}

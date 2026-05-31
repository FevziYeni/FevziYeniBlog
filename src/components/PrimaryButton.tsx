import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type PrimaryButtonProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
};

export default function PrimaryButton({ href, children, external = false }: PrimaryButtonProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-4 font-bold text-slate-950 shadow-2xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-white"
    >
      {children}
      <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
    </a>
  );
}

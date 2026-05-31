import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems, personalInfo } from '../data/site';

type HeaderProps = {
  currentPath: string;
};

export default function Header({ currentPath }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (href: string) => href === currentPath;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="/" className="flex items-center" aria-label={`${personalInfo.brandName} anasayfa`}>
          <img
            src="/logo.png"
            alt={`${personalInfo.name} logo`}
            className="h-16 w-auto object-contain saturate-150 contrast-125 brightness-110 drop-shadow-[0_0_12px_rgba(59,130,246,0.20)]"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`text-sm font-medium transition hover:text-white ${
                isActive(item.href) ? 'text-cyan-200' : 'text-slate-300'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/iletisim"
            className="rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
          >
            Proje konuşalım
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="rounded-full border border-white/10 bg-white/5 p-3 text-white lg:hidden"
          aria-label="Menüyü aç"
          aria-expanded={menuOpen}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-[100] min-h-dvh overflow-y-auto bg-slate-950 p-5 text-white shadow-2xl lg:hidden">
          <div className="flex items-center justify-between">
            <a href="/" onClick={() => setMenuOpen(false)} className="flex items-center">
              <img
                src="/logo.png"
                alt={`${personalInfo.name} logo`}
                className="h-14 w-auto object-contain"
              />
            </a>

            <button
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-white/10 bg-white/5 p-3"
              aria-label="Menüyü kapat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-10 grid gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`rounded-2xl border px-5 py-4 text-lg font-semibold transition ${
                  isActive(item.href)
                    ? 'border-cyan-300/30 bg-cyan-300/10 text-cyan-100'
                    : 'border-white/10 bg-white/5 text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="/iletisim"
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex items-center justify-center rounded-2xl bg-white px-5 py-4 text-base font-bold text-slate-950"
          >
            Proje konuşalım
          </a>
        </div>
      ) : null}
    </header>
  );
}

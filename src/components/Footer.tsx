import { personalInfo } from '../data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-400 md:flex-row md:items-center">
        <p>
          © {year} {personalInfo.name}. Tüm hakları saklıdır.
        </p>
        <div className="flex gap-5">
          <a href="#anasayfa" className="transition hover:text-white">
            Yukarı çık
          </a>
          <a href="#projeler" className="transition hover:text-white">
            Projeler
          </a>
          <a href="#iletisim" className="transition hover:text-white">
            İletişim
          </a>
        </div>
      </div>
    </footer>
  );
}

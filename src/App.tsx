import type { MouseEvent } from 'react';
import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Seo from './components/Seo';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import { personalInfo, seoPages } from './data/site';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';

const normalizePath = (path: string) => {
  if (!path || path === '/') {
    return '/';
  }

  return path.endsWith('/') ? path.slice(0, -1) : path;
};

export default function App() {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname));

  const whatsappHref = useMemo(() => {
    const message = encodeURIComponent(
      'Merhaba Fevzi, web sitesi hakkında bilgi almak istiyorum.',
    );

    return `https://wa.me/${personalInfo.whatsappNumber}?text=${message}`;
  }, []);

  const routes = useMemo(
    () => ({
      '/': <HomePage whatsappHref={whatsappHref} />,
      '/hakkimda': <AboutPage />,
      '/hizmetler': <ServicesPage />,
      '/projeler': <ProjectsPage />,
      '/blog': <BlogPage />,
      '/iletisim': <ContactPage whatsappHref={whatsappHref} />,
    }),
    [whatsappHref],
  );

  const currentPage = routes[pathname as keyof typeof routes] ?? <NotFoundPage />;
  const currentMeta = seoPages[pathname] ?? {
    title: 'Sayfa Bulunamadı | Fevzi Yeni',
    description: 'Aradığınız sayfa bulunamadı. Fevzi Yeni ana sayfasından devam edebilirsiniz.',
    path: pathname,
  };

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname));
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigation = (event: MouseEvent<HTMLElement>) => {
    const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href]');

    if (!anchor || anchor.target || anchor.hasAttribute('download')) {
      return;
    }

    const nextUrl = new URL(anchor.href);

    if (nextUrl.origin !== window.location.origin || !anchor.getAttribute('href')?.startsWith('/')) {
      return;
    }

    event.preventDefault();

    const nextPath = normalizePath(nextUrl.pathname);

    if (nextPath !== pathname) {
      window.history.pushState({}, '', nextPath);
      setPathname(nextPath);
    }

    window.scrollTo(0, 0);
  };

  return (
    <main
      onClick={handleNavigation}
      className="min-h-screen overflow-hidden bg-slate-950 font-sans text-white"
    >
      <Seo meta={currentMeta} />
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-120px] top-[260px] h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-[-180px] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <Header currentPath={pathname} />
      <WhatsAppButton href={whatsappHref} />

      {currentPage}
      <Footer />
    </main>
  );
}

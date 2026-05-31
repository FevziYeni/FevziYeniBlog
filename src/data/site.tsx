import {
  Code2,
  Globe2,
  Layers3,
  LineChart,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import type { BlogPost, FaqItem, NavItem, ProcessStep, Project, SeoMeta, Service, Stat } from '../types/site';

export const personalInfo = {
  name: 'Fevzi Yeni',
  role: 'Freelance Frontend Developer',
  location: 'İstanbul, Türkiye',
  email: 'fevziyeniiii@gmail.com',
  phone: '0553 058 3061',
  github: 'https://github.com/FevziYeni',
  linkedin: 'https://linkedin.com/in/fevzi-yeni',
  whatsappNumber: '905530583061',
  brandName: 'Fevzi Studio',
  siteUrl: 'https://fevzi-yeni-blog.vercel.app',
};

export const navItems: NavItem[] = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Hakkımda', href: '/hakkimda' },
  { label: 'Hizmetler', href: '/hizmetler' },
  { label: 'Projeler', href: '/projeler' },
  { label: 'Blog', href: '/blog' },
  { label: 'İletişim', href: '/iletisim' },
];

const screenshotUrl = (url: string) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200`;

export const seoPages: Record<string, SeoMeta> = {
  '/': {
    title: 'Web Sitesi Yaptırmak İsteyenler İçin Freelance Web Tasarım | Fevzi Yeni',
    description:
      'Web sitesi yaptırmak isteyen işletmeler için modern, hızlı, mobil uyumlu ve SEO temelli kurumsal web sitesi tasarımı ve React frontend geliştirme hizmeti.',
    path: '/',
    keywords: [
      'web sitesi yaptırmak',
      'kurumsal web sitesi',
      'freelance web tasarım',
      'web sitesi tasarımı',
      'React web sitesi',
      'İstanbul web tasarım',
      'Fevzi Yeni',
    ],
  },
  '/hakkimda': {
    title: 'Hakkımda | Fevzi Yeni',
    description:
      'Fevzi Yeni’nin frontend geliştirme yaklaşımı, çalışma sistemi ve modern web sitesi üretim anlayışı.',
    path: '/hakkimda',
    keywords: ['Fevzi Yeni hakkında', 'freelance frontend developer', 'React TypeScript'],
  },
  '/hizmetler': {
    title: 'Web Sitesi Hizmetleri | Kurumsal Web Tasarım ve React Frontend',
    description:
      'İşletmeler için kurumsal web sitesi, çok sayfalı site yapısı, mobil uyumlu web tasarım, React frontend geliştirme ve SEO temel kurulumu.',
    path: '/hizmetler',
    keywords: [
      'web sitesi hizmetleri',
      'kurumsal web tasarım',
      'mobil uyumlu web sitesi',
      'React frontend geliştirme',
      'SEO uyumlu web sitesi',
    ],
  },
  '/projeler': {
    title: 'Projeler | Fevzi Yeni Portfolio',
    description:
      'Fevzi Yeni tarafından geliştirilen kurumsal web sitesi, kişisel marka ve frontend arayüz projeleri.',
    path: '/projeler',
    keywords: ['frontend projeleri', 'web tasarım portfolio', 'React portfolio'],
  },
  '/blog': {
    title: 'Blog | Frontend ve Web Tasarım Notları',
    description:
      'Frontend geliştirme, web tasarım, SEO, dönüşüm odaklı arayüz ve dijital marka üzerine kısa notlar.',
    path: '/blog',
    keywords: ['frontend blog', 'web tasarım blog', 'SEO notları'],
  },
  '/iletisim': {
    title: 'Web Sitesi Teklifi Al | Fevzi Yeni İletişim',
    description:
      'Web sitesi yaptırmak, kurumsal site yenilemek veya React frontend geliştirme hizmeti almak için Fevzi Yeni ile iletişime geçin.',
    path: '/iletisim',
    keywords: ['web sitesi teklifi', 'web tasarım teklifi', 'kurumsal site yaptırmak', 'Fevzi Yeni iletişim'],
  },
};

export const audienceCards = [
  {
    title: 'Web sitesi yaptırmak isteyen işletmeler',
    text: 'Hizmetlerini profesyonel göstermek, Google aramalarından daha güvenilir görünmek ve ziyaretçiyi hızlı iletişime taşımak isteyen markalar için uygundur.',
  },
  {
    title: 'Kurumsal site yenilemek isteyenler',
    text: 'Eski, yavaş veya mobilde zayıf kalan siteleri daha modern, hızlı ve net mesaj veren bir yapıya dönüştürürüm.',
  },
  {
    title: 'Kişisel marka ve portfolio sahipleri',
    text: 'Uzmanlığını, projelerini ve iletişim kanallarını sade ama güçlü bir dijital vitrinle sunmak isteyen kişiler için özel sayfa yapısı kurarım.',
  },
];

export const seoFaqs: FaqItem[] = [
  {
    question: 'Web sitesi yaptırmak isteyen biri nereden başlamalı?',
    answer:
      'Önce işletmenin hedefi, sunulan hizmetler, hedef müşteri profili ve iletişim aksiyonu netleşmelidir. Ardından sayfa yapısı, içerik akışı ve tasarım dili buna göre planlanır.',
  },
  {
    question: 'Kurumsal web sitesi kaç sayfadan oluşmalı?',
    answer:
      'Çoğu işletme için anasayfa, hakkımızda, hizmetler, projeler veya referanslar, blog ve iletişim sayfaları iyi bir başlangıçtır. Gerektiğinde hizmet detay sayfaları eklenebilir.',
  },
  {
    question: 'SEO uyumlu web sitesi için neler gerekir?',
    answer:
      'Hızlı açılan mobil uyumlu yapı, doğru başlık ve açıklamalar, temiz URL yapısı, sitemap, robots.txt, anlaşılır içerik ve kullanıcıyı doğru aksiyona yönlendiren sayfalar gerekir.',
  },
];

export const stats: Stat[] = [
  { value: 'React', label: 'Modern frontend altyapısı' },
  { value: 'TS', label: 'Tip güvenli geliştirme' },
  { value: 'SEO', label: 'Temel görünürlük kurgusu' },
  { value: 'UI', label: 'Premium arayüz tasarımı' },
];

export const services: Service[] = [
  {
    icon: <Globe2 className="h-6 w-6" />,
    title: 'Kurumsal Web Sitesi',
    description:
      'Markanı güvenilir gösteren, hızlı açılan, mobil uyumlu ve profesyonel web siteleri geliştiririm.',
    imageUrl: '/images/visuals/service-corporate.webp',
  },
  {
    icon: <Layers3 className="h-6 w-6" />,
    title: 'Çok Sayfalı Site Yapısı',
    description:
      'Anasayfa, hizmetler, projeler, blog ve iletişim gibi sayfaları net bir mimariyle ayırırım.',
    imageUrl: '/images/visuals/service-architecture.webp',
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'React Frontend Geliştirme',
    description:
      'React, TypeScript ve Tailwind CSS ile temiz kodlu, ölçeklenebilir ve bakımı kolay arayüzler kurarım.',
    imageUrl: '/images/visuals/service-frontend.webp',
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: 'Web Görünürlük Analizi',
    description:
      'Mevcut web siteni veya dijital görünümünü hız, mobil uyum, güven ve dönüşüm açısından incelerim.',
    imageUrl: '/images/visuals/service-seo.webp',
  },
];

export const projects: Project[] = [
  {
    title: 'Yeni Rm İnşaat',
    category: 'Kurumsal Web Sitesi',
    description:
      'İnşaat sektöründe faaliyet gösteren firma için modern, güven veren, mobil uyumlu ve profesyonel kurumsal web sitesi çalışması.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Responsive UI'],
    status: 'Canlıda',
    liveUrl: 'https://www.yenirminsaat.com',
    imageUrl: screenshotUrl('https://www.yenirminsaat.com'),
  },
  {
    title: 'Biz Aydın Grup',
    category: 'Kurumsal Web Sitesi',
    description:
      'Firma hizmetlerini dijital ortamda sade, anlaşılır ve profesyonel şekilde sunmak için hazırlanmış modern kurumsal tanıtım sitesi.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Web Tasarım'],
    status: 'Canlıda',
    liveUrl: 'https://xn--bizaydngrup-4zb.com/',
    imageUrl: screenshotUrl('https://xn--bizaydngrup-4zb.com/'),
  },
  {
    title: 'Fevzi Yeni Portfolio',
    category: 'Kişisel Marka / Portfolio',
    description:
      'Freelance frontend developer kimliğimi, hizmetlerimi, projelerimi ve iletişim kanallarımı profesyonel şekilde sunmak için hazırladığım kişisel marka sitesi.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Vercel'],
    status: 'Canlıda',
    liveUrl: 'https://fevzi-yeni-blog.vercel.app',
    imageUrl: screenshotUrl('https://fevzi-yeni-blog.vercel.app'),
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: 'İyi Bir Landing Page Neden Satış Ekibi Gibi Çalışır?',
    category: 'Web Tasarım',
    readTime: '5 dk',
    description:
      'Hero alanı, güven unsurları, sosyal kanıt ve doğru CTA yapısı müşteri kararını nasıl etkiler?',
    slug: 'landing-page-satis-etkisi',
    imageUrl: '/images/visuals/blog-landing.webp',
  },
  {
    title: 'React + TypeScript ile Temiz Component Mimarisi',
    category: 'Frontend',
    readTime: '8 dk',
    description:
      'Componentleri okunabilir, yeniden kullanılabilir ve büyütülebilir şekilde organize etme yaklaşımım.',
    slug: 'react-typescript-component-mimarisi',
    imageUrl: '/images/visuals/service-frontend.webp',
  },
  {
    title: 'Yerel İşletmeler İçin Web Sitesi Kontrol Listesi',
    category: 'Dijital Pazarlama',
    readTime: '6 dk',
    description:
      'WhatsApp butonu, harita, hizmet alanları, yorumlar ve hızlı iletişim bölümleri neden kritik?',
    slug: 'yerel-isletme-web-kontrol-listesi',
    imageUrl: '/images/visuals/blog-local-business.webp',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Keşif',
    description:
      'Markanı, hedef müşterini, sektörünü ve web sitesinden beklediğin sonucu netleştiririz.',
  },
  {
    step: '02',
    title: 'Strateji',
    description:
      'Sayfa akışını, içerik yapısını, CTA noktalarını ve görsel dili satış odaklı planlarım.',
  },
  {
    step: '03',
    title: 'Geliştirme',
    description:
      'React, TypeScript ve Tailwind ile hızlı, responsive ve temiz kodlu frontend geliştiririm.',
  },
  {
    step: '04',
    title: 'Yayın',
    description:
      'Son kontroller, performans, temel SEO ve yayına alma sürecini tamamlarım.',
  },
];

export const featureCards = [
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Hızlı yayına alma',
    text: 'Kurumsal sitelerde hızlı, kontrollü ve temiz teslim süreci.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Güven veren yapı',
    text: 'Net içerik, profesyonel tasarım ve güçlü iletişim akışı.',
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: 'Dönüşüm odaklı',
    text: 'Ziyaretçiyi arama, WhatsApp veya form aksiyonuna yönlendirir.',
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Premium görünüm',
    text: 'Modern, sade ve marka algısını yükselten arayüzler.',
  },
];

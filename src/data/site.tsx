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
import type { BlogPost, NavItem, ProcessStep, Project, SeoMeta, Service, Stat } from '../types/site';

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

export const seoPages: Record<string, SeoMeta> = {
  '/': {
    title: 'Fevzi Yeni | Freelance Frontend Developer',
    description:
      'React, TypeScript ve Tailwind CSS ile hızlı, modern, mobil uyumlu ve SEO temelli kurumsal web siteleri geliştiren freelance frontend developer.',
    path: '/',
    keywords: ['Fevzi Yeni', 'frontend developer', 'React developer', 'web tasarım', 'kurumsal web sitesi'],
  },
  '/hakkimda': {
    title: 'Hakkımda | Fevzi Yeni',
    description:
      'Fevzi Yeni’nin frontend geliştirme yaklaşımı, çalışma sistemi ve modern web sitesi üretim anlayışı.',
    path: '/hakkimda',
    keywords: ['Fevzi Yeni hakkında', 'freelance frontend developer', 'React TypeScript'],
  },
  '/hizmetler': {
    title: 'Hizmetler | Kurumsal Web Sitesi ve Frontend Geliştirme',
    description:
      'Kurumsal web sitesi, marka web sitesi, React frontend geliştirme ve web görünürlük analizi hizmetleri.',
    path: '/hizmetler',
    keywords: ['kurumsal web sitesi', 'React frontend geliştirme', 'web sitesi hizmetleri'],
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
    title: 'İletişim | Fevzi Yeni',
    description:
      'Kurumsal web sitesi, portfolio veya frontend geliştirme projeniz için Fevzi Yeni ile iletişime geçin.',
    path: '/iletisim',
    keywords: ['Fevzi Yeni iletişim', 'web sitesi teklifi', 'frontend developer iletişim'],
  },
};

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
  },
  {
    icon: <Layers3 className="h-6 w-6" />,
    title: 'Çok Sayfalı Site Yapısı',
    description:
      'Anasayfa, hizmetler, projeler, blog ve iletişim gibi sayfaları net bir mimariyle ayırırım.',
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'React Frontend Geliştirme',
    description:
      'React, TypeScript ve Tailwind CSS ile temiz kodlu, ölçeklenebilir ve bakımı kolay arayüzler kurarım.',
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: 'Web Görünürlük Analizi',
    description:
      'Mevcut web siteni veya dijital görünümünü hız, mobil uyum, güven ve dönüşüm açısından incelerim.',
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
  },
  {
    title: 'Biz Aydın Grup',
    category: 'Kurumsal Web Sitesi',
    description:
      'Firma hizmetlerini dijital ortamda sade, anlaşılır ve profesyonel şekilde sunmak için hazırlanmış modern kurumsal tanıtım sitesi.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Web Tasarım'],
    status: 'Canlıda',
    liveUrl: 'https://xn--bizaydngrup-4zb.com/',
  },
  {
    title: 'Fevzi Yeni Portfolio',
    category: 'Kişisel Marka / Portfolio',
    description:
      'Freelance frontend developer kimliğimi, hizmetlerimi, projelerimi ve iletişim kanallarımı profesyonel şekilde sunmak için hazırladığım kişisel marka sitesi.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Vercel'],
    status: 'Canlıda',
    liveUrl: 'https://fevzi-yeni-blog.vercel.app',
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
  },
  {
    title: 'React + TypeScript ile Temiz Component Mimarisi',
    category: 'Frontend',
    readTime: '8 dk',
    description:
      'Componentleri okunabilir, yeniden kullanılabilir ve büyütülebilir şekilde organize etme yaklaşımım.',
    slug: 'react-typescript-component-mimarisi',
  },
  {
    title: 'Yerel İşletmeler İçin Web Sitesi Kontrol Listesi',
    category: 'Dijital Pazarlama',
    readTime: '6 dk',
    description:
      'WhatsApp butonu, harita, hizmet alanları, yorumlar ve hızlı iletişim bölümleri neden kritik?',
    slug: 'yerel-isletme-web-kontrol-listesi',
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

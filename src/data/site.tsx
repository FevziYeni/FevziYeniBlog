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
import type { BlogPost, NavItem, ProcessStep, Project, Service, Stat } from '../types/site';

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
};

export const navItems: NavItem[] = [
  { label: 'Anasayfa', href: '#anasayfa' },
  { label: 'Hakkımda', href: '#hakkimda' },
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Projeler', href: '#projeler' },
  { label: 'Blog', href: '#blog' },
  { label: 'İletişim', href: '#iletisim' },
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
  },
  {
    icon: <Layers3 className="h-6 w-6" />,
    title: 'Landing Page',
    description:
      'Reklam, kampanya, randevu, ürün tanıtımı ve müşteri toplama odaklı tek sayfalık arayüzler hazırlarım.',
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
    title: 'Yerel İşletme Demo Site Sistemi',
    category: 'Lead Generation / SaaS',
    description:
      'Yerel işletmeler için sektör bazlı demo landing page oluşturan, lead skoru ve müşteri takip süreciyle çalışan freelance satış sistemi.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Places API', 'CRM'],
    status: 'Planlama',
  },
  {
    title: 'Freelance Marka Web Sitesi',
    category: 'Portfolio / Blog',
    description:
      'Kişisel markamı, hizmetlerimi, projelerimi ve frontend notlarımı profesyonel şekilde sunmak için hazırladığım modern web sitesi.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    status: 'Aktif',
  },
  {
    title: 'Modern İşletme Landing Page Şablonu',
    category: 'Template System',
    description:
      'Kuaför, klinik, restoran, spor salonu ve yerel işletmeler için hızlıca özelleştirilebilir dönüşüm odaklı landing page şablonu.',
    stack: ['React', 'Tailwind', 'Responsive UI', 'SEO'],
    status: 'Geliştiriliyor',
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
    text: 'Landing page ve kurumsal sitelerde hızlı teslim süreci.',
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

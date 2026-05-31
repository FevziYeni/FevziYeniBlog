import { useEffect } from 'react';
import { personalInfo, seoFaqs } from '../data/site';
import type { SeoMeta } from '../types/site';

type SeoProps = {
  meta: SeoMeta;
};

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let element = document.head.querySelector<HTMLScriptElement>(`script#${id}`);

  if (!element) {
    element = document.createElement('script');
    element.id = id;
    element.type = 'application/ld+json';
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

export default function Seo({ meta }: SeoProps) {
  useEffect(() => {
    const canonicalUrl = `${personalInfo.siteUrl}${meta.path === '/' ? '' : meta.path}`;
    const imageUrl = `${personalInfo.siteUrl}/logo.png`;
    const profileUrl = `${personalInfo.siteUrl}/hakkimda`;

    document.title = meta.title;
    upsertMeta('meta[name="description"]', { name: 'description', content: meta.description });
    upsertMeta('meta[name="keywords"]', {
      name: 'keywords',
      content: meta.keywords?.join(', ') ?? '',
    });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: meta.description,
    });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'tr_TR' });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl });
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: meta.description,
    });
    upsertCanonical(canonicalUrl);
    upsertJsonLd('person-schema', {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: personalInfo.name,
      jobTitle: personalInfo.role,
      url: personalInfo.siteUrl,
      image: imageUrl,
      email: personalInfo.email,
      telephone: personalInfo.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'İstanbul',
        addressCountry: 'TR',
      },
      sameAs: [personalInfo.github, personalInfo.linkedin],
    });
    upsertJsonLd('service-schema', {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: personalInfo.brandName,
      url: personalInfo.siteUrl,
      image: imageUrl,
      description:
        'Web sitesi yaptırmak isteyen işletmeler için kurumsal web tasarım, React frontend geliştirme ve SEO temel kurulumu.',
      founder: {
        '@type': 'Person',
        name: personalInfo.name,
        url: profileUrl,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Türkiye',
      },
      serviceType: [
        'Kurumsal web sitesi',
        'Freelance web tasarım',
        'React frontend geliştirme',
        'SEO uyumlu web sitesi',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: personalInfo.phone,
        contactType: 'sales',
        availableLanguage: ['tr'],
      },
    });
    upsertJsonLd('website-schema', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: personalInfo.brandName,
      url: personalInfo.siteUrl,
      inLanguage: 'tr-TR',
      publisher: {
        '@type': 'Person',
        name: personalInfo.name,
      },
    });
    upsertJsonLd('faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: seoFaqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
  }, [meta]);

  return null;
}

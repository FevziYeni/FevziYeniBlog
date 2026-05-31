# Fevzi Brand Site

React + TypeScript + Tailwind CSS ile hazırlanmış kişisel marka / freelance frontend developer sitesi.

## Kurulum

```bash
yarn install
yarn dev
```

veya

```bash
npm install
npm run dev
```

## Kişisel bilgileri düzenleme

Ana bilgiler `src/data/site.tsx` içinde:

- `personalInfo.phone`
- `personalInfo.email`
- `personalInfo.whatsappNumber`
- `personalInfo.github`
- `personalInfo.linkedin`
- `projects`
- `blogPosts`

## Dosya yapısı

```txt
src/
  components/     Ortak componentler
  data/           Site içerikleri
  sections/       Sayfa bölümleri
  types/          TypeScript tipleri
  utils/          Yardımcı fonksiyonlar
```

## Not

İletişim formu şu anda görsel olarak hazırdır. Gerçek mail gönderimi için Formspree, Resend, EmailJS veya backend API bağlanabilir.

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/30 transition hover:-translate-y-1 hover:bg-emerald-400"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

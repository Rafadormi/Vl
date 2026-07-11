import { MessageCircle } from 'lucide-react';
import { waLink, DEFAULT_WA_MSG } from '@/lib/contact';

const FloatingWhatsApp = () => {
  return (
    <a
      href={waLink(DEFAULT_WA_MSG)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-5 py-4 text-whatsapp-foreground shadow-elegant animate-wa-pulse transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/40"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline font-semibold">WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsApp;

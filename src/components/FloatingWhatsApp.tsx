import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { waLink, DEFAULT_WA_MSG } from '@/lib/contact';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      href={waLink(DEFAULT_WA_MSG)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-5 py-4 text-whatsapp-foreground shadow-elegant animate-wa-pulse transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/40"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline font-semibold">WhatsApp</span>
    </motion.a>
  );
};

export default FloatingWhatsApp;

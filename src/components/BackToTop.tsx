import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-5 z-40 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-[#DC002D] text-white shadow-xl hover:bg-[#b00024] focus:outline-none focus:ring-4 focus:ring-[#DC002D]/40 transition-colors group"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="h-5 w-5 -mb-1 transition-transform group-hover:-translate-y-0.5" strokeWidth={3} />
          <span className="font-serif text-[12px] font-extrabold leading-none tracking-tighter" style={{ fontFamily: 'Georgia, serif' }}>VL</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

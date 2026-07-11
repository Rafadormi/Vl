import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { waLink, DEFAULT_WA_MSG } from '@/lib/contact';

const images = [
  "/images/home/hero/hero-1.jpg",
  "/images/home/hero/hero-2.jpg",
  "/images/home/hero/hero-3.jpg",
  "/images/home/hero/hero-4.jpg"
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#111111] text-white">
      {/* Dark background with subtle red glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-[20%] -top-[20%] h-[60%] w-[60%] rounded-full bg-[#E60012] opacity-[0.07] blur-[120px]"></div>
        <div className="absolute -right-[10%] bottom-[0%] h-[40%] w-[40%] rounded-full bg-[#E60012] opacity-[0.05] blur-[100px]"></div>
      </div>

      <div className="container relative z-10 grid gap-12 pt-32 pb-20 md:pt-40 md:pb-28 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <motion.img 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            src="/images/logos/logo-branca.png" 
            alt="Vidraçaria Liderança" 
            className="h-16 mb-8 object-contain" 
          />
          <h1 className="text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl tracking-tight text-white">
            Vidraçaria Liderança em <span className="text-[#E60012]">Umuarama</span>: soluções em vidro, espelhos, box, esquadrias e manutenção.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/80 font-medium">
            Atendemos projetos residenciais e comerciais com serviços sob medida, acabamento profissional e soluções em vidro para valorizar seu ambiente.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={waLink(DEFAULT_WA_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E60012] px-7 py-4 text-base font-bold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-[#c4000f] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#E60012]/40"
            >
              Pedir orçamento no WhatsApp
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-7 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              Ver serviços <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-12 flex flex-wrap gap-4 sm:gap-6 w-full"
          >
            {[
              { k: '15+', v: 'anos de casa' },
              { k: '1.000+', v: 'projetos entregues' },
              { k: '100%', v: 'sob medida' },
            ].map((s) => (
              <div key={s.v} className="flex-1 min-w-[120px] rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <dt className="text-3xl font-extrabold text-[#E60012]">{s.k}</dt>
                <dd className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/50">{s.v}</dd>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <a 
            href={waLink(DEFAULT_WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mx-auto flex aspect-[4/3] w-full max-w-[600px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-[#E60012]/50 hover:shadow-[#E60012]/30"
          >
            {images.map((img, idx) => (
              <img 
                key={img}
                src={img} 
                alt={`Projeto Vidraçaria Liderança ${idx + 1}`} 
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 group-hover:scale-105 ${idx === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0 scale-100'}`} 
              />
            ))}
            
            {/* Minimal overlay to make it feel clickable/card-like */}
            <div className="absolute inset-0 z-20 bg-black/10 group-hover:bg-black/0 transition-colors pointer-events-none" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

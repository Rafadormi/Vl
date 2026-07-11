import { MessageCircle, ArrowRight } from 'lucide-react';
import { waLink, DEFAULT_WA_MSG } from '@/lib/contact';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#111111] text-white">
      {/* Dark background with subtle red glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-[20%] -top-[20%] h-[60%] w-[60%] rounded-full bg-[#E60012] opacity-[0.07] blur-[120px]"></div>
        <div className="absolute -right-[10%] bottom-[0%] h-[40%] w-[40%] rounded-full bg-[#E60012] opacity-[0.05] blur-[100px]"></div>
      </div>

      <div className="container relative z-10 grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        {/* Left Content */}
        <div className="animate-fade-up">
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

          <div className="mt-12 flex flex-wrap gap-4 sm:gap-6">
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
          </div>
        </div>

        {/* Right Image */}
        <div className="relative hidden lg:block">
          <a 
            href={waLink(DEFAULT_WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mx-auto flex aspect-[4/3] w-full max-w-[600px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-[#E60012]/50 hover:shadow-[#E60012]/20"
          >
            <img 
              src="https://i.postimg.cc/QCmG0PNV/vidracaria-lideranca-logo-horizontal-colorida.png" 
              alt="Vidraçaria Liderança Logo" 
              className="w-3/4 object-contain transition-transform duration-500 group-hover:scale-105" 
            />
            {/* Dark bottom gradient to make the badge pop */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
            
            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-end pointer-events-none transition-transform duration-300 group-hover:-translate-y-1">
              <div className="rounded-xl border border-white/10 bg-[#1a1c23]/95 p-6 backdrop-blur-md shadow-2xl transition-colors duration-300 group-hover:border-[#E60012]/40">
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">Atendimento</div>
                <div className="mt-1 text-xl font-bold text-white">Resposta rápida pelo WhatsApp</div>
                <div className="mt-2 text-sm font-medium text-white/70">
                  Envie as medidas e fotos — retornamos com orçamento no mesmo dia.
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

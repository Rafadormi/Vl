import { MessageCircle } from 'lucide-react';
import { CONTACTS, waLink, DEFAULT_WA_MSG } from '@/lib/contact';

const CTASection = () => (
  <section id="contato" className="relative overflow-hidden bg-[#111111] text-white">
    {/* Dark background with subtle red glow */}
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute left-[50%] -top-[100%] h-[300%] w-[100%] -translate-x-1/2 rounded-full bg-[#E60012] opacity-[0.05] blur-[100px]"></div>
    </div>
    
    <div className="container relative z-10 py-24 text-center">
      <h2 className="mx-auto max-w-3xl text-3xl font-extrabold sm:text-4xl text-white">
        Peça seu orçamento com a Vidraçaria Liderança
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-white/80 font-medium">
        E transforme seu projeto com mais segurança, beleza e acabamento profissional.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href={waLink(DEFAULT_WA_MSG, 'diego')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E60012] px-8 py-4 text-base font-bold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-[#c4000f]"
        >
          <MessageCircle className="h-5 w-5" />
          Chamar Diego · {CONTACTS.diego.phone}
        </a>
        <a
          href={waLink(DEFAULT_WA_MSG, 'jonathan')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
        >
          <MessageCircle className="h-5 w-5" />
          Chamar Jonathan · {CONTACTS.jonathan.phone}
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;

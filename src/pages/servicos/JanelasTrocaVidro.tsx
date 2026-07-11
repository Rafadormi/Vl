import { Link } from 'react-router-dom';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { waLink } from '../../lib/contact';
import { ArrowLeft, ArrowRight, Check, Calendar, MessageCircle, Wrench, ShieldAlert, Home } from 'lucide-react';

const JanelasTrocaVidro = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#1a1c1c] font-['Open_Sans']">
      <Header />
      
      <main className="flex-grow pt-[80px]">
        <div className="max-w-[1280px] mx-auto px-6 pt-10">
          <Link to="/#servicos" className="inline-flex items-center gap-2 text-[#E60012] font-semibold hover:underline">
            <ArrowLeft className="h-4 w-4" /> Voltar para Serviços
          </Link>
        </div>
        {/* Hero Section */}
        <section className="relative w-full bg-[#111111]">
          <div className="max-w-[1280px] mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex flex-col items-start z-10">
              <span className="font-['Inter'] text-[12px] font-bold text-[#E60012] tracking-[0.1em] uppercase mb-3">Serviços Especializados</span>
              <h1 className="font-['Inter'] text-[32px] md:text-[64px] font-extrabold leading-[1.1] tracking-tight text-white mb-6">
                Janelas e Troca de Vidro
              </h1>
              <p className="text-[18px] leading-[28px] text-white/80 mb-12 max-w-[500px]">
                Realizamos troca de vidros quebrados, trincados ou sem vedação em janelas, portas, vitrines e outras estruturas. Reposição e renovação de peças sob medida.
              </p>
              <div className="flex gap-6">
                <a 
                  href={waLink('Olá! Gostaria de solicitar um orçamento para troca de vidro.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E60012] text-white font-['Inter'] font-semibold text-[16px] leading-[24px] px-8 py-4 rounded hover:bg-[#c4000f] transition-colors flex items-center gap-2 shadow-lg hover:-translate-y-0.5"
                >
                  Solicitar Orçamento <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px]">
              <div className="absolute inset-0 bg-[#e8e8e8] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  alt="Janelas e Troca de Vidro" 
                  className="w-full h-full object-cover object-center" 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[#f4f3f3] py-20 border-y border-[#e2e2e2]">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="mb-12 max-w-[700px]">
              <h2 className="font-['Inter'] text-[32px] md:text-[40px] font-bold text-[#1a1c1c] mb-3">Manutenção Rápida e Segura</h2>
              <p className="text-[16px] leading-[24px] text-[#5f3f3b]">
                Conheça os principais benefícios ao escolher a Vidraçaria Liderança para o seu projeto de janelas e troca de vidro.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="bg-white p-8 rounded border border-[#e2e2e2] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Wrench className="text-[#E60012] h-8 w-8 mb-4" />
                <h3 className="font-['Inter'] text-[24px] font-semibold text-[#1a1c1c] mb-2">Reposição Correta</h3>
                <p className="text-[16px] leading-[24px] text-[#5f3f3b]">
                  Instalação precisa de vidros sob medida.
                </p>
              </div>
              <div className="bg-white p-8 rounded border border-[#e2e2e2] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <ShieldAlert className="text-[#E60012] h-8 w-8 mb-4" />
                <h3 className="font-['Inter'] text-[24px] font-semibold text-[#1a1c1c] mb-2">Segurança</h3>
                <p className="text-[16px] leading-[24px] text-[#5f3f3b]">
                  Troca rápida de vidros danificados.
                </p>
              </div>
              <div className="bg-white p-8 rounded border border-[#e2e2e2] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Home className="text-[#E60012] h-8 w-8 mb-4" />
                <h3 className="font-['Inter'] text-[24px] font-semibold text-[#1a1c1c] mb-2">Atendimento Completo</h3>
                <p className="text-[16px] leading-[24px] text-[#5f3f3b]">
                  Para casas, apartamentos e comércios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#f9f9f9]">
          <div className="max-w-[1280px] mx-auto px-6 text-center">
            <div className="bg-[#e8e8e8] border border-[#e2e2e2] rounded-lg p-12 md:p-16 shadow-inner">
              <h2 className="font-['Inter'] text-[32px] md:text-[40px] font-bold text-[#1a1c1c] mb-4">Como solicitar um orçamento?</h2>
              <p className="text-[18px] leading-[28px] text-[#5f3f3b] max-w-[700px] mx-auto mb-10">
                Envie-nos as medidas aproximadas ou fotos do local através do WhatsApp. Assim, podemos retornar com uma estimativa de forma mais rápida. Se preferir, agendamos uma visita técnica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={waLink('Olá! Gostaria de solicitar um orçamento para troca de vidro.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white font-['Inter'] font-semibold text-[18px] px-8 py-4 rounded hover:bg-[#20bd5a] transition-colors inline-flex justify-center items-center gap-3 shadow-lg hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-6 w-6" />
                  Orçar pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JanelasTrocaVidro;

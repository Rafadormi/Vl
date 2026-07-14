import { Link } from 'react-router-dom';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { waLink } from '../../lib/contact';
import { ArrowLeft, ArrowRight, Check, ShieldCheck, PenTool, Wrench, Calendar, BookOpen, Clock, Droplets } from 'lucide-react';

const BoxParaBanheiro = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#1a1c1c] font-['Open_Sans']">
      <Header />
      
      <main className="flex-grow pt-[80px]">
        <div className="max-w-[1280px] mx-auto px-6 pt-10">
          <Link to="/#servicos" className="inline-flex items-center gap-2 text-[#E60012] font-semibold hover:underline">
            <ArrowLeft className="h-4 w-4" /> Voltar para Serviços
          </Link>
        </div>
        {/* Hero Section: Architectural Split Layout */}
        <section className="relative w-full bg-[#111111]">
          <div className="max-w-[1280px] mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex flex-col items-start z-10">
              <span className="font-['Inter'] text-[12px] font-bold text-[#E60012] tracking-[0.1em] uppercase mb-3">Soluções Residenciais</span>
              <h1 className="font-['Inter'] text-[32px] md:text-[64px] font-extrabold leading-[1.1] tracking-tight text-white mb-6">
                Box para Banheiro em Umuarama: Segurança e Estilo
              </h1>
              <p className="text-[18px] leading-[28px] text-white/80 mb-12 max-w-[500px]">
                Projetos sob medida utilizando vidro temperado de alta resistência. Engenharia precisa para garantir vedação perfeita e durabilidade superior, com acabamentos em alumínio anodizado ou inox.
              </p>
              <div className="flex gap-6">
                <a 
                  href={waLink('Olá! Gostaria de solicitar um orçamento para box de banheiro.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E60012] text-white font-['Inter'] font-semibold text-[16px] leading-[24px] px-8 py-4 rounded hover:bg-[#c4000f] transition-colors flex items-center gap-2 shadow-lg hover:-translate-y-0.5"
                >
                  Solicitar Orçamento <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[500px] md:h-[700px]">
              <div className="absolute inset-0 bg-[#e8e8e8] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  alt="Modern minimalist bathroom shower" 
                  className="w-full h-full object-cover object-center" 
                  src="/images/servicos/box-banheiro.jpg" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs / Description */}
        <section className="bg-[#f4f3f3] py-20 border-y border-[#e2e2e2]">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="mb-12 max-w-[700px]">
              <h2 className="font-['Inter'] text-[40px] font-bold text-[#1a1c1c] mb-3">Especificações Técnicas</h2>
              <p className="text-[16px] leading-[24px] text-[#5f3f3b]">
                Nossos projetos de envidraçamento para banheiros obedecem a rigorosos padrões de segurança, priorizando materiais certificados e instalação técnica especializada.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Spec Card 1 */}
              <div className="bg-white p-8 rounded border border-[#e2e2e2] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <ShieldCheck className="text-[#E60012] h-8 w-8 mb-4" />
                <h3 className="font-['Inter'] text-[24px] font-semibold text-[#1a1c1c] mb-2">Vidro Temperado 8mm</h3>
                <p className="text-[16px] leading-[24px] text-[#5f3f3b] mb-6">
                  Utilizamos exclusivamente vidros temperados com certificação Blindex®. Cinco vezes mais resistentes que o vidro comum, fragmentando-se em pequenos pedaços sem pontas agudas em caso de quebra acidental.
                </p>
                <ul className="font-['Inter'] text-[14px] font-medium text-[#5f5e5e] space-y-2">
                  <li className="flex items-center gap-2"><Check className="text-[#E60012] h-4 w-4" /> Espessura Padrão: 8mm</li>
                  <li className="flex items-center gap-2"><Check className="text-[#E60012] h-4 w-4" /> Norma ABNT NBR 14698</li>
                </ul>
              </div>
              
              {/* Spec Card 2 */}
              <div className="bg-white p-8 rounded border border-[#e2e2e2] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <PenTool className="text-[#E60012] h-8 w-8 mb-4" />
                <h3 className="font-['Inter'] text-[24px] font-semibold text-[#1a1c1c] mb-2">Sistemas de Abertura</h3>
                <p className="text-[16px] leading-[24px] text-[#5f3f3b] mb-6">
                  Engenharia adaptável ao layout do seu ambiente. Oferecemos soluções estruturais para otimizar o espaço e garantir o fluxo adequado dentro da área de banho.
                </p>
                <ul className="font-['Inter'] text-[14px] font-medium text-[#5f5e5e] space-y-2">
                  <li className="flex items-center gap-2"><Check className="text-[#E60012] h-4 w-4" /> Correr (Frontal)</li>
                  <li className="flex items-center gap-2"><Check className="text-[#E60012] h-4 w-4" /> Canto (Em "L")</li>
                  <li className="flex items-center gap-2"><Check className="text-[#E60012] h-4 w-4" /> Abrir (Pivotante)</li>
                </ul>
              </div>
              
              {/* Spec Card 3 */}
              <div className="bg-white p-8 rounded border border-[#e2e2e2] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Wrench className="text-[#E60012] h-8 w-8 mb-4" />
                <h3 className="font-['Inter'] text-[24px] font-semibold text-[#1a1c1c] mb-2">Ferragens e Acabamento</h3>
                <p className="text-[16px] leading-[24px] text-[#5f3f3b] mb-6">
                  Perfis estruturais em alumínio extrudado ou aço inox, desenvolvidos para suportar umidade constante sem sofrer oxidação. Roldanas com rolamento blindado para deslizamento suave.
                </p>
                <ul className="font-['Inter'] text-[14px] font-medium text-[#5f5e5e] space-y-2">
                  <li className="flex items-center gap-2"><Check className="text-[#E60012] h-4 w-4" /> Alumínio Anodizado</li>
                  <li className="flex items-center gap-2"><Check className="text-[#E60012] h-4 w-4" /> Pintura Eletrostática</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section className="max-w-[1280px] mx-auto px-6 py-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-['Inter'] text-[40px] font-bold text-[#1a1c1c]">Portfólio de Instalações</h2>
              <p className="text-[16px] text-[#5f3f3b] mt-2">Documentação visual de projetos recentes.</p>
            </div>
            <a href="/portfolio" className="hidden md:flex font-['Inter'] text-[14px] font-medium text-[#E60012] items-center gap-2 hover:underline">
              Ver arquivo completo <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[250px]">
            {/* Large Image */}
            <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden border border-[#e2e2e2] rounded-sm">
              <img 
                alt="Box de banheiro frontal em vidro incolor" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src="/images/servicos/sacadas.jpg" 
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-white/90 backdrop-blur-sm border-t border-[#e2e2e2] transform translate-y-[20%] group-hover:translate-y-0 transition-transform">
                <p className="font-['Inter'] text-[14px] text-[#1a1c1c] font-bold">Box Frontal - Sistema de Correr</p>
                <p className="font-['Inter'] text-[12px] text-[#5f3f3b] mt-1">Vidro Incolor 8mm | Perfil Preto Fosco</p>
              </div>
            </div>
            
            {/* Small Image Top */}
            <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden border border-[#e2e2e2] rounded-sm">
              <img 
                alt="Box de canto em vidro fumê" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src="/images/servicos/box-banheiro.jpg" 
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-sm border-t border-[#e2e2e2] transform translate-y-[30%] group-hover:translate-y-0 transition-transform">
                <p className="font-['Inter'] text-[14px] text-[#1a1c1c] font-bold">Box de Canto (L)</p>
                <p className="font-['Inter'] text-[12px] text-[#5f3f3b] mt-1">Vidro Fumê 8mm | Ferragens Cromadas</p>
              </div>
            </div>
            
            {/* Small Image Bottom */}
            <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden border border-[#e2e2e2] rounded-sm">
              <img 
                alt="Detalhe de roldana aparente em box de banheiro" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src="/images/servicos/manutencao.jpg" 
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-sm border-t border-[#e2e2e2] transform translate-y-[30%] group-hover:translate-y-0 transition-transform">
                <p className="font-['Inter'] text-[14px] text-[#1a1c1c] font-bold">Sistema Elegance</p>
                <p className="font-['Inter'] text-[12px] text-[#5f3f3b] mt-1">Roldanas Aparentes | Aço Inox</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical FAQ */}
        <section className="bg-[#f4f3f3] py-20 border-t border-[#e2e2e2]">
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="font-['Inter'] text-[40px] font-bold text-[#1a1c1c] mb-3">FAQ Técnico</h2>
              <p className="text-[16px] leading-[24px] text-[#5f3f3b]">
                Diretrizes de segurança, manutenção e normas aplicáveis aos nossos sistemas de envidraçamento.
              </p>
            </div>
            <div className="md:col-span-8 flex flex-col gap-4">
              {/* FAQ Item 1 */}
              <div className="bg-white border border-[#e2e2e2] p-6 rounded shadow-sm">
                <h3 className="font-['Inter'] text-[24px] font-semibold text-[#1a1c1c] mb-3 flex items-center gap-3">
                  <BookOpen className="text-[#E60012] h-6 w-6" />
                  Norma ABNT aplicável a boxes de banheiro?
                </h3>
                <p className="text-[16px] leading-[24px] text-[#5f3f3b] pl-[36px]">
                  Nossas instalações seguem rigorosamente a NBR 14698 (Vidro Temperado) e a NBR 7199 (Projeto, execução e aplicações de vidros na construção civil). Isso garante que o vidro suporte variações térmicas e impactos previstos no uso cotidiano.
                </p>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="bg-white border border-[#e2e2e2] p-6 rounded shadow-sm">
                <h3 className="font-['Inter'] text-[24px] font-semibold text-[#1a1c1c] mb-3 flex items-center gap-3">
                  <Clock className="text-[#E60012] h-6 w-6" />
                  Qual a periodicidade da manutenção preventiva?
                </h3>
                <p className="text-[16px] leading-[24px] text-[#5f3f3b] pl-[36px]">
                  Recomendamos a manutenção preventiva a cada 12 meses. O serviço inclui regulagem de roldanas, verificação de vedação (silicone estrutural), aperto de componentes metálicos e inspeção da integridade das bordas do vidro.
                </p>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="bg-white border border-[#e2e2e2] p-6 rounded shadow-sm">
                <h3 className="font-['Inter'] text-[24px] font-semibold text-[#1a1c1c] mb-3 flex items-center gap-3">
                  <Droplets className="text-[#E60012] h-6 w-6" />
                  Como realizar a limpeza correta do vidro temperado?
                </h3>
                <p className="text-[16px] leading-[24px] text-[#5f3f3b] pl-[36px]">
                  Utilize apenas água, sabão neutro e esponja macia. É terminantemente proibido o uso de produtos abrasivos, palha de aço ou ácidos, pois estes causam microfissuras na superfície do vidro, comprometendo sua resistência estrutural ao longo do tempo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#f9f9f9]">
          <div className="max-w-[1280px] mx-auto px-6 text-center">
            <div className="bg-[#e8e8e8] border border-[#e2e2e2] rounded-lg p-16 shadow-inner">
              <h2 className="font-['Inter'] text-[40px] font-bold text-[#1a1c1c] mb-4">Projete com Precisão</h2>
              <p className="text-[18px] leading-[28px] text-[#5f3f3b] max-w-[600px] mx-auto mb-10">
                Agende uma visita técnica. Nossos especialistas realizarão a medição a laser no local para garantir a fabricação exata do seu projeto estrutural.
              </p>
              <a 
                href={waLink('Olá! Gostaria de agendar uma visita técnica para medição de box de banheiro.')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E60012] text-white font-['Inter'] font-semibold text-[18px] px-10 py-4 rounded hover:bg-[#c4000f] transition-colors inline-flex items-center gap-3 shadow-lg hover:-translate-y-0.5"
              >
                <Calendar className="h-6 w-6" />
                Agendar Visita Técnica
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BoxParaBanheiro;


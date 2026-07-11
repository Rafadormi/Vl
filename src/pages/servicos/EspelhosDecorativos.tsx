
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { waLink } from '../../lib/contact';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';

const EspelhosDecorativos = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#1a1c1c] font-['Open_Sans']">
      <Header />
      
      <main className="flex-grow pt-[80px]">
        {/* Hero Section */}
        <section className="relative h-[600px] w-full flex items-center bg-[#eeeeed] overflow-hidden">
          <img 
            alt="Espelhos Decorativos" 
            className="absolute inset-0 w-full h-full object-cover opacity-80" 
            src="https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=2000&auto=format&fit=crop" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f9f9f9] via-[#f9f9f9]/80 to-transparent"></div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full md:w-2/3">
            <h1 className="font-['Inter'] text-[40px] md:text-[64px] leading-[1.1] tracking-tight font-extrabold text-[#1a1c1c] mb-6">
              Espelhos Decorativos: Amplie, Ilumine e Sofistique seus Ambientes
            </h1>
            <p className="text-[18px] leading-[28px] text-[#5f3f3b] mb-12 max-w-2xl font-medium">
              Soluções sob medida em espelhos para projetos residenciais e corporativos exigentes. Precisão milimétrica e acabamento impecável.
            </p>
            <a 
              href={waLink('Olá! Gostaria de um orçamento para espelhos decorativos.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#E60012] text-white font-['Inter'] font-bold text-[18px] py-4 px-8 rounded hover:bg-[#c4000f] transition-colors shadow-lg hover:-translate-y-0.5"
            >
              Solicite um Orçamento Técnico
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>

        {/* Technical Specifications / Acabamentos */}
        <section className="py-20 max-w-[1280px] mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-['Inter'] text-[32px] md:text-[40px] font-bold text-[#1a1c1c] mb-3">Especificações e Acabamentos</h2>
            <div className="h-1 w-24 bg-[#E60012]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="rounded-lg overflow-hidden flex flex-col border border-[#e2e2e2] bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="h-48 bg-[#e8e8e8] relative">
                <img 
                  alt="Espelho Bisotê" 
                  className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" 
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-['Inter'] text-[24px] font-semibold text-[#1a1c1c] mb-3">Acabamento Bisotê</h3>
                <p className="text-[16px] leading-[24px] text-[#5f3f3b] mb-6 flex-grow">
                  Bordas chanfradas em ângulo, criando uma moldura delicada no próprio vidro. Ideal para composições clássicas e sofisticadas.
                </p>
                <ul className="font-['Inter'] text-[14px] font-medium text-[#5f5e5e] flex flex-col gap-2 mt-auto">
                  <li className="flex items-center gap-2">
                    <Check className="text-[#E60012] h-4 w-4" /> 
                    Espessuras: 4mm, 5mm, 6mm
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-[#E60012] h-4 w-4" /> 
                    Largura do Bisotê: 10mm a 35mm
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg overflow-hidden flex flex-col border border-[#e2e2e2] bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="h-48 bg-[#e8e8e8] relative">
                <img 
                  alt="Espelho com LED" 
                  className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop" 
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-['Inter'] text-[24px] font-semibold text-[#1a1c1c] mb-3">Integração LED</h3>
                <p className="text-[16px] leading-[24px] text-[#5f3f3b] mb-6 flex-grow">
                  Espelhos com iluminação embutida (backlight ou frontlight). Proporciona iluminação funcional e valoriza o design do ambiente.
                </p>
                <ul className="font-['Inter'] text-[14px] font-medium text-[#5f5e5e] flex flex-col gap-2 mt-auto">
                  <li className="flex items-center gap-2">
                    <Check className="text-[#E60012] h-4 w-4" /> 
                    Temperatura de Cor: Quente ou Fria
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-[#E60012] h-4 w-4" /> 
                    Estrutura: Alumínio oculto
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg overflow-hidden flex flex-col border border-[#e2e2e2] bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="h-48 bg-[#e8e8e8] relative">
                <img 
                  alt="Parede de Espelho" 
                  className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop" 
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-['Inter'] text-[24px] font-semibold text-[#1a1c1c] mb-3">Paredes de Espelho</h3>
                <p className="text-[16px] leading-[24px] text-[#5f3f3b] mb-6 flex-grow">
                  Revestimento completo de superfícies. Ampliação visual extrema com alinhamento rigoroso entre as peças.
                </p>
                <ul className="font-['Inter'] text-[14px] font-medium text-[#5f5e5e] flex flex-col gap-2 mt-auto">
                  <li className="flex items-center gap-2">
                    <Check className="text-[#E60012] h-4 w-4" /> 
                    Fixação: Estrutural de alta resistência
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-[#E60012] h-4 w-4" /> 
                    Acabamento: Lapidação Reta Máquina
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery / Portfólio Bento Grid */}
        <section className="py-20 bg-[#f4f3f3] border-y border-[#e2e2e2]">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="mb-12 flex justify-between items-end">
              <div>
                <h2 className="font-['Inter'] text-[32px] md:text-[40px] font-bold text-[#1a1c1c] mb-3">Aplicações Residenciais</h2>
                <div className="h-1 w-24 bg-[#E60012]"></div>
              </div>
              <a href="/portfolio" className="hidden md:flex font-['Inter'] text-[14px] font-medium text-[#E60012] items-center gap-1 hover:text-[#c4000f] transition-colors">
                Ver portfólio completo
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
              {/* Item 1 (Large) */}
              <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-[#e8e8e8] rounded-sm">
                <img 
                  alt="Sala de Estar com Espelho" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop" 
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="font-['Inter'] text-[12px] font-bold tracking-[0.1em] text-white uppercase mb-1 opacity-80">Projeto Residencial</p>
                  <p className="font-['Inter'] text-[14px] font-medium text-white">Painel Bisotê - Espessura 5mm</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden bg-[#e8e8e8] rounded-sm">
                <img 
                  alt="Banheiro com Espelho Lapidado" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop" 
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="font-['Inter'] text-[12px] font-bold tracking-[0.1em] text-white uppercase mb-1 opacity-80">Banheiro Suíte Master</p>
                  <p className="font-['Inter'] text-[14px] font-medium text-white">Lapidação Reta Máquina</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-[#e8e8e8] rounded-sm">
                <img 
                  alt="Hall de Entrada" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" 
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="font-['Inter'] text-[12px] font-bold tracking-[0.1em] text-white uppercase mb-1 opacity-80">Hall de Entrada</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-[#e8e8e8] rounded-sm">
                <img 
                  alt="Espelho Bronze" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop" 
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="font-['Inter'] text-[12px] font-bold tracking-[0.1em] text-white uppercase mb-1 opacity-80">Espelho Bronze</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="font-['Inter'] text-[32px] md:text-[40px] font-bold text-[#1a1c1c] mb-3">Dúvidas Técnicas</h2>
              <div className="h-1 w-24 bg-[#E60012] mb-6"></div>
              <p className="text-[16px] leading-[24px] text-[#5f3f3b]">
                Informações essenciais sobre instalação, manutenção e especificações dos nossos espelhos.
              </p>
            </div>
            
            <div className="md:col-span-2 flex flex-col gap-4">
              {/* FAQ Item 1 */}
              <details className="group bg-[#f9f9f9] border border-[#e2e2e2] rounded-sm overflow-hidden shadow-sm">
                <summary className="font-['Inter'] text-[18px] font-semibold text-[#1a1c1c] cursor-pointer p-6 flex justify-between items-center list-none bg-white hover:bg-[#f4f3f3] transition-colors">
                  Qual a espessura ideal para grandes painéis?
                  <ChevronDown className="h-5 w-5 text-[#585a5a] group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-[16px] leading-[24px] text-[#5f3f3b] border-t border-[#e2e2e2] bg-[#f9f9f9] mt-4">
                  Para painéis de grandes dimensões e paredes inteiras, recomendamos espelhos com 5mm ou 6mm de espessura. Esta espessura garante maior rigidez estrutural, evitando distorções ópticas comuns em vidros mais finos quando aplicados em grandes áreas.
                </div>
              </details>

              {/* FAQ Item 2 */}
              <details className="group bg-[#f9f9f9] border border-[#e2e2e2] rounded-sm overflow-hidden shadow-sm">
                <summary className="font-['Inter'] text-[18px] font-semibold text-[#1a1c1c] cursor-pointer p-6 flex justify-between items-center list-none bg-white hover:bg-[#f4f3f3] transition-colors">
                  Como é feita a fixação dos espelhos?
                  <ChevronDown className="h-5 w-5 text-[#585a5a] group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-[16px] leading-[24px] text-[#5f3f3b] border-t border-[#e2e2e2] bg-[#f9f9f9] mt-4">
                  Utilizamos adesivos estruturais neutros específicos para espelhos (silicone neutro ou fixa-espelho aprovado), que não agridem a camada de prata. Para peças maiores, combinamos a fixação química com perfis de alumínio (chapas) inferiores para garantir segurança total.
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group bg-[#f9f9f9] border border-[#e2e2e2] rounded-sm overflow-hidden shadow-sm">
                <summary className="font-['Inter'] text-[18px] font-semibold text-[#1a1c1c] cursor-pointer p-6 flex justify-between items-center list-none bg-white hover:bg-[#f4f3f3] transition-colors">
                  O espelho pode manchar com o tempo (oxidação)?
                  <ChevronDown className="h-5 w-5 text-[#585a5a] group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-6 pt-0 text-[16px] leading-[24px] text-[#5f3f3b] border-t border-[#e2e2e2] bg-[#f9f9f9] mt-4">
                  Trabalhamos apenas com espelhos de primeira linha (copper-free e lead-free), que possuem alta resistência à oxidação. A instalação técnica correta, com distanciamento adequado da parede para ventilação e o uso de selantes apropriados nas bordas, previne o aparecimento de manchas.
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EspelhosDecorativos;

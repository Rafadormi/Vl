import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Bath, Sparkles, BoxSelect, Ruler, DoorOpen, Wrench, Building2, SunDim, Frame, Presentation, Grid, WrenchIcon } from 'lucide-react';
import { waLink } from '@/lib/contact';

const services = [
  {
    icon: Bath,
    title: 'Box para banheiro',
    desc: 'Instalamos box de vidro para banheiros residenciais com acabamento sob medida, buscando praticidade, segurança e melhor aproveitamento do espaço.',
    features: ['Projeto sob medida', 'Visual moderno e fácil manutenção', 'Atendimento em Umuarama'],
    link: '/servicos/box-para-banheiro',
    image: '/images/servicos/box-banheiro.jpg'
  },
  {
    icon: Grid,
    title: 'Vidro temperado',
    desc: 'Trabalhamos com vidro temperado para aplicações residenciais e comerciais, indicado para portas, divisórias, vitrines e painéis.',
    features: ['Mais resistência', 'Acabamento elegante', 'Uso residencial e comercial'],
    link: '/servicos/vidro-temperado',
    image: '/images/servicos/vidro-temperado.jpg'
  },
  {
    icon: Sparkles,
    title: 'Espelhos sob medida',
    desc: 'Produzimos e instalamos espelhos sob medida para banheiros, quartos, closets, salas, academias, recepções e comércios.',
    features: ['Corte sob medida', 'Amplitude e iluminação', 'Residências e empresas'],
    link: '/servicos/espelhos-decorativos',
    image: '/images/servicos/espelhos.jpg'
  },
  {
    icon: BoxSelect,
    title: 'Fechamento de sacada',
    desc: 'Executamos fechamento de sacadas e varandas em vidro para oferecer mais proteção contra vento e chuva.',
    features: ['Mais conforto e proteção', 'Preserva a luminosidade', 'Valoriza o imóvel'],
    link: '/servicos/envidracamento-sacadas',
    image: '/images/servicos/box-banheiro.jpg'
  },
  {
    icon: Ruler,
    title: 'Guarda-corpo de vidro',
    desc: 'Instalamos guarda-corpo de vidro para escadas, sacadas, mezaninos e áreas elevadas, unindo segurança e visual moderno.',
    features: ['Segurança com sofisticação', 'Áreas internas e externas', 'Visual leve e atual'],
    link: '/servicos/guarda-corpo-corrimao',
    image: '/images/servicos/guarda-corpo.jpg'
  },
  {
    icon: DoorOpen,
    title: 'Portas de vidro',
    desc: 'Fornecemos portas de vidro para lojas, escritórios, áreas internas e ambientes residenciais, com foco em funcionalidade.',
    features: ['Uso comercial e residencial', 'Melhor aproveitamento de luz', 'Acabamento moderno'],
    link: '/servicos/portas-de-vidro',
    image: '/images/servicos/portas-vidro.jpg'
  },
  {
    icon: Wrench,
    title: 'Janelas e troca de vidro',
    desc: 'Realizamos troca de vidros quebrados, trincados ou sem vedação em janelas, portas, vitrines e outras estruturas.',
    features: ['Reposição e manutenção', 'Vidros danificados ou sob medida', 'Casas, apartamentos e comércio'],
    link: '/servicos/janelas-troca-vidro',
    image: '/images/servicos/divisorias.jpg'
  },
  {
    icon: Building2,
    title: 'Esquadrias de alumínio e vidro',
    desc: 'Oferecemos soluções em esquadrias para portas, janelas, fechamentos e divisórias, atendendo projetos residenciais, comerciais e reformas.',
    features: ['Estruturas sob medida', 'Durabilidade e acabamento', 'Portas, janelas e fachadas'],
    link: '/servicos/esquadrias-aluminio',
    image: '/images/servicos/janelas.jpg'
  },
  {
    icon: SunDim,
    title: 'Cobertura de vidro',
    desc: 'Instalamos coberturas de vidro para corredores, entradas, áreas gourmet e pergolados, proporcionando proteção sem bloquear a iluminação.',
    features: ['Proteção contra intempéries', 'Mantém claridade natural', 'Excelente visual para áreas externas'],
    link: '/servicos/cobertura-de-vidro',
    image: '/images/servicos/guarda-corpo.jpg'
  },
  {
    icon: Frame,
    title: 'Divisórias de vidro',
    desc: 'Desenvolvemos divisórias de vidro para escritórios, clínicas, salas comerciais e ambientes internos residenciais.',
    features: ['Separação elegante dos espaços', 'Mantém a amplitude', 'Ambientes corporativos e residenciais'],
    link: '/servicos/divisorias-de-vidro',
    image: '/images/servicos/divisorias.jpg'
  },
  {
    icon: Building2,
    title: 'Fachadas de vidro',
    desc: 'Produzimos fachadas de vidro para lojas, clínicas, escritórios e imóveis comerciais que buscam mais visibilidade, sofisticação e impacto visual.',
    features: ['Mais destaque para o ponto comercial', 'Visual profissional', 'Valorização da fachada'],
    link: '/servicos/fachadas-de-vidro',
    image: '/images/servicos/fachadas.jpg'
  },
  {
    icon: Presentation,
    title: 'Vitrines comerciais',
    desc: 'Instalamos vitrines de vidro para lojas e espaços comerciais, ajudando a expor produtos com mais segurança e apelo visual.',
    features: ['Melhor exposição de produtos', 'Instalação e reposição', 'Comércio em geral'],
    link: '/servicos/vitrines-comerciais',
    image: '/images/servicos/vitrines.jpg'
  },
  {
    icon: WrenchIcon,
    title: 'Manutenção de vidros e ferragens',
    desc: 'Executamos manutenção em sistemas de vidro, ferragens, roldanas, puxadores, vedações e demais componentes.',
    features: ['Prevenção e correção', 'Ajustes em peças e acessórios', 'Mais durabilidade para a instalação'],
    link: '/servicos/manutencao-reparos',
    image: '/images/servicos/manutencao.jpg'
  }
];

const Servicos = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#1a1c1c] font-['Open_Sans']">
      <Header />
      
      <main className="flex-grow pt-[80px]">
        {/* Header Section */}
        <section className="bg-[#111111] py-20 text-white">
          <div className="max-w-[1280px] mx-auto px-6 text-center">
            <h1 className="font-['Inter'] text-[40px] md:text-[56px] font-extrabold leading-[1.1] tracking-tight mb-6">
              Nossos Serviços
            </h1>
            <p className="text-[18px] leading-[28px] text-white/80 max-w-2xl mx-auto">
              Projetos sob medida em vidros e esquadrias de alumínio. Atendimento especializado em Umuarama/PR, com garantia de qualidade e pontualidade.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden border border-[#e2e2e2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1">
                <div className="h-48 relative overflow-hidden bg-[#e8e8e8]">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                    <div className="bg-white p-2 rounded-full shadow-md">
                      <service.icon className="h-5 w-5 text-[#E60012]" />
                    </div>
                    <h3 className="font-['Inter'] text-[20px] font-bold text-white shadow-sm leading-tight">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-[14px] leading-[22px] text-[#5f3f3b] mb-4 flex-grow">
                    {service.desc}
                  </p>
                  
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2 text-[13px] text-[#585a5a] font-medium">
                        <div className="mt-1 min-w-[4px] h-[4px] rounded-full bg-[#E60012]" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to={service.link}
                    className="inline-flex justify-center items-center gap-2 w-full bg-[#f4f3f3] hover:bg-[#e8e8e8] text-[#1a1c1c] font-['Inter'] font-semibold text-[14px] py-3 rounded transition-colors mt-auto border border-[#e2e2e2]"
                  >
                    Ver detalhes do serviço <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#f4f3f3] py-20 border-t border-[#e2e2e2]">
          <div className="max-w-[1280px] mx-auto px-6 text-center">
            <h2 className="font-['Inter'] text-[32px] md:text-[40px] font-bold text-[#1a1c1c] mb-4">
              Não encontrou o que procurava?
            </h2>
            <p className="text-[18px] leading-[28px] text-[#5f3f3b] max-w-2xl mx-auto mb-8">
              Trabalhamos com projetos personalizados. Entre em contato e vamos conversar sobre a sua necessidade.
            </p>
            <a 
              href={waLink('Olá! Gostaria de falar sobre um projeto personalizado em vidro/esquadria.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#E60012] text-white font-['Inter'] font-bold text-[16px] py-4 px-8 rounded hover:bg-[#c4000f] transition-colors shadow-lg hover:-translate-y-0.5"
            >
              Falar com um Especialista
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Servicos;

const fs = require('fs');
const path = require('path');

const services = [
  {
    file: "VidroTemperado.tsx",
    title: "Vidro Temperado",
    tagline: "Resistência e Acabamento",
    description: "Trabalhamos com vidro temperado para aplicações residenciais e comerciais, indicado para portas, divisórias, vitrines, painéis e outras estruturas que exigem mais resistência e acabamento profissional.",
    features: [
      {
        icon: "ShieldCheck",
        title: "Alta Resistência",
        desc: "Cinco vezes mais resistente que o vidro comum."
      },
      {
        icon: "CheckCircle",
        title: "Acabamento Elegante",
        desc: "Ideal para ambientes modernos e sofisticados."
      },
      {
        icon: "Building2",
        title: "Versatilidade",
        desc: "Excelente para uso residencial e comercial."
      }
    ],
    image: "https://images.unsplash.com/photo-1574360699264-5a3d758c5a2c?q=80&w=1200&auto=format&fit=crop",
    waMsg: "Olá! Gostaria de um orçamento para vidro temperado."
  },
  {
    file: "EnvidracamentoSacadas.tsx",
    title: "Fechamento de Sacada",
    tagline: "Conforto e Proteção",
    description: "Executamos fechamento de sacadas e varandas em vidro para oferecer mais proteção contra vento e chuva, mantendo a entrada de luz natural e valorizando o imóvel.",
    features: [
      {
        icon: "Wind",
        title: "Proteção",
        desc: "Evita entrada de vento, poeira e chuva."
      },
      {
        icon: "Sun",
        title: "Luminosidade",
        desc: "Preserva a entrada de luz natural no ambiente."
      },
      {
        icon: "TrendingUp",
        title: "Valorização",
        desc: "Melhora a estética e o valor do seu imóvel."
      }
    ],
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    waMsg: "Olá! Gostaria de um orçamento para fechamento de sacada."
  },
  {
    file: "GuardaCorpoCorrimao.tsx",
    title: "Guarda-Corpo de Vidro",
    tagline: "Segurança com Leveza Visual",
    description: "Instalamos guarda-corpo de vidro para escadas, sacadas, mezaninos e áreas elevadas, unindo segurança e visual moderno. Proteção sem comprometer a arquitetura.",
    features: [
      {
        icon: "Shield",
        title: "Segurança Máxima",
        desc: "Uso de vidros adequados para prevenir quedas."
      },
      {
        icon: "Eye",
        title: "Visual Limpo",
        desc: "Integração perfeita com diversos estilos arquitetônicos."
      },
      {
        icon: "Home",
        title: "Aplicações Diversas",
        desc: "Ideal para escadas, mezaninos e áreas com desnível."
      }
    ],
    image: "https://images.unsplash.com/photo-1502672260266-1c1c6741d40b?q=80&w=1200&auto=format&fit=crop",
    waMsg: "Olá! Gostaria de um orçamento para guarda-corpo de vidro."
  },
  {
    file: "PortasDeVidro.tsx",
    title: "Portas de Vidro",
    tagline: "Elegância e Funcionalidade",
    description: "Fornecemos portas de vidro para lojas, escritórios, áreas internas e ambientes residenciais, com foco em funcionalidade, transparência e valorização do espaço.",
    features: [
      {
        icon: "DoorOpen",
        title: "Design Moderno",
        desc: "Acabamento profissional para todos os ambientes."
      },
      {
        icon: "SunDim",
        title: "Luz Natural",
        desc: "Melhor aproveitamento da iluminação do dia."
      },
      {
        icon: "Briefcase",
        title: "Residencial e Comercial",
        desc: "Soluções versáteis para qualquer necessidade."
      }
    ],
    image: "https://images.unsplash.com/photo-1534063806742-5e359049dd82?q=80&w=1200&auto=format&fit=crop",
    waMsg: "Olá! Gostaria de um orçamento para portas de vidro."
  },
  {
    file: "JanelasTrocaVidro.tsx",
    title: "Janelas e Troca de Vidro",
    tagline: "Manutenção Rápida e Segura",
    description: "Realizamos troca de vidros quebrados, trincados ou sem vedação em janelas, portas, vitrines e outras estruturas. Reposição e renovação de peças sob medida.",
    features: [
      {
        icon: "Wrench",
        title: "Reposição Correta",
        desc: "Instalação precisa de vidros sob medida."
      },
      {
        icon: "ShieldAlert",
        title: "Segurança",
        desc: "Troca rápida de vidros danificados."
      },
      {
        icon: "Home",
        title: "Atendimento Completo",
        desc: "Para casas, apartamentos e comércios."
      }
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    waMsg: "Olá! Gostaria de solicitar um orçamento para troca de vidro."
  },
  {
    file: "EsquadriaAluminio.tsx",
    title: "Esquadrias de Alumínio e Vidro",
    tagline: "Durabilidade e Beleza",
    description: "Oferecemos soluções em esquadrias de alumínio e vidro para portas, janelas, fechamentos e divisórias, atendendo projetos residenciais, comerciais e reformas.",
    features: [
      {
        icon: "Ruler",
        title: "Projetos Sob Medida",
        desc: "Adequação perfeita ao seu ambiente."
      },
      {
        icon: "Award",
        title: "Excelente Acabamento",
        desc: "Materiais de primeira linha para maior vida útil."
      },
      {
        icon: "Layers",
        title: "Versatilidade",
        desc: "Inúmeras opções de linhas e cores."
      }
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    waMsg: "Olá! Gostaria de um orçamento para esquadrias de alumínio."
  },
  {
    file: "CoberturaDeVidro.tsx",
    title: "Cobertura de Vidro",
    tagline: "Proteção com Luminosidade",
    description: "Instalamos coberturas de vidro para corredores, entradas, áreas gourmet e pergolados, proporcionando proteção sem bloquear a iluminação natural.",
    features: [
      {
        icon: "CloudRain",
        title: "Proteção Contra Intempéries",
        desc: "Abrigo seguro contra chuva."
      },
      {
        icon: "Sun",
        title: "Claridade Natural",
        desc: "Luz solar aproveitada ao máximo."
      },
      {
        icon: "Star",
        title: "Estética Premium",
        desc: "Valoriza áreas externas e de lazer."
      }
    ],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    waMsg: "Olá! Gostaria de um orçamento para cobertura de vidro."
  },
  {
    file: "DivisoriasDeVidro.tsx",
    title: "Divisórias de Vidro",
    tagline: "Organização com Amplitude",
    description: "Desenvolvemos divisórias de vidro para escritórios, clínicas, salas comerciais e ambientes internos residenciais, separando espaços sem perder a luminosidade.",
    features: [
      {
        icon: "Box", // using Box as alternative if SplitSquareHorizontal missing
        title: "Separação Inteligente",
        desc: "Divide o ambiente de forma elegante."
      },
      {
        icon: "Maximize",
        title: "Sensação de Amplitude",
        desc: "Não bloqueia a visão, fazendo o local parecer maior."
      },
      {
        icon: "Building",
        title: "Corporativo e Residencial",
        desc: "Aplicações práticas para diversas necessidades."
      }
    ],
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
    waMsg: "Olá! Gostaria de um orçamento para divisória de vidro."
  },
  {
    file: "FachadasDeVidro.tsx",
    title: "Fachadas de Vidro",
    tagline: "Presença e Sofisticação",
    description: "Produzimos fachadas de vidro para lojas, clínicas, escritórios e imóveis comerciais que buscam mais visibilidade, sofisticação e impacto visual.",
    features: [
      {
        icon: "Eye",
        title: "Mais Visibilidade",
        desc: "Destaque total para o seu negócio."
      },
      {
        icon: "Briefcase",
        title: "Visual Profissional",
        desc: "Transmite modernidade e confiança."
      },
      {
        icon: "TrendingUp",
        title: "Valorização do Imóvel",
        desc: "Aumenta o atrativo comercial do local."
      }
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    waMsg: "Olá! Gostaria de um orçamento para fachada de vidro."
  },
  {
    file: "VitrinesComerciais.tsx",
    title: "Vitrines Comerciais",
    tagline: "Destaque para seus Produtos",
    description: "Instalamos vitrines de vidro para lojas e espaços comerciais, ajudando a expor produtos com mais segurança, organização e forte apelo visual.",
    features: [
      {
        icon: "ShoppingBag",
        title: "Melhor Exposição",
        desc: "Valoriza as mercadorias aos olhos do cliente."
      },
      {
        icon: "Shield",
        title: "Mais Segurança",
        desc: "Vidros adequados para vitrines comerciais."
      },
      {
        icon: "Wrench",
        title: "Instalação e Reposição",
        desc: "Atendimento completo para lojas."
      }
    ],
    image: "https://images.unsplash.com/photo-1555529733-0e67056058e1?q=80&w=1200&auto=format&fit=crop",
    waMsg: "Olá! Gostaria de um orçamento para vitrine comercial."
  },
  {
    file: "ManutencaoReparos.tsx",
    title: "Manutenção de Vidros e Ferragens",
    tagline: "Prevenção e Durabilidade",
    description: "Executamos manutenção preventiva e corretiva em sistemas de vidro, ferragens, roldanas, puxadores, vedações e demais componentes, prolongando a vida útil.",
    features: [
      {
        icon: "Settings",
        title: "Ajustes Precisos",
        desc: "Regulagem de roldanas e dobradiças."
      },
      {
        icon: "ShieldAlert",
        title: "Troca de Componentes",
        desc: "Substituição de peças desgastadas."
      },
      {
        icon: "Clock",
        title: "Mais Vida Útil",
        desc: "Garante o funcionamento correto por mais tempo."
      }
    ],
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1200&auto=format&fit=crop",
    waMsg: "Olá! Preciso de manutenção em vidros/ferragens."
  }
];

const template = (service) => {
  const iconList = ['ArrowRight', 'Check', 'Calendar', 'MessageCircle', ...new Set(service.features.map(f => f.icon))].join(', ');
  
  let featuresHtml = service.features.map(feat => {
    return `
              <div className="bg-white p-8 rounded border border-[#e2e2e2] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <${feat.icon} className="text-[#E60012] h-8 w-8 mb-4" />
                <h3 className="font-['Inter'] text-[24px] font-semibold text-[#1a1c1c] mb-2">${feat.title}</h3>
                <p className="text-[16px] leading-[24px] text-[#5f3f3b]">
                  ${feat.desc}
                </p>
              </div>`;
  }).join('');

  return `import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { waLink } from '../../lib/contact';
import { ${iconList} } from 'lucide-react';

const ${service.file.replace('.tsx', '')} = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#1a1c1c] font-['Open_Sans']">
      <Header />
      
      <main className="flex-grow pt-[80px]">
        {/* Hero Section */}
        <section className="relative w-full bg-[#111111]">
          <div className="max-w-[1280px] mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex flex-col items-start z-10">
              <span className="font-['Inter'] text-[12px] font-bold text-[#E60012] tracking-[0.1em] uppercase mb-3">Serviços Especializados</span>
              <h1 className="font-['Inter'] text-[32px] md:text-[64px] font-extrabold leading-[1.1] tracking-tight text-white mb-6">
                ${service.title}
              </h1>
              <p className="text-[18px] leading-[28px] text-white/80 mb-12 max-w-[500px]">
                ${service.description}
              </p>
              <div className="flex gap-6">
                <a 
                  href={waLink('${service.waMsg}')}
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
                  alt="${service.title}" 
                  className="w-full h-full object-cover object-center" 
                  src="${service.image}" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[#f4f3f3] py-20 border-y border-[#e2e2e2]">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="mb-12 max-w-[700px]">
              <h2 className="font-['Inter'] text-[32px] md:text-[40px] font-bold text-[#1a1c1c] mb-3">${service.tagline}</h2>
              <p className="text-[16px] leading-[24px] text-[#5f3f3b]">
                Conheça os principais benefícios ao escolher a Vidraçaria Liderança para o seu projeto de ${service.title.toLowerCase()}.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
${featuresHtml}
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
                  href={waLink('${service.waMsg}')}
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

export default ${service.file.replace('.tsx', '')};
`;
};

services.forEach(service => {
  const filePath = path.join(__dirname, 'src', 'pages', 'servicos', service.file);
  fs.writeFileSync(filePath, template(service));
  console.log(`Generated ${service.file}`);
});

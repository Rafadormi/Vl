import { ArrowRight, DoorOpen, Bath, Sparkles, Building2, Wrench, Ruler, MessageCircle } from 'lucide-react';
import { waLink } from '@/lib/contact';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Bath,
    title: 'Box para banheiro',
    desc: 'Instalamos box de vidro para banheiros residenciais com acabamento sob medida, buscando praticidade, segurança e melhor aproveitamento do espaço.',
    link: '/servicos/box-para-banheiro',
  },
  {
    icon: DoorOpen,
    title: 'Vidro temperado',
    desc: 'Trabalhamos com vidro temperado para aplicações residenciais e comerciais, indicado para portas, divisórias, vitrines e painéis.',
    link: waLink('Olá! Gostaria de um orçamento para vidro temperado.'),
  },
  {
    icon: Sparkles,
    title: 'Espelhos',
    desc: 'Produzimos e instalamos espelhos sob medida para banheiros, quartos, closets, salas, academias, recepções e comércios.',
    link: '/servicos/espelhos-decorativos',
  },
  {
    icon: Building2,
    title: 'Sacadas',
    desc: 'Executamos fechamento de sacadas e varandas em vidro para oferecer mais proteção contra vento e chuva, mantendo a entrada de luz natural.',
    link: '/servicos/envidracamento-sacadas',
  },
  {
    icon: Ruler,
    title: 'Guarda-corpo',
    desc: 'Instalamos guarda-corpo de vidro para escadas, sacadas, mezaninos e áreas elevadas, unindo segurança e visual moderno.',
    link: '/servicos/guarda-corpo-corrimao',
  },
  {
    icon: DoorOpen,
    title: 'Portas de vidro',
    desc: 'Fornecemos portas de vidro para lojas, escritórios, áreas internas e ambientes residenciais, com foco em funcionalidade e transparência.',
    link: '/servicos/portas-de-vidro',
  },
  {
    icon: Wrench,
    title: 'Janelas e troca de vidro',
    desc: 'Realizamos troca de vidros quebrados, trincados ou sem vedação em janelas, portas, vitrines e outras estruturas.',
    link: waLink('Olá! Gostaria de um orçamento para janelas ou troca de vidro.'),
  },
  {
    icon: Building2,
    title: 'Esquadrias',
    desc: 'Oferecemos soluções em esquadrias de alumínio e vidro para portas, janelas, fechamentos e divisórias, atendendo projetos diversos.',
    link: '/servicos/esquadrias-aluminio',
  },
  {
    icon: Sparkles,
    title: 'Coberturas',
    desc: 'Instalamos coberturas de vidro para corredores, entradas, áreas gourmet e pergolados, proporcionando proteção sem bloquear a luz.',
    link: waLink('Olá! Gostaria de um orçamento para cobertura de vidro.'),
  },
  {
    icon: Ruler,
    title: 'Divisórias',
    desc: 'Desenvolvemos divisórias de vidro para escritórios, clínicas, salas comerciais e ambientes internos residenciais.',
    link: '/servicos/divisorias-de-vidro',
  },
  {
    icon: Building2,
    title: 'Fachadas',
    desc: 'Produzimos fachadas de vidro para lojas, clínicas, escritórios e imóveis comerciais que buscam mais visibilidade e sofisticação.',
    link: '/servicos/fachadas-de-vidro',
  },
  {
    icon: DoorOpen,
    title: 'Vitrines',
    desc: 'Instalamos vitrines de vidro para lojas e espaços comerciais, ajudando a expor produtos com mais segurança, organização e apelo visual.',
    link: waLink('Olá! Gostaria de um orçamento para vitrine comercial.'),
  },
  {
    icon: Wrench,
    title: 'Manutenção',
    desc: 'Executamos manutenção em sistemas de vidro, ferragens, roldanas, puxadores e vedações, ajudando a prolongar a vida útil das instalações.',
    link: '/servicos/manutencao-reparos',
  },
];

const ServicesGrid = () => (
  <section id="servicos" className="bg-white py-20 lg:py-28">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-[#E60012]">
          Nossos serviços
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
          Soluções completas em vidro e alumínio
        </h2>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, desc, link }) => (
          <div
            key={title}
            className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[#E60012]/30 hover:shadow-lg"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#E60012]/5 text-[#E60012] transition-colors group-hover:bg-[#E60012] group-hover:text-white">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
            <p className="mb-8 flex-1 text-sm font-medium text-gray-600">{desc}</p>
            {link.startsWith('http') ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#E60012] transition-transform hover:gap-3"
              >
                Pedir orçamento <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <Link
                to={link}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#E60012] transition-transform hover:gap-3"
              >
                Ver Detalhes <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <a
          href={waLink('Olá! Vi os serviços no site e quero conversar com um especialista.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#E60012] px-8 py-4 text-base font-bold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-[#c4000f]"
        >
          <MessageCircle className="h-5 w-5" />
          Falar com especialista
        </a>
      </div>
    </div>
  </section>
);

export default ServicesGrid;

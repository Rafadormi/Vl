import { ArrowRight, MessageCircle } from 'lucide-react';
import { waLink } from '@/lib/contact';
import { Link } from 'react-router-dom';

const services = [
  {
    image: '/images/servicos/box-banheiro.jpg',
    title: 'Box para banheiro',
    desc: 'Instalamos box de vidro para banheiros residenciais com acabamento sob medida.',
    link: '/servicos/box-para-banheiro',
  },
  {
    image: '/images/servicos/vidro-temperado.jpg',
    title: 'Vidro temperado',
    desc: 'Trabalhamos com vidro temperado para portas, divisórias, vitrines e painéis.',
    link: '/servicos/vidro-temperado',
  },
  {
    image: '/images/servicos/espelhos.jpg',
    title: 'Espelhos',
    desc: 'Produzimos e instalamos espelhos sob medida para banheiros, quartos, salas e comércios.',
    link: '/servicos/espelhos-decorativos',
  },
  {
    image: '/images/servicos/sacadas.jpg',
    title: 'Sacadas',
    desc: 'Fechamento de sacadas em vidro para mais proteção contra vento e chuva.',
    link: '/servicos/envidracamento-sacadas',
  },
  {
    image: '/images/servicos/guarda-corpo.jpg',
    title: 'Guarda-corpo',
    desc: 'Guarda-corpo de vidro para escadas e sacadas, unindo segurança e visual moderno.',
    link: '/servicos/guarda-corpo-corrimao',
  },
  {
    image: '/images/servicos/portas-vidro.jpg',
    title: 'Portas de vidro',
    desc: 'Portas de vidro para lojas e ambientes residenciais, com foco em funcionalidade.',
    link: '/servicos/portas-de-vidro',
  },
  {
    image: '/images/servicos/janelas.jpg',
    title: 'Janelas e troca de vidro',
    desc: 'Troca de vidros quebrados ou sem vedação em janelas, portas e estruturas.',
    link: '/servicos/janelas-troca-vidro',
  },
  {
    image: '/images/servicos/esquadrias.jpg',
    title: 'Esquadrias',
    desc: 'Soluções em esquadrias de alumínio para portas, janelas e fechamentos.',
    link: '/servicos/esquadrias-aluminio',
  },
  {
    image: '/images/servicos/coberturas.jpg',
    title: 'Coberturas',
    desc: 'Coberturas de vidro para corredores, proporcionando proteção sem bloquear a luz.',
    link: '/servicos/cobertura-de-vidro',
  },
  {
    image: '/images/servicos/divisorias.jpg',
    title: 'Divisórias',
    desc: 'Divisórias de vidro para escritórios, clínicas e ambientes residenciais.',
    link: '/servicos/divisorias-de-vidro',
  },
  {
    image: '/images/servicos/fachadas.jpg',
    title: 'Fachadas',
    desc: 'Fachadas de vidro para imóveis comerciais que buscam sofisticação.',
    link: '/servicos/fachadas-de-vidro',
  },
  {
    image: '/images/servicos/vitrines.jpg',
    title: 'Vitrines',
    desc: 'Vitrines de vidro para lojas, ajudando a expor produtos com segurança.',
    link: '/servicos/vitrines-comerciais',
  },
  {
    image: '/images/servicos/manutencao.jpg',
    title: 'Manutenção',
    desc: 'Manutenção em sistemas de vidro, ferragens e vedações, prolongando a vida útil.',
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

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ image, title, desc, link }) => {
          const content = (
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#E60012] hover:bg-[#E60012] hover:shadow-xl">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white">
                  {title}
                </h3>
              </div>
              <div className="flex flex-1 flex-col p-6 transition-colors duration-300">
                <p className="mb-6 flex-1 text-sm font-medium text-gray-600 transition-colors duration-300 group-hover:text-white/90">
                  {desc}
                </p>
                <div className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#E60012] transition-colors duration-300 group-hover:text-white">
                  Ver Detalhes <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          );

          return link.startsWith('http') ? (
            <a key={title} href={link} target="_blank" rel="noopener noreferrer" className="block h-full cursor-pointer">
              {content}
            </a>
          ) : (
            <Link key={title} to={link} className="block h-full cursor-pointer">
              {content}
            </Link>
          );
        })}
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

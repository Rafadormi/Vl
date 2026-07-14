
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, ImageIcon } from 'lucide-react';
import { waLink } from '@/lib/contact';

const categories = [
  'Todos',
  'Box e Espelhos',
  'Fachadas e Vitrines',
  'Guarda-corpos e Sacadas',
  'Esquadrias',
];

const projects = [
  {
    id: 1,
    title: 'Fachada Comercial',
    category: 'Fachadas e Vitrines',
    image: '/images/servicos/fachadas.jpg',
  },
  {
    id: 2,
    title: 'Guarda-corpo de Escada',
    category: 'Guarda-corpos e Sacadas',
    image: '/images/servicos/guarda-corpo.jpg',
  },
  {
    id: 3,
    title: 'Box Elegance',
    category: 'Box e Espelhos',
    image: '/images/servicos/box-banheiro.jpg',
  },
  {
    id: 4,
    title: 'Esquadrias Linha Gold',
    category: 'Esquadrias',
    image: '/images/servicos/esquadrias.jpg',
  },
  {
    id: 5,
    title: 'Parede de Espelho',
    category: 'Box e Espelhos',
    image: '/images/servicos/espelhos.jpg',
  },
  {
    id: 6,
    title: 'Vitrine de Loja',
    category: 'Fachadas e Vitrines',
    image: '/images/servicos/vitrines.jpg',
  },
  {
    id: 7,
    title: 'Envidraçamento de Sacada',
    category: 'Guarda-corpos e Sacadas',
    image: '/images/servicos/sacadas.jpg',
  },
  {
    id: 8,
    title: 'Esquadrias em Alumínio Preto',
    category: 'Esquadrias',
    image: '/images/servicos/portas-vidro.jpg',
  },
  {
    id: 9,
    title: 'Cobertura de Vidro',
    category: 'Esquadrias', // Or custom category
    image: '/images/servicos/coberturas.jpg',
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'Todos' || project.category === activeCategory
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#1a1c1c] font-['Open_Sans']">
      <Header />
      
      <main className="flex-grow pt-[80px]">
        {/* Header Section */}
        <section className="bg-[#111111] py-20 text-white text-center">
          <div className="max-w-[1280px] mx-auto px-6">
            <h1 className="font-['Inter'] text-[40px] md:text-[56px] font-extrabold leading-[1.1] tracking-tight mb-6">
              Nosso Portfólio
            </h1>
            <p className="text-[18px] leading-[28px] text-white/80 max-w-2xl mx-auto">
              Conheça exemplos de acabamento e qualidade dos serviços da Vidraçaria Liderança. Soluções que valorizam cada ambiente.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 max-w-[1280px] mx-auto px-6">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-['Inter'] text-[14px] font-semibold px-6 py-2.5 rounded-full transition-colors border ${
                  activeCategory === cat
                    ? 'bg-[#E60012] text-white border-[#E60012]'
                    : 'bg-white text-[#1a1c1c] border-[#e2e2e2] hover:bg-[#f4f3f3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg bg-[#e8e8e8] aspect-square shadow-sm">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="font-['Inter'] text-[12px] font-bold tracking-widest text-[#E60012] uppercase mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="font-['Inter'] text-[20px] font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#f4f3f3] py-20 border-t border-[#e2e2e2]">
          <div className="max-w-[1280px] mx-auto px-6 text-center">
            <h2 className="font-['Inter'] text-[32px] md:text-[40px] font-bold text-[#1a1c1c] mb-4">
              Gostou do que viu?
            </h2>
            <p className="text-[18px] leading-[28px] text-[#5f3f3b] max-w-2xl mx-auto mb-8">
              Transforme seu projeto com o mesmo padrão de qualidade. Peça seu orçamento pelo WhatsApp agora mesmo.
            </p>
            <a 
              href={waLink('Olá! Estava vendo o portfólio no site e gostaria de solicitar um orçamento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#E60012] text-white font-['Inter'] font-bold text-[16px] py-4 px-8 rounded hover:bg-[#c4000f] transition-colors shadow-lg hover:-translate-y-0.5"
            >
              Pedir Orçamento <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;

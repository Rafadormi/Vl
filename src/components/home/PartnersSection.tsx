
import React from 'react';
import { Award, CheckCircle, Star } from 'lucide-react';

const PartnersSection = () => {
  const partners = [
    {
      name: 'Blindex®',
      description: 'Líder em vidros temperados de segurança',
      benefits: ['Certificação técnica', 'Qualidade garantida', 'Normas ABNT'],
      logo: 'BLINDEX®',
      color: 'blue'
    },
    {
      name: 'Reiki®',
      description: 'Pioneira em envidraçamento de sacadas',
      benefits: ['Sistema patenteado', 'Abertura panorâmica', 'Garantia 5 anos'],
      logo: 'REIKI®',
      color: 'green'
    },
    {
      name: 'ALCOA',
      description: 'Líder mundial em alumínio premium',
      benefits: ['Linhas exclusivas', 'Pintura eletrostática', 'Alta durabilidade'],
      logo: 'ALCOA',
      color: 'red'
    },
    {
      name: 'Udinese',
      description: 'Referência em ferragens e componentes',
      benefits: ['Componentes premium', 'Tecnologia italiana', 'Máxima performance'],
      logo: 'UDINESE',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-200 bg-blue-50 text-blue-700',
      green: 'border-green-200 bg-green-50 text-green-700',
      red: 'border-red-200 bg-red-50 text-red-700',
      purple: 'border-purple-200 bg-purple-50 text-purple-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-100 border border-red-200 rounded-full px-4 py-2 text-sm font-medium text-red-700 mb-4">
            <Award className="w-4 h-4 mr-2" />
            Parceiros de Qualidade
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trabalhamos Apenas com os
            <span className="text-red-600 block">Melhores do Mercado</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nossa qualidade é resultado de parcerias estratégicas com as marcas líderes do setor. 
            Cada material é cuidadosamente selecionado para garantir durabilidade, segurança e design superior.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Logo/Brand */}
              <div className={`w-full h-20 rounded-lg border-2 flex items-center justify-center mb-4 ${getColorClasses(partner.color)} transition-all duration-300 group-hover:scale-105`}>
                <span className="text-2xl font-bold">
                  {partner.logo}
                </span>
              </div>

              {/* Name & Description */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {partner.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2">
                {partner.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-xs text-gray-600">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15+ Anos</h3>
              <p className="text-gray-600">
                De parceria com as melhores marcas do mercado nacional e internacional
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600">
                Dos nossos materiais são certificados e atendem às normas técnicas brasileiras
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">5 Estrelas</h3>
              <p className="text-gray-600">
                Avaliação média dos nossos clientes em qualidade de materiais e instalação
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Quer saber mais sobre a qualidade dos nossos materiais?
          </p>
          <a
            href="/parceiros"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Conheça Nossos Parceiros
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

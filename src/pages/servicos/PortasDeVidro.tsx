
import React from 'react';
import ServiceLayout from '../../components/services/ServiceLayout';

const PortasDeVidro = () => {
  const serviceData = {
    title: 'Portas de Vidro em Umuarama',
    subtitle: 'Elegância e Funcionalidade para seu Espaço',
    description: 'Nossas portas de vidro integram ambientes com sofisticação, utilizando vidro temperado Blindex® e ferragens Udinese de alta qualidade.',
    features: [
      'Vidro temperado Blindex® 8mm',
      'Ferragens Udinese premium',
      'Diversos modelos disponíveis',
      'Instalação profissional',
      'Garantia de qualidade'
    ],
    models: [
      {
        name: 'Porta de Correr',
        description: 'Ideal para otimizar espaços, desliza suavemente'
      },
      {
        name: 'Porta de Abrir (Giro)',
        description: 'Abertura tradicional, elegante e funcional'
      },
      {
        name: 'Porta Pivotante',
        description: 'Design moderno com abertura diferenciada'
      },
      {
        name: 'Porta Sanfonada',
        description: 'Máxima abertura em espaços amplos'
      }
    ],
    faq: [
      {
        question: 'Portas de vidro são seguras?',
        answer: 'Sim, utilizamos apenas vidro temperado Blindex®, que é 5 vezes mais resistente que o vidro comum e, se quebrar, se fragmenta em pequenos pedaços sem cortes.'
      },
      {
        question: 'Qual a espessura ideal?',
        answer: 'Recomendamos vidro de 8mm para portas residenciais e 10mm para portas de maior movimentação ou comerciais.'
      }
    ],
    whatsappMessage: 'Olá, tenho interesse em Portas de Vidro e gostaria de um orçamento.'
  };

  return <ServiceLayout {...serviceData} />;
};

export default PortasDeVidro;

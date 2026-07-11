
import React from 'react';
import ServiceLayout from '../../components/services/ServiceLayout';

const GuardaCorpoCorrimao = () => {
  const serviceData = {
    title: 'Guarda-Corpos e Corrimãos',
    subtitle: 'Proteção com a Transparência do Vidro',
    description: 'Nossos guarda-corpos seguem rigorosamente as normas ABNT, oferecendo máxima segurança com design sofisticado e transparência.',
    features: [
      'Conformidade com normas ABNT',
      'Torres de aço inox premium',
      'Vidro temperado de segurança',
      'Design elegante e moderno',
      'Instalação certificada'
    ],
    models: [
      {
        name: 'Guarda-Corpo com Torre de Inox',
        description: 'Sistema com torres de aço inox e vidro temperado'
      },
      {
        name: 'Guarda-Corpo com Bottons',
        description: 'Fixação através de bottons de aço inox'
      },
      {
        name: 'Guarda-Corpo Embutido',
        description: 'Sistema embutido na estrutura para visual limpo'
      }
    ],
    faq: [
      {
        question: 'Guarda-corpo de vidro é seguro?',
        answer: 'Sim, nossos guarda-corpos seguem rigorosamente as normas ABNT NBR 14718, garantindo máxima segurança com teste de carga e resistência.'
      },
      {
        question: 'Qual a altura mínima exigida por norma?',
        answer: 'A norma ABNT exige altura mínima de 1,05m para guarda-corpos em residências e 1,10m para áreas comerciais.'
      }
    ],
    whatsappMessage: 'Olá, tenho interesse em um projeto de guarda-corpo e gostaria de mais informações.'
  };

  return <ServiceLayout {...serviceData} />;
};

export default GuardaCorpoCorrimao;

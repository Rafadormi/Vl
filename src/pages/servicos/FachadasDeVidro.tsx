
import React from 'react';
import ServiceLayout from '../../components/services/ServiceLayout';

const FachadasDeVidro = () => {
  const serviceData = {
    title: 'Fachadas de Vidro',
    subtitle: 'A Imagem de Modernidade para seu Negócio',
    description: 'Transforme a imagem do seu estabelecimento com fachadas de vidro modernas, utilizando sistemas de pele de vidro e vidros de controle solar.',
    features: [
      'Sistema Structural Glazing (Pele de Vidro)',
      'Vidros refletivos de controle solar',
      'Design moderno e sofisticado',
      'Eficiência energética',
      'Manutenção facilitada'
    ],
    models: [
      {
        name: 'Pele de Vidro (Structural Glazing)',
        description: 'Sistema sem esquadrias aparentes, visual limpo'
      },
      {
        name: 'Fachada com Spider Glass',
        description: 'Fixação pontual com spiders de aço inox'
      },
      {
        name: 'Fachada Tradicional',
        description: 'Sistema com esquadrias de alumínio aparentes'
      }
    ],
    faq: [
      {
        question: 'Quais os benefícios do vidro refletivo?',
        answer: 'O vidro refletivo reduz o calor interno, proporciona privacidade durante o dia e reduz o consumo de energia com ar condicionado.'
      },
      {
        question: 'A manutenção de uma fachada de vidro é complexa?',
        answer: 'Não, com produtos adequados e limpeza regular, a manutenção é simples. Oferecemos também serviço de manutenção especializada.'
      }
    ],
    whatsappMessage: 'Olá, tenho interesse em um projeto de fachada de vidro e gostaria de conversar com um especialista.'
  };

  return <ServiceLayout {...serviceData} />;
};

export default FachadasDeVidro;


import React from 'react';
import ServiceLayout from '../../components/services/ServiceLayout';

const DivisoriasDeVidro = () => {
  const serviceData = {
    title: 'Divisórias de Vidro',
    subtitle: 'Integre Ambientes com Leveza e Sofisticação',
    description: 'Nossas divisórias de vidro são soluções inteligentes para otimizar espaços, promovendo luminosidade e amplitude sem perder a privacidade.',
    features: [
      'Vidro temperado de segurança',
      'Opções com vidro jateado ou serigrafado',
      'Integração de logomarcas',
      'Isolamento acústico eficiente',
      'Design personalizado'
    ],
    models: [
      {
        name: 'Divisória de Vidro Fixo',
        description: 'Painel fixo para separação permanente de ambientes'
      },
      {
        name: 'Divisória com Porta de Correr',
        description: 'Sistema com porta integrada de correr'
      },
      {
        name: 'Divisória com Porta de Abrir',
        description: 'Sistema tradicional com porta de abrir'
      }
    ],
    faq: [
      {
        question: 'Divisórias de vidro oferecem bom isolamento acústico?',
        answer: 'Sim, especialmente quando utilizamos vidros laminados ou duplos. O nível de isolamento varia conforme a espessura e tipo de vidro.'
      },
      {
        question: 'É possível aplicar logomarcas ou desenhos no vidro?',
        answer: 'Sim, oferecemos várias opções como jateamento, serigrafia, adesivos ou impressão digital no vidro.'
      }
    ],
    whatsappMessage: 'Olá, gostaria de um orçamento para divisórias de vidro para meu escritório/residência.'
  };

  return <ServiceLayout {...serviceData} />;
};

export default DivisoriasDeVidro;

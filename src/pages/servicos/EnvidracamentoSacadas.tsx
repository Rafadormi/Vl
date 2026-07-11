
import React from 'react';
import ServiceLayout from '../../components/services/ServiceLayout';

const EnvidracamentoSacadas = () => {
  const serviceData = {
    title: 'Envidraçamento de Sacadas',
    subtitle: 'Ganhe um Novo Ambiente em sua Casa',
    description: 'Transforme sua sacada em um novo ambiente protegido com o Sistema Reiki®, pioneiro e referência em envidraçamento panorâmico.',
    features: [
      'Sistema Reiki® original',
      'Visão panorâmica sem esquadrias verticais',
      'Abertura total dos painéis (90°)',
      'Vedação contra chuva e vento',
      'Garantia de 5 anos'
    ],
    models: [
      {
        name: 'Sistema Reiki® Panorâmico',
        description: 'Painéis de correr com abertura total de 90°'
      },
      {
        name: 'Sistema com Trinco de Segurança',
        description: 'Versão com fechadura para maior segurança'
      },
      {
        name: 'Sistema Personalizado',
        description: 'Adaptado às medidas e necessidades específicas'
      }
    ],
    faq: [
      {
        question: 'O sistema veda 100% a água da chuva?',
        answer: 'Sim, o Sistema Reiki® possui vedação especial que impede a entrada de água da chuva e reduz significativamente a entrada de vento.'
      },
      {
        question: 'Meu condomínio permite a instalação?',
        answer: 'Na maioria dos casos sim, mas sempre recomendamos consultar o síndico e verificar o regulamento interno do condomínio antes da instalação.'
      }
    ],
    whatsappMessage: 'Olá! Vi sobre o Envidraçamento de Sacadas e gostaria de mais informações.'
  };

  return <ServiceLayout {...serviceData} />;
};

export default EnvidracamentoSacadas;

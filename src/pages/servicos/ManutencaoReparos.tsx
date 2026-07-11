
import React from 'react';
import ServiceLayout from '../../components/services/ServiceLayout';

const ManutencaoReparos = () => {
  const serviceData = {
    title: 'Manutenção e Reparos',
    subtitle: 'Cuidando da Segurança e Durabilidade do seu Investimento',
    description: 'Oferecemos serviços especializados de manutenção preventiva e reparos para garantir a segurança e funcionalidade de seus vidros e esquadrias.',
    features: [
      'Manutenção preventiva especializada',
      'Regulagem de portas e janelas',
      'Troca de vidros danificados',
      'Reparo de molas de piso',
      'Atendimento de emergência'
    ],
    models: [
      {
        name: 'Manutenção de Box de Banheiro',
        description: 'Limpeza, regulagem e troca de componentes'
      },
      {
        name: 'Regulagem de Portas e Janelas',
        description: 'Ajustes para funcionamento perfeito'
      },
      {
        name: 'Troca de Vidros',
        description: 'Substituição rápida e segura'
      },
      {
        name: 'Manutenção de Esquadrias',
        description: 'Lubrificação e ajustes gerais'
      }
    ],
    faq: [
      {
        question: 'Com que frequência devo fazer a manutenção do meu box?',
        answer: 'Recomendamos manutenção preventiva a cada 6 meses para boxes de uso intenso e anualmente para uso normal.'
      },
      {
        question: 'Vocês atendem chamados de emergência?',
        answer: 'Sim, oferecemos atendimento de emergência para casos urgentes de vidros quebrados ou problemas de segurança.'
      }
    ],
    whatsappMessage: 'Olá, preciso de um serviço de manutenção/reparo e gostaria de agendar uma visita.'
  };

  return <ServiceLayout {...serviceData} />;
};

export default ManutencaoReparos;

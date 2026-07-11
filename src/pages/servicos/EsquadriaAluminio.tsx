
import React from 'react';
import ServiceLayout from '../../components/services/ServiceLayout';

const EsquadriaAluminio = () => {
  const serviceData = {
    title: 'Esquadrias de Alumínio',
    subtitle: 'Durabilidade e Design para seu Projeto',
    description: 'Parceiros oficiais da ALCOA, oferecemos esquadrias de alumínio com a mais alta qualidade, durabilidade e performance do mercado.',
    features: [
      'Perfis ALCOA originais',
      'Pintura eletrostática durável',
      'Diversas linhas disponíveis',
      'Ampla paleta de cores',
      'Resistência à corrosão'
    ],
    models: [
      {
        name: 'Linha Gold ALCOA',
        description: 'Linha premium com design sofisticado'
      },
      {
        name: 'Linha Suprema ALCOA',
        description: 'Alta performance para projetos exigentes'
      },
      {
        name: 'Linha Inova ALCOA',
        description: 'Soluções inovadoras em alumínio'
      }
    ],
    faq: [
      {
        question: 'Quais as vantagens do alumínio sobre outros materiais?',
        answer: 'O alumínio não enferruja, é leve, durável, não requer manutenção constante e oferece excelente relação custo-benefício ao longo do tempo.'
      },
      {
        question: 'As esquadrias de alumínio oferecem bom isolamento térmico e acústico?',
        answer: 'Sim, especialmente as linhas premium da ALCOA, que possuem sistemas de vedação avançados e podem receber vidros duplos.'
      }
    ],
    whatsappMessage: 'Olá, gostaria de saber mais sobre as esquadrias de alumínio para meu projeto.'
  };

  return <ServiceLayout {...serviceData} />;
};

export default EsquadriaAluminio;

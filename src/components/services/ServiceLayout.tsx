
import React from 'react';
import { MessageCircle, CheckCircle, Phone } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  models: {
    name: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  whatsappMessage: string;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  subtitle,
  description,
  features,
  models,
  faq,
  whatsappMessage
}) => {
  const whatsappUrl = `https://wa.me/5544999887766?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8">{subtitle}</p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-lg leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Principais Características
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <span className="font-semibold text-gray-800">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Modelos Disponíveis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {models.map((model, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{model.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{model.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Perguntas Frequentes
            </h2>
            <div className="space-y-6">
              {faq.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Solicite seu Orçamento Gratuito
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Entre em contato conosco pelo WhatsApp e receba uma proposta personalizada
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Solicitar Orçamento
              </a>
              
              <div className="flex items-center text-white">
                <Phone className="w-5 h-5 mr-2" />
                <span>(44) 99988-7766</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceLayout;

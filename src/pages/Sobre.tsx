
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Sobre = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Sobre a Vidraçaria Liderança</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Há mais de 15 anos no mercado, a Vidraçaria Liderança é referência em soluções completas 
              em vidros temperados e esquadrias de alumínio em Umuarama e região.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Somos parceiros oficiais das principais marcas do mercado: Blindex®, Reiki®, ALCOA e Udinese, 
              garantindo sempre a máxima qualidade e segurança em nossos produtos e serviços.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;


import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Nosso Portfólio</h1>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              Conheça alguns de nossos principais projetos realizados em Umuarama e região.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;

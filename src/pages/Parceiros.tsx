
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Parceiros = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Nossos Parceiros</h1>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Trabalhamos com as melhores marcas do mercado para garantir qualidade e segurança.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-red-600">Blindex®</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-red-600">Reiki®</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-red-600">ALCOA</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-red-600">Udinese</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Parceiros;

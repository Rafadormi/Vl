
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CONTACTS, waLink, DEFAULT_WA_MSG } from '../lib/contact';
import { MapPin, Mail, MessageCircle, Clock } from 'lucide-react';

const Contato = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">Entre em Contato</h1>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Endereço</h3>
                  <p className="text-gray-600">
                    Rua Toshie Nishiyama Sucupira, 3947<br />
                    Parque Alto da Parana - Umuarama/PR<br />
                    CEP: 87504-715
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MessageCircle className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                  <div className="space-y-1">
                    <p className="text-gray-600">{CONTACTS.diego.phone} - {CONTACTS.diego.name}</p>
                    <p className="text-gray-600">{CONTACTS.jonathan.phone} - {CONTACTS.jonathan.name}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">E-mail</h3>
                  <p className="text-gray-600">{CONTACTS.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Horário de Funcionamento</h3>
                  <div className="text-gray-600">
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p>Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Solicite seu Orçamento</h3>
                <p className="text-gray-600 mb-6">
                  Entre em contato conosco pelo WhatsApp e receba um orçamento personalizado.
                </p>
                <a
                  href={waLink(DEFAULT_WA_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center w-full"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </a>
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.905426727671!2d-53.275677324664116!3d-23.750751678670085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f2d405989a4533%3A0xda7faa620726ce4e!2sVidra%C3%A7aria%20Lideran%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1783698910380!5m2!1spt-BR!2sbr" width="100%" height="250" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;

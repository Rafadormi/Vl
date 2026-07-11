import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACTS, waLink, DEFAULT_WA_MSG } from '@/lib/contact';
import { MapPin, Mail, MessageCircle, Clock, Send } from 'lucide-react';

const Contato = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#1a1c1c] font-['Open_Sans']">
      <Header />
      
      <main className="flex-grow pt-[80px]">
        {/* Header Section */}
        <section className="bg-[#111111] py-20 text-white text-center">
          <div className="max-w-[1280px] mx-auto px-6">
            <h1 className="font-['Inter'] text-[40px] md:text-[56px] font-extrabold leading-[1.1] tracking-tight mb-6">
              Fale Conosco
            </h1>
            <p className="text-[18px] leading-[28px] text-white/80 max-w-2xl mx-auto">
              Precisa de um orçamento? Envie as medidas, uma foto do local ou nos conte sua ideia. Estamos prontos para atender você.
            </p>
          </div>
        </section>

        <section className="py-20 max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info & Map */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-['Inter'] text-[32px] font-bold text-[#1a1c1c] mb-6">Informações de Contato</h2>
                <div className="space-y-6">
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-[#f4f3f3] p-3 rounded-full border border-[#e2e2e2]">
                      <MapPin className="h-6 w-6 text-[#E60012]" />
                    </div>
                    <div>
                      <h3 className="font-['Inter'] text-[16px] font-bold text-[#1a1c1c] mb-1">Endereço</h3>
                      <p className="text-[15px] text-[#5f3f3b] leading-relaxed">
                        Rua Toshie Nishiyama Sucupira, 3947<br />
                        Parque Alto da Parana - Umuarama/PR<br />
                        CEP: 87504-715
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#f4f3f3] p-3 rounded-full border border-[#e2e2e2]">
                      <MessageCircle className="h-6 w-6 text-[#25D366]" />
                    </div>
                    <div>
                      <h3 className="font-['Inter'] text-[16px] font-bold text-[#1a1c1c] mb-1">WhatsApp & Telefones</h3>
                      <p className="text-[15px] text-[#5f3f3b] leading-relaxed">
                        <a href={waLink('Olá! Gostaria de falar com o Diego.')} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">{CONTACTS.diego.phone} - {CONTACTS.diego.name}</a><br />
                        <a href={waLink('Olá! Gostaria de falar com o Jonathan.')} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">{CONTACTS.jonathan.phone} - {CONTACTS.jonathan.name}</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#f4f3f3] p-3 rounded-full border border-[#e2e2e2]">
                      <Mail className="h-6 w-6 text-[#E60012]" />
                    </div>
                    <div>
                      <h3 className="font-['Inter'] text-[16px] font-bold text-[#1a1c1c] mb-1">E-mail</h3>
                      <p className="text-[15px] text-[#5f3f3b]">
                        <a href={`mailto:${CONTACTS.email}`} className="hover:text-[#E60012] transition-colors">{CONTACTS.email}</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#f4f3f3] p-3 rounded-full border border-[#e2e2e2]">
                      <Clock className="h-6 w-6 text-[#E60012]" />
                    </div>
                    <div>
                      <h3 className="font-['Inter'] text-[16px] font-bold text-[#1a1c1c] mb-1">Horário de Funcionamento</h3>
                      <p className="text-[15px] text-[#5f3f3b] leading-relaxed">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado: 8h às 12h
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-[#e2e2e2] shadow-sm h-[300px]">
                <iframe 
                  title="Mapa de localização Vidraçaria Liderança"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.905426727671!2d-53.275677324664116!3d-23.750751678670085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f2d405989a4533%3A0xda7faa620726ce4e!2sVidra%C3%A7aria%20Lideran%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1783698910380!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg border border-[#e2e2e2] shadow-sm">
              <h2 className="font-['Inter'] text-[24px] font-bold text-[#1a1c1c] mb-2">Envie sua mensagem</h2>
              <p className="text-[14px] text-[#5f3f3b] mb-8">
                Para um orçamento mais rápido, informe as medidas aproximadas e o tipo de serviço. Se preferir, nos chame no WhatsApp e envie fotos do local.
              </p>
              
              <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert("Mensagem enviada com sucesso! Entraremos em contato em breve."); }}>
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-['Inter'] text-[14px] font-semibold text-[#1a1c1c]">Seu Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="Ex: João da Silva"
                    className="px-4 py-3 rounded border border-[#e2e2e2] focus:outline-none focus:ring-2 focus:ring-[#E60012]/30 focus:border-[#E60012] bg-[#f9f9f9]"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label htmlFor="phone" className="font-['Inter'] text-[14px] font-semibold text-[#1a1c1c]">Telefone / WhatsApp</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required 
                      placeholder="(44) 90000-0000"
                      className="px-4 py-3 rounded border border-[#e2e2e2] focus:outline-none focus:ring-2 focus:ring-[#E60012]/30 focus:border-[#E60012] bg-[#f9f9f9]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label htmlFor="email" className="font-['Inter'] text-[14px] font-semibold text-[#1a1c1c]">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="seuemail@exemplo.com"
                      className="px-4 py-3 rounded border border-[#e2e2e2] focus:outline-none focus:ring-2 focus:ring-[#E60012]/30 focus:border-[#E60012] bg-[#f9f9f9]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="font-['Inter'] text-[14px] font-semibold text-[#1a1c1c]">Serviço Desejado</label>
                  <select 
                    id="service" 
                    className="px-4 py-3 rounded border border-[#e2e2e2] focus:outline-none focus:ring-2 focus:ring-[#E60012]/30 focus:border-[#E60012] bg-[#f9f9f9]"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="box">Box para Banheiro</option>
                    <option value="vidro-temperado">Vidro Temperado</option>
                    <option value="espelhos">Espelhos sob medida</option>
                    <option value="sacada">Fechamento de Sacada</option>
                    <option value="esquadrias">Esquadrias de Alumínio</option>
                    <option value="manutencao">Manutenção/Reparos</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-['Inter'] text-[14px] font-semibold text-[#1a1c1c]">Detalhes do Pedido</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    required 
                    placeholder="Descreva o que você precisa. Se possível, inclua as medidas aproximadas (ex: vão de 1,20m x 1,90m)."
                    className="px-4 py-3 rounded border border-[#e2e2e2] focus:outline-none focus:ring-2 focus:ring-[#E60012]/30 focus:border-[#E60012] bg-[#f9f9f9] resize-y"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="mt-4 flex items-center justify-center gap-2 bg-[#E60012] text-white font-['Inter'] font-bold text-[16px] py-4 rounded hover:bg-[#c4000f] transition-colors shadow-md hover:-translate-y-0.5"
                >
                  <Send className="h-5 w-5" /> Enviar Mensagem
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-[#e2e2e2]">
                <p className="text-[14px] text-center text-[#5f3f3b] mb-4">
                  Preferência por atendimento imediato?
                </p>
                <a
                  href={waLink(DEFAULT_WA_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-6 py-4 rounded font-['Inter'] font-bold text-[16px] hover:bg-[#20bd5a] transition-colors flex items-center justify-center w-full gap-2 shadow-md hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chamar no WhatsApp Agora
                </a>
              </div>
            </div>
            
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contato;

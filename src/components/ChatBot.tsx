import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Bot, MessageCircle } from 'lucide-react';
import { waLink } from '@/lib/contact';

type Message = {
  id: number;
  sender: 'bot' | 'user';
  text: string;
  options?: string[];
  action?: 'whatsapp';
};

const INITIAL_MESSAGE: Message = {
  id: 1,
  sender: 'bot',
  text: 'Olá! Sou o assistente virtual da Vidraçaria Liderança 👋\n\nComo posso ajudar você hoje?',
  options: ['Box para Banheiro', 'Espelhos', 'Sacadas / Guarda-corpo', 'Esquadrias de Alumínio', 'Outros Serviços']
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const handleOptionClick = (option: string, messageId: number) => {
    // Hide options from the clicked message
    setMessages(prev => prev.map(m => m.id === messageId ? { ...m, options: undefined } : m));
    
    // Add user message
    const userMsg: Message = { id: Date.now(), sender: 'user', text: option };
    setMessages(prev => [...prev, userMsg]);
    
    // Show typing indicator
    setIsTyping(true);

    // Simulate bot thinking and responding
    setTimeout(() => {
      setIsTyping(false);
      let botResponse: Message;

      if (INITIAL_MESSAGE.options?.includes(option)) {
        botResponse = {
          id: Date.now() + 1,
          sender: 'bot',
          text: `Ótima escolha! Para o serviço de ${option}, você já possui as medidas aproximadas ou prefere que a gente agende uma visita técnica gratuita?`,
          options: ['Tenho as medidas', 'Quero visita técnica', 'Quero só tirar dúvidas']
        };
      } else {
        botResponse = {
          id: Date.now() + 1,
          sender: 'bot',
          text: 'Perfeito! Vou te direcionar agora para o nosso WhatsApp. Um especialista vai assumir o atendimento para te dar toda a atenção necessária. 🚀',
          action: 'whatsapp'
        };
      }
      setMessages(prev => [...prev, botResponse]);
    }, 1500);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#E60012] text-white shadow-xl transition-transform hover:scale-110 focus:outline-none ${isOpen ? 'scale-0' : 'scale-100'}`}
        aria-label="Abrir chat"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 z-50 flex h-[500px] w-[350px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-200 transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between bg-[#111111] px-5 py-4 text-white shadow-md z-10">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E60012]">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-['Inter'] text-sm font-bold leading-tight">Assistente Liderança</h3>
              <p className="text-[10px] text-white/70 uppercase tracking-widest font-semibold mt-0.5">Online agora</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors p-1">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto bg-[#f9f9f9] p-5">
          <div className="flex flex-col gap-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${msg.sender === 'user' ? 'bg-[#E60012] text-white rounded-tr-sm shadow-md' : 'bg-white text-gray-800 border border-gray-100 shadow-sm rounded-tl-sm'}`}>
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                  
                  {/* Options */}
                  {msg.options && msg.options.length > 0 && (
                    <div className="mt-3 flex flex-col gap-2">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleOptionClick(opt, msg.id)}
                          className="text-left rounded-lg border border-[#E60012]/30 bg-white px-3 py-2 text-[13px] font-semibold text-[#E60012] transition-colors hover:bg-[#E60012] hover:text-white shadow-sm"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* WhatsApp Action */}
                  {msg.action === 'whatsapp' && (
                    <a
                      href={waLink('Olá! Falei com o assistente virtual no site e gostaria de dar continuidade ao meu atendimento.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#20bd5a] shadow-md"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Falar no WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5 items-center h-[42px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 bg-white p-3 text-center">
          <p className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">Atendimento Automático</p>
        </div>
      </div>
    </>
  );
}

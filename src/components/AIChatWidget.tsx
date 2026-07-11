import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Bot, MessageCircle, Send, User } from 'lucide-react';
import { waLink } from '@/lib/contact';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/ui/card';

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
  text: 'Olá! Sou o assistente virtual da Vidraçaria Liderança 👋\n\nEstou aqui para ajudar com o seu orçamento. Qual serviço você procura hoje?',
  options: ['Obra Completa', 'Box para Banheiro', 'Espelhos sob medida', 'Envidraçamento / Sacada', 'Portas e Janelas', 'Manutenção e Reparos']
};

export default function AIChatWidget() {
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

    // Simulate bot thinking and responding based on script (Roteiro)
    setTimeout(() => {
      setIsTyping(false);
      let botResponse: Message;

      if (INITIAL_MESSAGE.options?.includes(option)) {
        botResponse = {
          id: Date.now() + 1,
          sender: 'bot',
          text: `Ótima escolha! Para o serviço de ${option}, você já possui as medidas aproximadas do local ou prefere que a gente agende uma visita técnica gratuita (Umuarama e região)?`,
          options: ['Já tenho as medidas', 'Quero agendar visita técnica', 'Apenas tirar dúvidas']
        };
      } else if (option === 'Já tenho as medidas') {
        botResponse = {
          id: Date.now() + 1,
          sender: 'bot',
          text: 'Perfeito! Para que um de nossos especialistas prepare um orçamento exato e rápido, vou te transferir agora para o WhatsApp. Lá você pode enviar as medidas e fotos do local.',
          action: 'whatsapp'
        };
      } else if (option === 'Quero agendar visita técnica') {
        botResponse = {
          id: Date.now() + 1,
          sender: 'bot',
          text: 'Com certeza! A visita técnica garante o encaixe perfeito e a segurança do projeto. Vou te transferir para o nosso WhatsApp para combinarmos o melhor dia e horário.',
          action: 'whatsapp'
        };
      } else {
        botResponse = {
          id: Date.now() + 1,
          sender: 'bot',
          text: 'Sem problemas! Nossa equipe de atendimento está pronta para tirar todas as suas dúvidas. Clique no botão abaixo para falar com a gente no WhatsApp. 🚀',
          action: 'whatsapp'
        };
      }
      setMessages(prev => [...prev, botResponse]);
    }, 1200);
  };

  return (
    <>
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Chat Inteligente"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#E60012] px-5 py-4 text-white shadow-xl animate-bounce hover:animate-none transition-transform hover:scale-105 focus-visible:outline-none"
        >
          <Bot className="h-6 w-6" />
          <span className="hidden sm:inline font-semibold">Orçamento IA</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-5 right-5 z-50 w-[350px] md:w-[400px] h-[520px] flex flex-col shadow-2xl border-gray-200 animate-in fade-in zoom-in duration-200">
          <CardHeader className="bg-[#111111] text-white py-4 flex flex-row items-center justify-between rounded-t-xl border-b-0">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E60012]">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-[15px] font-bold">Assistente Liderança</CardTitle>
                <p className="text-[11px] text-white/70 uppercase tracking-widest font-semibold mt-0.5">Online • Roteiro Ativo</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X className="h-5 w-5" />
            </button>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f9f9f9]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === 'user' ? 'bg-[#E60012] text-white' : 'bg-[#111111] text-white'}`}>
                    {msg.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div className={`p-3 text-[14px] leading-relaxed shadow-sm ${msg.sender === 'user' ? 'bg-[#E60012] text-white rounded-2xl rounded-tr-sm' : 'bg-white border border-gray-100 text-gray-800 rounded-2xl rounded-tl-sm'}`}>
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                    
                    {/* Guided Options (Roteiro) */}
                    {msg.options && msg.options.length > 0 && (
                      <div className="mt-3 flex flex-col gap-2">
                        {msg.options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleOptionClick(opt, msg.id)}
                            className="text-left rounded-xl border border-[#E60012]/30 bg-white px-3 py-2.5 text-[13px] font-semibold text-[#E60012] transition-colors hover:bg-[#E60012] hover:text-white shadow-sm"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* WhatsApp CTA Action */}
                    {msg.action === 'whatsapp' && (
                      <a
                        href={waLink('Olá! Iniciei meu atendimento pelo assistente virtual no site e gostaria de dar continuidade com um especialista.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#20bd5a] shadow-md"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Falar no WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-2 max-w-[85%] flex-row">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-[#111111] text-white">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5 items-center h-[42px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>
          
          <CardFooter className="p-3 bg-white border-t border-gray-100 justify-center">
            <p className="text-[11px] text-gray-400 font-medium tracking-wide">
              Atendimento Guiado (Roteiro IA)
            </p>
          </CardFooter>
        </Card>
      )}
    </>
  );
}

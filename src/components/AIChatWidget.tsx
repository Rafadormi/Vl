import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Olá! Sou o assistente virtual da Vidraçaria Liderança. Posso te ajudar a escolher o serviço ideal, tirar dúvidas sobre medidas e coletar informações para o seu orçamento. Como posso ajudar hoje?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { role: 'user', text: input }]);
    setInput('');
    
    // Simulate AI response based on mock flow
    setTimeout(() => {
      let aiResponse = 'Entendido. Para preparar um orçamento mais preciso, você poderia me informar o seu bairro ou cidade?';
      
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('box')) {
        aiResponse = 'Claro, trabalhamos com box temperado Blindex. Você prefere de correr, de abrir ou de canto? E tem uma medida aproximada da largura?';
      } else if (lowerInput.includes('bairro') || lowerInput.includes('centro') || lowerInput.includes('umuarama')) {
        aiResponse = 'Perfeito. Pode enviar uma foto do local também? Se preferir, já vou encaminhar seus dados para um especialista finalizar seu orçamento no WhatsApp. Qual seu número?';
      }
      
      setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    }, 1000);
  };

  return (
    <>
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Chat Inteligente"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-4 text-primary-foreground shadow-elegant animate-bounce hover:animate-none transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
        >
          <Bot className="h-6 w-6" />
          <span className="hidden sm:inline font-semibold">Chat IA</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-5 right-5 z-50 w-[350px] md:w-[400px] h-[500px] flex flex-col shadow-2xl border-primary/20">
          <CardHeader className="bg-primary text-primary-foreground py-4 flex flex-row items-center justify-between rounded-t-xl">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <CardTitle className="text-lg">Assistente Liderança</CardTitle>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-primary-foreground/80 hover:text-white transition-colors">
              <X className="h-5 w-5" />
            </button>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-secondary text-secondary-foreground' : 'bg-primary/20 text-primary'}`}>
                    {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div className={`p-3 rounded-lg text-sm ${msg.role === 'user' ? 'bg-secondary text-secondary-foreground rounded-tr-none' : 'bg-white border border-border rounded-tl-none shadow-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>

          <CardFooter className="p-4 bg-background border-t border-border gap-2">
            <Input 
              placeholder="Digite sua mensagem..." 
              value={input} 
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              className="flex-1"
            />
            <Button onClick={handleSend} size="icon" className="shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default AIChatWidget;

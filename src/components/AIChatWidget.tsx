import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Bot, X, User, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { waLink } from '@/lib/contact';

interface Message {
  id: number;
  sender: 'user' | 'bot';
  text: string;
  options?: string[];
  action?: 'whatsapp';
}

const INITIAL_MESSAGE: Message = {
  id: 1,
  sender: 'bot',
  text: 'Olá! Aqui é o atendimento virtual da Vidraçaria Liderança 👋\n\nTrabalhamos com vidros, espelhos e esquadrias de alumínio em Umuarama e região.\n\nMe conta rapidamente: qual serviço você precisa?',
  options: [
    'Box para banheiro', 
    'Vidro temperado', 
    'Espelho', 
    'Fechamento de sacada', 
    'Guarda-corpo', 
    'Porta de vidro', 
    'Janela / troca de vidro', 
    'Esquadria de alumínio', 
    'Cobertura de vidro', 
    'Divisória', 
    'Fachada', 
    'Vitrine', 
    'Manutenção', 
    'Não sei / outro'
  ]
};

const SERVICE_FLOWS: Record<string, { intro: string; closing: string }> = {
  'Box para banheiro': {
    intro: 'Perfeito, box para banheiro. Fazemos box de correr, de abrir, de canto e do piso ao teto, sempre em vidro temperado ou laminado.\n\nPara te ajudar com o orçamento, me passa:\n1) Qual a largura aproximada do vão (em metros)?\n2) A altura do teto ou até onde o box deve ir?\n3) Você já tem uma ideia do tipo de abertura (correr, abrir, canto)?\n4) Você consegue me mandar uma foto do banheiro?',
    closing: 'Show, anotei aqui. Com essas informações a nossa equipe já consegue te dar uma direção melhor sobre o modelo e uma estimativa. Quer que eu já te encaminhe pro WhatsApp com esse resumo pra dar sequência?'
  },
  'Vidro temperado': {
    intro: 'Vidro temperado é usado em várias aplicações — portas, painéis, divisórias, vitrines, fechamentos. Onde você vai aplicar?\n\n1) Qual a aplicação (porta, painel, divisória, outro)?\n2) Largura e altura aproximadas?\n3) É ambiente interno ou externo?\n4) Tem foto do local?',
    closing: 'Perfeito, com isso a equipe já consegue avaliar a espessura e o acabamento certos pro seu caso. Posso te passar pro WhatsApp?'
  },
  'Espelho': {
    intro: 'Fazemos espelhos sob medida para banheiro, sala, quarto, closet, academia, salão ou comércio.\n\n1) Onde vai o espelho (ambiente)?\n2) Largura e altura aproximadas?\n3) Você já pensou em algum acabamento (lapidado, bisotado, com moldura)?\n4) Consegue mandar uma foto da parede onde ele vai?',
    closing: 'Ótimo, já tenho o essencial. Vou te passar pro WhatsApp pra equipe confirmar o acabamento e a forma de fixação.'
  },
  'Fechamento de sacada': {
    intro: 'Fechamento de sacada é um dos serviços que exige mais cuidado técnico, porque depende do vento e da altura do andar. Vamos por partes:\n\n1) Qual a largura total da sacada e a altura do vão (piso ao teto ou até o parapeito)?\n2) Em qual andar fica o apartamento?\n3) Qual o CEP ou pelo menos a região da obra?\n4) Já existe alguma mureta ou guarda-corpo na sacada?\n5) Consegue mandar uma foto de fora e de dentro da sacada?',
    closing: 'Anotado! Essas informações de andar e localização são importantes porque a espessura do vidro muda conforme a exposição ao vento — por isso a avaliação final é sempre feita pela nossa equipe. Posso te encaminhar pro WhatsApp?'
  },
  'Guarda-corpo': {
    intro: 'Guarda-corpo é para proteção de escadas, sacadas, mezaninos ou áreas com desnível — segurança é o ponto mais importante aqui.\n\n1) Qual o comprimento total do guarda-corpo?\n2) Qual a altura desejada (do piso até o topo)?\n3) É ambiente interno ou externo?\n4) O local tem circulação de crianças ou muitas pessoas (ex: escola, condomínio, comércio)?\n5) Consegue mandar foto do local onde ele será instalado?',
    closing: 'Perfeito. Guarda-corpo sempre segue critérios rígidos de altura e resistência, então a equipe vai confirmar a especificação exata depois de ver as fotos e medidas. Posso te passar pro WhatsApp agora?'
  },
  'Porta de vidro': {
    intro: 'Portas de vidro são ótimas para lojas, escritórios, clínicas ou entradas residenciais.\n\n1) É para uso residencial ou comercial?\n2) Largura e altura aproximadas do vão?\n3) Você já pensou no tipo de abertura (giro, correr)?\n4) Precisa de fechadura ou automatização?\n5) Tem foto do vão?',
    closing: 'Beleza, já tenho o suficiente pra equipe te orientar sobre ferragens e tipo de vidro. Posso te encaminhar pro WhatsApp?'
  },
  'Janela / troca de vidro': {
    intro: 'Entendi, vamos cuidar da troca ou do reparo do vidro.\n\n1) O vidro está quebrado, trincado ou é só troca por outro motivo?\n2) Isso é urgente (tem risco de acidente ou entrada de água/vento)?\n3) Qual a largura e altura aproximadas do vidro?\n4) Consegue mandar uma foto do vidro/janela?',
    closing: 'Recebido. Se for urgente, me avisa que já te encaminho com prioridade pro WhatsApp da equipe agora.'
  },
  'Esquadria de alumínio': {
    intro: 'Esquadrias de alumínio funcionam bem tanto pra portas quanto janelas, com várias opções de abertura.\n\n1) É porta ou janela?\n2) Largura e altura aproximadas?\n3) Quantas folhas você imagina (2, 3, 4)?\n4) Tem preferência de cor do perfil?\n5) Foto do vão ou de uma esquadria antiga que será substituída?',
    closing: 'Ótimo, já dá pra equipe começar a pensar no modelo ideal. Posso te passar pro WhatsApp?'
  },
  'Cobertura de vidro': {
    intro: 'Cobertura de vidro é ótima pra proteger área externa sem perder a luz natural.\n\n1) Qual a largura e o comprimento aproximados da área?\n2) Já existe alguma estrutura de apoio (metálica, madeira) ou seria do zero?\n3) Sabe me dizer se o local tem alguma inclinação natural?\n4) Foto do espaço?',
    closing: 'Perfeito, esses dados ajudam a equipe a definir a estrutura de sustentação certa. Posso te encaminhar pro WhatsApp?'
  },
  'Divisória': {
    intro: 'Divisórias de vidro são ótimas pra separar ambientes sem perder luz e amplitude.\n\n1) Onde será (escritório, clínica, residência)?\n2) Largura e altura aproximadas?\n3) Precisa de porta na divisória?\n4) Tem alguma necessidade de privacidade ou isolamento de som?\n5) Foto ou planta do ambiente?',
    closing: 'Anotado. Posso já te passar pro WhatsApp com esse resumo?'
  },
  'Fachada': {
    intro: 'Fachada de vidro é um projeto mais robusto — vamos com calma.\n\n1) É para loja, clínica, escritório ou outro tipo de comércio?\n2) Largura e altura aproximadas da fachada?\n3) Quantos vãos (aberturas) você imagina?\n4) Vai precisar de porta na fachada?\n5) Tem foto da frente do imóvel, ou uma planta/projeto?',
    closing: 'Perfeito, projeto de fachada normalmente pede uma visita técnica ao local. Vou te passar pro WhatsApp pra equipe agendar essa avaliação.'
  },
  'Vitrine': {
    intro: 'Vitrine é ótimo pra dar mais visibilidade pro seu ponto comercial.\n\n1) Que tipo de comércio é (loja, mercado, showroom)?\n2) Largura e altura aproximadas?\n3) Vai ter porta na vitrine?\n4) É reforma de uma vitrine existente ou instalação nova?\n5) Foto da frente da loja?',
    closing: 'Show, já registrei tudo. Posso te encaminhar pro WhatsApp?'
  },
  'Manutenção': {
    intro: 'Vamos resolver essa manutenção.\n\n1) O que está acontecendo (porta emperrada, roldana, vidro solto, vedação, outro)?\n2) Há quanto tempo esse problema começou?\n3) É urgente?\n4) Consegue mandar foto ou até um vídeo curto do problema?',
    closing: 'Perfeito, recebido. Se puder, me manda o vídeo — ajuda demais a equipe a já entender o problema antes de ir até você. Posso te encaminhar pro WhatsApp agora?'
  },
  'Não sei / outro': {
    intro: 'Claro! Para eu te ajudar melhor, qual desses serviços chega mais perto do que você precisa? É para o banheiro, para uma sacada, para proteção de altura, ou para trocar um vidro quebrado?',
    closing: 'Entendi! Vou te encaminhar pro nosso WhatsApp pra equipe entender melhor o seu caso e te ajudar. Tudo certo?'
  }
};

type ChatStep = 'initial' | 'awaiting_answers' | 'closing';

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState('');
  
  const [currentStep, setCurrentStep] = useState<ChatStep>('initial');
  const [activeService, setActiveService] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const handleSend = (text: string, isOption = false) => {
    if (!text.trim()) return;

    // Remove options from the last message
    setMessages(prev => {
      const newMessages = [...prev];
      const lastBotMsgIndex = newMessages.map(m => m.sender).lastIndexOf('bot');
      if (lastBotMsgIndex !== -1) {
        newMessages[lastBotMsgIndex] = { ...newMessages[lastBotMsgIndex], options: undefined };
      }
      return newMessages;
    });

    // Add user message
    const userMsg: Message = { id: Date.now(), sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let botResponse: Message;
      const lowerText = text.toLowerCase();

      // Urgent check
      const isUrgent = lowerText.includes('urgente') || lowerText.includes('quebrado') || lowerText.includes('risco');
      if (isUrgent && currentStep !== 'initial') {
         setCurrentStep('closing');
         botResponse = {
           id: Date.now() + 1,
           sender: 'bot',
           text: 'Recebido. Como é urgente, vou te encaminhar agora com prioridade pro WhatsApp da nossa equipe.',
           action: 'whatsapp'
         };
         setMessages(prev => [...prev, botResponse]);
         return;
      }
      
      // Safety check for Sacada
      if (activeService === 'Fechamento de sacada' && (lowerText.includes('mais barat') || lowerText.includes('fino'))) {
        botResponse = {
           id: Date.now() + 1,
           sender: 'bot',
           text: 'Por segurança, para esse andar/exposição a gente não trabalha com essa espessura — mas a equipe pode te mostrar as opções dentro do que é seguro para o seu caso.',
           options: ['Entendi, ir para WhatsApp']
         };
         setMessages(prev => [...prev, botResponse]);
         return;
      }

      // FAQ checks (first priority if user types freely)
      if (!isOption && lowerText.includes('whatsapp') && lowerText.includes('orçamento')) {
        botResponse = { id: Date.now() + 1, sender: 'bot', text: 'Sim! Você pode conversar comigo aqui primeiro pra eu organizar as informações, ou já ir direto pro WhatsApp da equipe.', options: ['Continuar por aqui', 'Ir para o WhatsApp'] };
      } else if (!isOption && lowerText.includes('medida') && lowerText.includes('exata')) {
        botResponse = { id: Date.now() + 1, sender: 'bot', text: 'Não precisa ser exato — uma medida aproximada já ajuda bastante. A medida final é sempre conferida no local antes da confirmação.' };
      } else if (!isOption && lowerText.includes('empresa')) {
        botResponse = { id: Date.now() + 1, sender: 'bot', text: 'Sim, atendemos projetos residenciais e comerciais.' };
      } else if (!isOption && lowerText.includes('prazo')) {
        botResponse = { id: Date.now() + 1, sender: 'bot', text: 'O prazo depende do tipo de serviço e da produção do vidro sob medida — a equipe informa esse prazo depois de entender o projeto.' };
      } else if (!isOption && lowerText.includes('manutenção')) {
        botResponse = { id: Date.now() + 1, sender: 'bot', text: 'Sim, fazemos manutenção e reparo em vidros, box, portas, janelas e esquadrias.' };
      }
      
      // Flow logic
      else if (currentStep === 'initial') {
        const matchedService = Object.keys(SERVICE_FLOWS).find(s => text.includes(s) || lowerText.includes(s.toLowerCase()));
        
        if (matchedService) {
          setActiveService(matchedService);
          setCurrentStep('awaiting_answers');
          botResponse = {
            id: Date.now() + 1,
            sender: 'bot',
            text: SERVICE_FLOWS[matchedService].intro,
          };
        } else if (text === 'Ir para o WhatsApp') {
          botResponse = { id: Date.now() + 1, sender: 'bot', text: 'Combinado! Clique abaixo para falar no WhatsApp.', action: 'whatsapp' };
        } else {
          botResponse = {
            id: Date.now() + 1,
            sender: 'bot',
            text: 'Claro! Para eu te ajudar melhor, qual desses serviços chega mais perto do que você precisa?',
            options: INITIAL_MESSAGE.options
          };
        }
      } else if (currentStep === 'awaiting_answers') {
        // User provided the answers to the service questions
        setCurrentStep('closing');
        botResponse = {
          id: Date.now() + 1,
          sender: 'bot',
          text: activeService && SERVICE_FLOWS[activeService] ? SERVICE_FLOWS[activeService].closing : 'Entendi. Vou te encaminhar pro WhatsApp para darmos sequência.',
          options: ['Sim, falar no WhatsApp']
        };
      } else {
        // Closing step
        botResponse = {
          id: Date.now() + 1,
          sender: 'bot',
          text: `Show! Aqui está o resumo do que anotei:\n\nServiço: ${activeService || 'Não especificado'}\n\nVou te encaminhar agora pro nosso WhatsApp pra equipe dar sequência. Tudo certo?`,
          action: 'whatsapp'
        };
      }

      setMessages(prev => [...prev, botResponse]);
    }, 1200);
  };

  return (
    <>
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

      {isOpen && (
        <Card className="fixed bottom-5 right-5 z-50 w-[350px] md:w-[400px] h-[600px] flex flex-col shadow-2xl border-gray-200 animate-in fade-in zoom-in duration-200">
          <CardHeader className="bg-[#111111] text-white py-4 flex flex-row items-center justify-between rounded-t-xl border-b-0 shrink-0">
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
                    
                    {msg.options && msg.options.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {msg.options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleSend(opt, true)}
                            className="text-left rounded-xl border border-[#E60012]/30 bg-white px-3 py-2 text-[13px] font-semibold text-[#E60012] transition-colors hover:bg-[#E60012] hover:text-white shadow-sm"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}

                    {msg.action === 'whatsapp' && (
                      <a
                        href={waLink(`Olá! Vim pelo assistente do site da Vidraçaria Liderança.\nServiço: ${activeService || 'Geral'}`)}
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
          
          <CardFooter className="p-3 bg-white border-t border-gray-100 flex-col shrink-0 gap-2">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(inputText); }} 
              className="flex w-full items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 text-[14px] outline-none focus:border-[#E60012] focus:bg-white transition-colors"
                disabled={isTyping}
              />
              <button 
                type="submit" 
                disabled={!inputText.trim() || isTyping}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E60012] text-white disabled:opacity-50 transition-colors hover:bg-[#c4000f]"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <p className="text-[10px] text-gray-400 font-medium tracking-wide text-center mt-1">
              Assistente Virtual IA • Liderança
            </p>
          </CardFooter>
        </Card>
      )}
    </>
  );
}

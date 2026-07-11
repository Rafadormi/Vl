import { CheckCircle2 } from 'lucide-react';

const diferenciais = [
  'Atendimento personalizado do primeiro contato à instalação',
  'Medidas sob encomenda com precisão',
  'Compromisso com prazo e acabamento',
  'Equipe experiente e treinada',
  'Suporte contínuo para manutenção e instalação',
];

const AboutSection = () => (
  <section id="sobre" className="bg-white pb-20 lg:pb-28">
    <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <span className="text-sm font-bold uppercase tracking-widest text-[#E60012]">
          Sobre Nós
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
          Uma vidraçaria pensada para entregar bem feito
        </h2>
        <p className="mt-6 text-lg font-medium text-gray-800">
          A Vidraçaria Liderança atua em Umuarama/PR com soluções em vidro para residências e empresas, oferecendo serviços como box para banheiro, espelhos, fachadas, vitrines, esquadrias, divisórias, coberturas e manutenção especializada. A empresa possui presença local com endereço físico e canais de atendimento sempre prontos para o seu projeto.
        </p>
      </div>

      <ul className="space-y-4 lg:pl-10">
        {diferenciais.map((d) => (
          <li key={d} className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-[#E60012]" />
            <span className="text-base font-bold text-gray-800">{d}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default AboutSection;

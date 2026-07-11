import { MapPin, Ruler, Wrench, Zap } from 'lucide-react';

const items = [
  { icon: MapPin, label: 'Atendimento em Umuarama e região' },
  { icon: Ruler, label: 'Soluções sob medida' },
  { icon: Wrench, label: 'Instalação e manutenção' },
  { icon: Zap, label: 'Orçamento rápido' },
];

const TrustBar = () => (
  <section className="border-b border-border bg-[#f9f9f9]">
    <div className="container flex flex-wrap items-center justify-center gap-6 py-6 md:justify-between">
      {items.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E60012]/10 text-[#E60012]">
            <Icon className="h-5 w-5" />
          </span>
          <span className="text-sm font-bold text-gray-800">{label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TrustBar;

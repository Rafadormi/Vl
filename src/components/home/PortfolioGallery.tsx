/**
 * Galeria — placeholders realistas. Substitua os gradientes/labels por imagens reais.
 * Para trocar por foto: substitua o <div> interno por <img src="..." alt="..." className="h-full w-full object-cover" />
 */
const items = [
  { label: 'Box de vidro', tone: 'from-slate-800 to-slate-500' },
  { label: 'Esquadria de alumínio', tone: 'from-zinc-700 to-zinc-400' },
  { label: 'Fachada em vidro', tone: 'from-neutral-900 to-neutral-500' },
  { label: 'Espelho decorativo', tone: 'from-stone-700 to-stone-400' },
  { label: 'Porta de vidro', tone: 'from-gray-800 to-gray-500' },
  { label: 'Manutenção', tone: 'from-slate-700 to-slate-400' },
];

const PortfolioGallery = () => (
  <section id="portfolio" className="bg-background py-20">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Portfólio</span>
        <h2 className="mt-3 text-3xl font-extrabold text-secondary sm:text-4xl">
          Alguns dos nossos trabalhos
        </h2>
        <p className="mt-4 text-muted-foreground">
          Exemplos de projetos entregues em residências e comércios da região.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <div
            key={it.label}
            className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-card ${
              i === 0 ? 'sm:col-span-2 sm:row-span-2 sm:aspect-[4/5]' : ''
            }`}
          >
            {/* PLACEHOLDER — troque por <img src=... /> quando tiver fotos reais */}
            <div className={`h-full w-full bg-gradient-to-br ${it.tone} transition-transform duration-500 group-hover:scale-105`} />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <div className="text-sm font-semibold text-white">{it.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioGallery;

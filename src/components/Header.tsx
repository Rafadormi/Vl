import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { waLink, DEFAULT_WA_MSG } from '@/lib/contact';

const nav = [
  { name: 'Início', to: '/' },
  { name: 'Serviços', to: '/#servicos' },
  { name: 'Sobre', to: '/sobre' },
  { name: 'Portfólio', to: '/portfolio' },
  { name: 'Contato', to: '/contato' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" aria-label="Vidraçaria Liderança - Início">
          <img src="https://i.postimg.cc/QCmG0PNV/vidracaria-lideranca-logo-horizontal-colorida.png" alt="Vidraçaria Liderança" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-secondary transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex">
          <Link
            to="/orcamento"
            className="inline-flex items-center gap-2 rounded-full bg-[#E60012] px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#c4000f] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#E60012]/30"
          >
            <MessageCircle className="h-4 w-4" />
            Pedir orçamento
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-secondary lg:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-secondary hover:bg-muted"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/orcamento"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" /> Pedir orçamento
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

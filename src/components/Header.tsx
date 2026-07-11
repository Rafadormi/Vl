import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { waLink, DEFAULT_WA_MSG } from '@/lib/contact';

const nav = [
  { name: 'Início', to: '/' },
  { name: 'Serviços', to: '/servicos' },
  { name: 'Sobre', to: '/sobre' },
  { name: 'Portfólio', to: '/portfolio' },
  { name: 'Contato', to: '/contato' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = isHome && !scrolled && !open;

  return (
    <header 
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        isTransparent 
          ? 'bg-transparent border-transparent py-2' 
          : 'border-b border-border bg-background/95 backdrop-blur shadow-sm'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105" aria-label="Vidraçaria Liderança - Início">
          <img 
            src={isTransparent 
              ? "/images/logos/logo-branca.png" 
              : "/images/logos/logo-simbolo.png"} 
            alt="Vidraçaria Liderança" 
            className="h-10 md:h-12 w-auto object-contain transition-all duration-300" 
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-semibold transition-colors hover:text-[#E60012] ${
                isTransparent ? 'text-white/90 hover:text-white' : 'text-secondary'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex">
          <Link
            to="/orcamento"
            className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold shadow-lg transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#E60012]/30 ${
              isTransparent 
                ? 'bg-white text-[#E60012] hover:bg-white/90 hover:scale-[1.02]' 
                : 'bg-[#E60012] text-white hover:bg-[#c4000f] hover:scale-[1.02]'
            }`}
          >
            <MessageCircle className="h-4 w-4" />
            Pedir orçamento
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`rounded-md p-2 lg:hidden transition-colors ${
            isTransparent ? 'text-white' : 'text-secondary'
          }`}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden absolute top-full left-0 w-full shadow-xl">
          <div className="container flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-secondary hover:bg-muted hover:text-[#E60012] transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/orcamento"
              onClick={() => setOpen(false)}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#E60012] px-4 py-3.5 text-base font-bold text-white shadow-md"
            >
              <MessageCircle className="h-5 w-5" /> Pedir orçamento
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import { MessageCircle, Instagram, Facebook, MapPin } from 'lucide-react';
import { CONTACTS } from '@/lib/contact';

const Footer = () => (
  <footer className="border-t border-border bg-secondary text-white">
    <div className="container grid gap-10 py-14 md:grid-cols-3">
      {/* Brand */}
      <div>
        <div className="flex items-center gap-3">
          <div className="rounded-md bg-white p-2">
            <img src="https://i.postimg.cc/QCmG0PNV/vidracaria-lideranca-logo-horizontal-colorida.png" alt="Vidraçaria Liderança" className="h-10 w-auto object-contain" />
          </div>
        </div>
        <p className="mt-4 max-w-sm text-sm text-white/70">
          Vidros e esquadrias de alumínio sob medida em Umuarama e região. Atendimento
          próximo e orçamento rápido pelo WhatsApp.
        </p>
        <div className="mt-5 flex items-center gap-3">
          <a
            href={CONTACTS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="grid h-10 w-10 place-items-center rounded-full bg-white/5 transition-colors hover:bg-primary"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href={CONTACTS.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="grid h-10 w-10 place-items-center rounded-full bg-white/5 transition-colors hover:bg-primary"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-widest text-white/70">Contato</h4>
        <ul className="mt-4 space-y-3 text-sm">
          <li>
            <a
              href={CONTACTS.diego.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/85 hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-whatsapp" />
              {CONTACTS.diego.name} · {CONTACTS.diego.phone}
            </a>
          </li>
          <li>
            <a
              href={CONTACTS.jonathan.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/85 hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-whatsapp" />
              {CONTACTS.jonathan.name} · {CONTACTS.jonathan.phone}
            </a>
          </li>
          <li className="inline-flex items-center gap-2 text-white/70">
            <Instagram className="h-4 w-4" /> {CONTACTS.instagram.handle}
          </li>
        </ul>
      </div>

      {/* Area */}
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-widest text-white/70">Atendimento & Endereço</h4>
        <div className="mt-4 flex flex-col gap-3">
          <div className="inline-flex items-start gap-2 text-sm text-white/85">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E60012]" />
            <span>
              {CONTACTS.address}
              <br />
              <span className="text-white/60">Segunda a Sexta: 8h–18h · Sábado: 8h–12h</span>
            </span>
          </div>
          <div className="inline-flex items-start gap-2 text-sm text-white/85">
            <span className="font-semibold text-white/70">Email:</span> {CONTACTS.email}
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/60 sm:flex-row">
        <div>© {new Date().getFullYear()} Vidraçaria Liderança — Todos os direitos reservados.</div>
        <div>Umuarama · PR</div>
      </div>
    </div>
  </footer>
);

export default Footer;

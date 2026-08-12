import { Instagram, Facebook, Linkedin, ArrowUp, Mail, Phone, MapPin, Music2 } from 'lucide-react';
import { EMAIL, PHONE_DISPLAY, ADDRESS, WHATSAPP_NUMBER, WHATSAPP_MSG, SOCIALS, WEBSITE, LOGO_URL } from '../lib/content';

const cols = [
  {
    title: 'Líneas',
    links: [
      { label: 'Endurance SPC', href: '#endurance-spc' },
      { label: 'Urban SPC', href: '#urban-spc' },
      { label: 'EccoBamboo', href: '#eccobamboo' },
      { label: 'Eccoflooring', href: '#eccoflooring' },
      { label: 'Foresta', href: '#foresta' },
      { label: 'EccoDeck', href: '#eccodeck' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Herencia', href: '#herencia' },
      { label: 'Proyectos', href: '#galeria' },
      { label: 'Proceso', href: '#proceso' },
      { label: 'Testimonios', href: '#testimonios' },
      { label: 'Cotización', href: '#inicio' },
    ],
  },
];

export default function Footer() {
  const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  return (
    <footer className="bg-primary-900 text-cream-50">
      <div className="container-lux py-20 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#inicio" className="flex items-center" aria-label="ECCOPISOS inicio">
              <img src={LOGO_URL} alt="ECCOPISOS" className="h-10 w-auto md:h-12" />
            </a>
            <p className="mt-6 max-w-sm text-cream-50/70 text-pretty">
              Más de 70 años de trayectoria maderera en el Perú. Especialistas técnicos en
              revestimientos de pisos para constructoras, arquitectos y proyectos residenciales.
              Calidad certificada, diseño innovador y postventa consolidada.
            </p>
            <div className="mt-7 flex gap-3">
              {[
                { icon: Instagram, href: SOCIALS.instagram, label: 'Instagram' },
                { icon: Facebook, href: SOCIALS.facebook, label: 'Facebook' },
                { icon: Music2, href: SOCIALS.tiktok, label: 'TikTok' },
                { icon: Linkedin, href: SOCIALS.linkedin, label: 'LinkedIn' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cream-50/15 text-cream-50/80 transition-all duration-500 hover:border-accent hover:bg-accent hover:text-primary"
                >
                  <s.icon className="h-5 w-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <h3 className="font-serif text-lg text-cream-50">{c.title}</h3>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-cream-50/70 transition-colors hover:text-accent-300 link-underline">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg text-cream-50">Contacto</h3>
            <ul className="mt-5 space-y-4 text-sm text-cream-50/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
                {ADDRESS}
              </li>
              <li>
                <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`} className="flex items-center gap-3 transition-colors hover:text-accent-300">
                  <Phone className="h-4 w-4 shrink-0 text-accent-300" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 transition-colors hover:text-accent-300">
                  <Mail className="h-4 w-4 shrink-0 text-accent-300" />
                  {EMAIL}
                </a>
              </li>
              <li className="text-cream-50/50">{WEBSITE}</li>
            </ul>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 !bg-accent !text-primary hover:!bg-accent-400">
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream-50/10 pt-8 md:flex-row">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-cream-50/50">
            <span>© {new Date().getFullYear()} ECCOPISOS. Todos los derechos reservados.</span>
            <span className="hidden md:inline text-cream-50/20">·</span>
            <a href="#" className="transition-colors hover:text-accent-300">Política de Privacidad · Ley N° 29733</a>
            <span className="hidden md:inline text-cream-50/20">·</span>
            <a href="#" className="transition-colors hover:text-accent-300">Libro de Reclamaciones · INDECOPI</a>
          </div>
          <a
            href="#inicio"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-cream-50/70 transition-colors hover:text-accent-300"
          >
            Volver arriba
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-50/15 transition-colors hover:border-accent">
              <ArrowUp className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

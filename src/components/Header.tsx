import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { easeOutExpo } from '../lib/motion';
import { PHONE_DISPLAY, LOGO_URL } from '../lib/content';

const links = [
  { label: 'Productos', href: '#productos' },
  { label: 'Herencia', href: '#herencia' },
  { label: 'Proyectos', href: '#galeria' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'FAQ', href: '#faq' },
];

const megaMenu = [
  { label: 'Endurance SPC', href: '#endurance-spc', desc: 'Núcleo de piedra · 100% impermeable' },
  { label: 'Urban SPC', href: '#urban-spc', desc: 'Diseño para interiores' },
  { label: 'EccoBamboo', href: '#eccobamboo', desc: 'Bambú sostenible de alta densidad' },
  { label: 'Eccoflooring', href: '#eccoflooring', desc: 'Madera de ingeniería natural' },
  { label: 'Foresta', href: '#foresta', desc: 'Roble Europeo multicapa' },
  { label: 'EccoDeck', href: '#eccodeck', desc: 'Deck WPC y bambú para exteriores' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: easeOutExpo, delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-all duration-700 ease-smooth ${
            scrolled
              ? 'bg-cream-50/85 backdrop-blur-xl border-b border-primary/10 shadow-soft'
              : 'bg-transparent'
          }`}
        >
          <nav className="container-lux flex items-center justify-between py-4 lg:py-5">
            {/* Logo */}
            <a href="#inicio" className="group flex items-center" aria-label="ECCOPISOS inicio">
              <img
                src={LOGO_URL}
                alt="ECCOPISOS"
                className="h-9 w-auto transition-transform duration-500 group-hover:scale-105 md:h-10"
              />
            </a>

            {/* Desktop nav */}
            <div className="hidden items-center gap-9 lg:flex">
              <div
                className="relative"
                onMouseEnter={() => setMega(true)}
                onMouseLeave={() => setMega(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-accent-600"
                  aria-expanded={mega}
                >
                  Productos
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mega ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {mega && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 12, scale: 0.98 }}
                      transition={{ duration: 0.35, ease: easeOutExpo }}
                      className="absolute left-1/2 top-full z-50 w-[440px] -translate-x-1/2 pt-4"
                    >
                      <div className="glass-card overflow-hidden rounded-4xl p-3">
                        <div className="px-4 py-3">
                          <span className="eyebrow">Catálogo</span>
                        </div>
                        <div className="grid gap-1">
                          {megaMenu.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              className="group flex items-start gap-3 rounded-3xl px-4 py-3 transition-colors hover:bg-secondary-100/60"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent transition-transform group-hover:scale-150" />
                              <span>
                                <span className="block font-serif text-lg text-primary">{item.label}</span>
                                <span className="block text-xs text-ink-muted">{item.desc}</span>
                              </span>
                            </a>
                          ))}
                        </div>
                        <div className="mt-2 flex items-center justify-between rounded-3xl bg-primary px-4 py-3 text-cream-50">
                          <span className="text-sm">Ver catálogo completo</span>
                          <a href="#productos" className="text-xs font-medium uppercase tracking-widest text-accent-300 link-underline">
                            Explorar →
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {links.slice(1).map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="link-underline text-sm font-medium text-ink transition-colors hover:text-accent-600"
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* CTA + phone */}
            <div className="hidden items-center gap-4 lg:flex">
              <a
                href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent-600"
              >
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
              <a href="#inicio" className="btn-primary !py-3 !px-6">
                Solicitar Cotización
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/15 text-primary transition-colors hover:bg-primary hover:text-cream-50 lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: easeOutExpo }}
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-cream-50 p-6 shadow-float"
            >
              <div className="flex items-center justify-between">
                <img src={LOGO_URL} alt="ECCOPISOS" className="h-9 w-auto" />
                <button
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/15 text-primary"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar menú"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-1">
                {megaMenu.map((m) => (
                  <a
                    key={m.href}
                    href={m.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-3xl px-4 py-4 font-serif text-2xl text-primary transition-colors hover:bg-secondary-100"
                  >
                    {m.label}
                    <ChevronDown className="h-5 w-5 -rotate-90 text-accent" />
                  </a>
                ))}
                <div className="my-2 h-px bg-primary/10" />
                {links.slice(1).map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-3xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-secondary-100"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`} className="flex items-center gap-2 text-primary">
                  <Phone className="h-4 w-4" />
                  {PHONE_DISPLAY}
                </a>
                <a href="#inicio" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Solicitar Cotización
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

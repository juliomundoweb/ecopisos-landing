import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from './Reveal';
import { easeOutExpo } from '../lib/motion';

const faqs = [
  {
    q: '¿Qué líneas de pisos ofrece ECCOPISOS?',
    a: 'Ofrecemos seis líneas: Endurance SPC, Urban SPC, EccoBamboo, Eccoflooring, Foresta y EccoDeck. Todas con control de calidad en origen y certificación, para proyectos residenciales y comerciales.',
  },
  {
    q: '¿Atienden proyectos B2B de constructoras e inmobiliarias?',
    a: 'Sí, el 85% de nuestros proyectos son B2B. Suministramos e instalamos paquetes completos para constructoras, arquitectos, ingenieros y desarrolladores, con cronograma de obra y servicio de postventa consolidado.',
  },
  {
    q: '¿Los pisos son resistentes a la humedad de Lima?',
    a: 'Sí. Nuestros pisos SPC son 100% impermeables y todas nuestras líneas son estables ante cambios de clima y humedad, una ventaja clave en la costa peruana.',
  },
  {
    q: '¿Ofrecen instalación profesional o solo suministro?',
    a: 'Ambos. Ofrecemos suministro e instalación profesional con equipo certificado, así como servicio de postventa. También podemos suministrar únicamente si tu obra cuenta con instaladores propios.',
  },
  {
    q: '¿Cuánto toma la instalación?',
    a: 'Un proyecto residencial promedio se completa entre 1 y 3 días hábiles. Para obras B2B entregamos un cronograma exacto tras la medición, coordinado con los hitos de tu proyecto.',
  },
  {
    q: '¿Cuentan con garantía y postventa?',
    a: 'Sí, todos nuestros pisos incluyen garantía del fabricante y respaldo de instalación. El servicio de postventa está consolidado y atendemos reclamos conforme al Registro INDECOPI.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-cream-100">
      <div className="container-lux">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal dir="left" className="lg:col-span-5">
            <span className="eyebrow">Preguntas Frecuentes</span>
            <h2 className="mt-4 font-serif text-section text-primary text-balance">
              Resolvemos tus <span className="italic text-accent-600">dudas</span>
            </h2>
            <p className="mt-5 text-ink-light text-pretty">
              Si tienes una pregunta que no encuentras aquí, escríbenos por WhatsApp
              y te responderemos a la brevedad.
            </p>
            <a href="#inicio" className="btn-primary mt-8">
              Hablar con un asesor
            </a>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal dir="right">
              <div className="divide-y divide-primary/10 overflow-hidden rounded-4xl border border-primary/10 bg-cream-50">
                {faqs.map((f, i) => {
                  const isOpen = open === i;
                  return (
                    <div key={i}>
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary-100/40 md:px-8"
                        aria-expanded={isOpen}
                      >
                        <span className={`font-serif text-xl transition-colors md:text-2xl ${isOpen ? 'text-accent-600' : 'text-primary'}`}>
                          {f.q}
                        </span>
                        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${isOpen ? 'border-accent bg-accent text-cream-50' : 'border-primary/20 text-primary'}`}>
                          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: easeOutExpo }}
                          >
                            <p className="px-6 pb-6 text-ink-light text-pretty md:px-8 md:pl-8">{f.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

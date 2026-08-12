import { motion } from 'framer-motion';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';
import { PEXELS } from '../lib/content';
import { easeOutExpo } from '../lib/motion';

const steps = [
  { n: '01', title: 'Consulta & Medición', desc: 'Visitamos tu obra o espacio, tomamos medidas precisas y entendemos los requisitos técnicos del proyecto.', img: PEXELS.install1 },
  { n: '02', title: 'Propuesta & Ficha Técnica', desc: 'Te presentamos opciones con muestras físicas, ficha técnica y cronograma coordinado con tu obra.', img: PEXELS.install2 },
  { n: '03', title: 'Suministro & Instalación', desc: 'Nuestro equipo certificado suministra e instala con precisión, limpieza y control de calidad en cada etapa.', img: PEXELS.install3 },
  { n: '04', title: 'Entrega & Postventa', desc: 'Revisión final, sello de garantía y servicio de postventa consolidado conforme a INDECOPI.', img: PEXELS.install4 },
];

export default function InstallationProcess() {
  return (
    <section id="proceso" className="section-pad bg-cream-100">
      <div className="container-lux">
        <Reveal className="mb-16 max-w-3xl">
          <span className="eyebrow">Proceso de Instalación</span>
          <h2 className="mt-4 font-serif text-section text-primary text-balance">
            Un proceso claro, de principio a <span className="italic text-accent-600">fin</span>
          </h2>
        </Reveal>

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-0 right-0 top-[88px] hidden h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent lg:block" />

          <StaggerGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="group relative">
                  {/* node */}
                  <div className="mb-6 flex items-center gap-4 lg:mb-8">
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-primary/15 bg-cream-50 font-serif text-2xl text-primary shadow-soft transition-all duration-500 group-hover:border-accent group-hover:text-accent-600">
                      {s.n}
                    </span>
                  </div>
                  <div className="overflow-hidden rounded-4xl bg-primary shadow-card">
                    <div className="relative h-44 overflow-hidden">
                      <motion.img
                        src={s.img}
                        alt={`${s.title} — ECCOPISOS`}
                        loading="lazy"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1, ease: easeOutExpo }}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl text-cream-50">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream-50/70 text-pretty">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}

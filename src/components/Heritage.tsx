import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Ruler, ShieldCheck, Headphones } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';
import { PEXELS, HERITAGE_SINCE, HERITAGE_EVOLVED, HERITAGE_YEARS } from '../lib/content';

const b2bStats = [
  { icon: Building2, value: '85%', label: 'de nuestros proyectos son B2B' },
  { icon: Ruler, value: 'Suministro + Instalación', label: 'paquetes completos para obras' },
  { icon: ShieldCheck, value: 'Control de calidad', label: 'en origen, marca propia' },
  { icon: Headphones, value: 'Postventa', label: 'servicio consolidado' },
];

export default function Heritage() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream-200 section-pad">
      <div className="container-lux">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image */}
          <Reveal dir="left" className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-5xl shadow-card">
              <motion.img
                style={{ y }}
                src={PEXELS.heritage}
                alt="Trayectoria maderera ECCOPISOS desde 1950"
                loading="lazy"
                className="h-[460px] w-full object-cover md:h-[560px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
              {/* floating year badge */}
              <div className="absolute bottom-6 left-6 glass-card rounded-4xl px-6 py-4">
                <p className="font-serif text-4xl text-primary">1950</p>
                <p className="text-xs uppercase tracking-widest text-ink-muted">Inicio maderero</p>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow">Nuestra Herencia</span>
              <h2 className="mt-4 font-serif text-section text-primary text-balance">
                {HERITAGE_YEARS} años de oficio maderero, <span className="italic text-accent-600">evolución</span> desde {HERITAGE_EVOLVED}
              </h2>
              <p className="mt-6 text-lg text-ink-light text-pretty">
                Desde {HERITAGE_SINCE}, hemos sido parte del negocio maderero en el Perú.
                A partir de {HERITAGE_EVOLVED} evolucionamos hacia soluciones modernas,
                duraderas y eficientes: pisos de calidad certificada, diseño innovador,
                excelente acabado y estabilidad ante clima y humedad.
              </p>
              <p className="mt-4 text-ink-light text-pretty">
                Hoy somos el aliado técnico de constructoras, arquitectos e ingenieros
                que buscan revestimientos confiables con respaldo de marca propia.
              </p>
            </Reveal>

            <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {b2bStats.map((s) => (
                <StaggerItem key={s.label}>
                  <div className="group flex items-start gap-4 rounded-3xl border border-primary/10 bg-cream-50 p-5 transition-colors duration-500 hover:border-accent/40">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary transition-colors duration-500 group-hover:bg-accent group-hover:text-cream-50">
                      <s.icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="font-serif text-lg text-primary">{s.value}</p>
                      <p className="text-sm text-ink-muted">{s.label}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';
import { PEXELS } from '../lib/content';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Arq. María Fernanda Cárdenas',
    role: 'Estudio de Arquitectura · Lima',
    img: PEXELS.testimonial1,
    text: 'ECCOPISOS es nuestro aliado técnico en revestimientos. El control de calidad en origen y la estabilidad de sus pisos SPC nos dan la confianza para especificarlos en cada proyecto residencial y comercial.',
  },
  {
    name: 'Ing. Rodrigo Salazar',
    role: 'Jefe de Obra · Constructora',
    img: PEXELS.testimonial2,
    text: 'Para nuestros proyectos comerciales necesitamos suministro e instalación en paquete. ECCOPISOS entrega ambos con cronograma y postventa. El acabado y la rapidez de instalación son sobresalientes.',
  },
  {
    name: 'Valeria Mendoza',
    role: 'Desarrolladora Inmobiliaria · Surco',
    img: PEXELS.testimonial3,
    text: 'Especificamos Foresta y EccoDeck en nuestros proyectos de gama alta. La estabilidad ante la humedad de Lima y el respaldo de marca propia marcan la diferencia frente a la competencia de precio.',
  },
];

const stats = [
  { value: 70, suffix: '+', label: 'años de trayectoria maderera' },
  { value: 500, suffix: '+', label: 'obras y proyectos completados' },
  { value: 85, suffix: '%', label: 'de proyectos B2B' },
  { value: 100, suffix: '%', label: 'calidad certificada en origen' },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="section-pad bg-primary relative overflow-hidden">
      <div className="absolute -top-32 left-1/3 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="container-lux relative">
        <Reveal dir="left" className="mb-14 max-w-3xl">
          <span className="eyebrow !text-accent-300">Testimonios</span>
          <h2 className="mt-4 font-serif text-section text-cream-50 text-balance">
            Lo que dicen quienes <span className="italic text-secondary">confían</span> en nosotros
          </h2>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="group h-full rounded-5xl border border-cream-50/10 bg-cream-50/5 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-accent/30 hover:bg-cream-50/10">
                <Quote className="h-8 w-8 text-accent-300/60" />
                <blockquote className="mt-5 font-serif text-xl leading-relaxed text-cream-50/90 text-pretty md:text-2xl">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4">
                  <img src={t.img} alt={t.name} loading="lazy" className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/40" />
                  <div>
                    <span className="block font-medium text-cream-50">{t.name}</span>
                    <span className="block text-xs text-cream-50/60">{t.role}</span>
                  </div>
                </figcaption>
                <div className="mt-4 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Stats counters */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-cream-50/10 pt-12 md:grid-cols-4">
          {stats.map((s) => (
            <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-5xl text-cream-50 md:text-6xl"
      >
        {display}
        <span className="text-accent-300">{suffix}</span>
      </motion.p>
      <p className="mt-2 text-sm text-cream-50/60">{label}</p>
    </div>
  );
}

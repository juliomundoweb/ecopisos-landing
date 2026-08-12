import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { PEXELS } from '../lib/content';

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative overflow-hidden bg-primary py-32 md:py-44">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={PEXELS.cta} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-25" loading="lazy" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/75 to-primary-900/85" />
      <div className="absolute inset-0 grain-overlay opacity-[0.06]" />

      <div className="container-lux relative">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="eyebrow !text-accent-300 justify-center">Comencemos tu proyecto</span>
          <h2 className="mt-6 font-serif text-display text-cream-50 text-balance">
            ¿Listo para transformar tu <span className="italic text-secondary">espacio</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-cream-50/80 text-pretty">
            Solicita una cotización gratuita y recibe asesoría personalizada de nuestros
            especialistas. Respuesta en menos de 24 horas.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#inicio" className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium text-primary transition-all duration-500 ease-smooth hover:bg-accent-400 hover:shadow-glow">
              Solicitar Cotización
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <a
              href="#productos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/40 px-8 py-4 text-sm font-medium text-cream-50 backdrop-blur-md transition-all duration-500 ease-smooth hover:border-cream-50 hover:bg-cream-50/10"
            >
              Ver Catálogo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

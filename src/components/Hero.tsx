import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Star, Sparkles, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { PEXELS, HERITAGE_YEARS, EMAIL, PHONE_DISPLAY, ADDRESS } from '../lib/content';
import { easeOutExpo } from '../lib/motion';
import QuoteFormCard from './QuoteFormCard';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(px * 18);
    my.set(py * 18);
  };

  return (
    <section
      ref={ref}
      id="inicio"
      onMouseMove={handleMouse}
      className="relative min-h-[100svh] w-full overflow-hidden pt-28 pb-12 md:pb-20"
      aria-label="ECCOPISOS — pisos premium"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={PEXELS.heroLiving}
          alt="Sala de estar premium con pisos de madera ECCOPISOS"
          className="h-full w-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
      </motion.div>

      {/* Gradient overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-primary-900/75 via-primary-800/50 to-primary-900/85"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 via-primary-900/20 to-primary-900/40" />
      <div className="absolute inset-0 grain-overlay opacity-[0.08] mix-blend-overlay" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-lux relative z-10 flex min-h-[calc(100svh-7rem)] items-center"
      >
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: headline */}
          <motion.div
            style={{ x: sx, y: sy }}
            className="lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: easeOutExpo }}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <span className="flex items-center gap-1.5 rounded-full border border-cream-50/30 bg-cream-50/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cream-50 backdrop-blur-md">
                <Star className="h-3 w-3 fill-accent text-accent" />
                Pisos de Alta Gama · Perú
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent-300 backdrop-blur-md">
                <Sparkles className="h-3 w-3" />
                +{HERITAGE_YEARS} años de trayectoria
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 1, ease: easeOutExpo }}
              className="font-serif text-hero text-cream-50 text-balance lg:text-display"
            >
              Transformamos espacios con pisos que combinan{' '}
              <span className="italic text-secondary">diseño</span>, resistencia y{' '}
              <span className="italic text-secondary">elegancia</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.9, ease: easeOutExpo }}
              className="mt-6 max-w-xl text-base leading-relaxed text-cream-50/85 text-pretty md:text-lg"
            >
              Especialistas en pisos SPC, bambú, madera de ingeniería y deck para
              constructoras, arquitectos, desarrolladores y proyectos residenciales en todo el Perú.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.9, ease: easeOutExpo }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a href="#productos" className="group inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/40 bg-cream-50/5 px-7 py-3.5 text-sm font-medium text-cream-50 backdrop-blur-md transition-all duration-500 ease-smooth hover:border-cream-50 hover:bg-cream-50/10">
                Ver Catálogo
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Contact info row */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.9, ease: easeOutExpo }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-cream-50/15 pt-6 text-sm text-cream-50/70"
            >
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent-300" />
                Lima, Perú
              </span>
              <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`} className="flex items-center gap-2 transition-colors hover:text-accent-300">
                <Phone className="h-4 w-4 text-accent-300" />
                {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 transition-colors hover:text-accent-300">
                <Mail className="h-4 w-4 text-accent-300" />
                {EMAIL}
              </a>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent-300" />
                Lun – Sáb · 9–18h
              </span>
            </motion.div>
          </motion.div>

          {/* Right: floating glass form card */}
          <motion.div
            initial={{ opacity: 0, y: 60, x: 30 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.9, duration: 1.1, ease: easeOutExpo }}
            style={{ x: sx, y: sy }}
            className="lg:col-span-5"
          >
            <div className="glass-card rounded-5xl p-6 md:p-8">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-2xl text-cream-50 md:text-3xl">Solicita tu cotización</h2>
                  <p className="mt-1 text-sm text-cream-50/70">Respuesta en menos de 24 horas.</p>
                </div>
                <span className="flex h-3 w-3 items-center justify-center">
                  <span className="absolute h-3 w-3 animate-ping rounded-full bg-accent/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
              </div>
              <QuoteFormCard variant="glass" compact />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex flex-col items-center gap-2 text-cream-50/70">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="relative h-12 w-px overflow-hidden bg-cream-50/30">
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-x-0 h-1/2 bg-accent"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

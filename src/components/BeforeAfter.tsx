import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';
import { Reveal } from './Reveal';
import { PEXELS } from '../lib/content';

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  return (
    <section className="section-pad bg-cream-200">
      <div className="container-lux">
        <Reveal className="mb-12 max-w-3xl">
          <span className="eyebrow">Antes / Después</span>
          <h2 className="mt-4 font-serif text-section text-primary text-balance">
            La diferencia se <span className="italic text-accent-600">siente</span>
          </h2>
          <p className="mt-5 text-lg text-ink-light text-pretty">
            Arrastra el control deslizante y descubre cómo un piso ECCOPISOS
            transforma por completo un espacio.
          </p>
        </Reveal>

        <Reveal dir="scale">
          <div
            ref={containerRef}
            className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-5xl bg-primary shadow-card md:aspect-[16/8]"
            onMouseDown={(e) => { dragging.current = true; update(e.clientX); }}
            onMouseMove={(e) => dragging.current && update(e.clientX)}
            onMouseUp={() => (dragging.current = false)}
            onMouseLeave={() => (dragging.current = false)}
            onTouchStart={(e) => { dragging.current = true; update(e.touches[0].clientX); }}
            onTouchMove={(e) => dragging.current && update(e.touches[0].clientX)}
            onTouchEnd={() => (dragging.current = false)}
            role="slider"
            aria-label="Comparación antes y después"
            aria-valuenow={Math.round(pos)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {/* After (full) */}
            <img src={PEXELS.after} alt="Después — piso ECCOPISOS" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <span className="absolute left-5 top-5 rounded-full bg-primary/80 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cream-50 backdrop-blur-md">
              Después
            </span>

            {/* Before (clipped) */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
              <img
                src={PEXELS.before}
                alt="Antes — espacio original"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ width: `${(100 / pos) * 100}%`, maxWidth: 'none' }}
                loading="lazy"
              />
              <span className="absolute left-5 top-5 rounded-full bg-ink/80 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cream-50 backdrop-blur-md">
                Antes
              </span>
            </div>

            {/* Handle */}
            <motion.div
              className="absolute inset-y-0 z-10 flex items-center"
              style={{ left: `${pos}%`, x: '-50%' }}
            >
              <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-cream-50/80" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-cream-50 bg-primary text-cream-50 shadow-float">
                <MoveHorizontal className="h-6 w-6" />
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

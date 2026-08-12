import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { Reveal } from './Reveal';
import { PEXELS } from '../lib/content';
import { easeOutExpo } from '../lib/motion';

const projects = [
  { img: PEXELS.gallery1, title: 'Terraza Costa Verde', cat: 'Deck Exterior', size: 'lg' },
  { img: PEXELS.gallery2, title: 'Sala Residencial San Isidro', cat: 'Pisos SPC', size: 'md' },
  { img: PEXELS.gallery3, title: 'Showroom Miraflores', cat: 'Laminados', size: 'md' },
  { img: PEXELS.gallery4, title: 'Cocina Premium Barranco', cat: 'Vinílicos', size: 'md' },
  { img: PEXELS.gallery5, title: 'Patio Exterior Surco', cat: 'Pisos Exteriores', size: 'md' },
  { img: PEXELS.gallery6, title: 'Loft Industrial Lima', cat: 'Laminados', size: 'lg' },
];

const filters = ['Todos', 'SPC', 'Vinílicos', 'Laminados', 'Deck', 'Exteriores'];

export default function ProjectGallery() {
  const [active, setActive] = useState('Todos');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = projects.filter((p) => {
    if (active === 'Todos') return true;
    return p.cat.toLowerCase().includes(active.toLowerCase().replace('deck', 'deck'));
  });

  return (
    <section id="galeria" className="section-pad bg-cream-100">
      <div className="container-lux">
        <Reveal className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Galería de Proyectos</span>
            <h2 className="mt-4 font-serif text-section text-primary text-balance">
              Espacios transformados con <span className="italic text-accent-600">carácter</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-500 ease-smooth ${
                  active === f
                    ? 'bg-primary text-cream-50 shadow-soft'
                    : 'border border-primary/15 text-ink hover:border-primary/40'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.button
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: easeOutExpo }}
                onClick={() => setLightbox(i)}
                className={`group relative overflow-hidden rounded-4xl bg-primary text-left ${
                  p.size === 'lg' ? 'sm:col-span-2' : ''
                }`}
              >
                <img
                  src={p.img}
                  alt={`${p.title} — ${p.cat}`}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-110 sm:h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/85 via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-300">{p.cat}</span>
                    <h3 className="mt-1 font-serif text-2xl text-cream-50">{p.title}</h3>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream-50/15 text-cream-50 backdrop-blur-md transition-all duration-500 group-hover:bg-accent group-hover:text-primary">
                    <Plus className="h-5 w-5" />
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-primary-900/90 p-6 backdrop-blur-md"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-cream-50/20"
              aria-label="Cerrar"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.figure
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, ease: easeOutExpo }}
              className="max-h-[85vh] max-w-5xl overflow-hidden rounded-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={visible[lightbox].img} alt={visible[lightbox].title} className="max-h-[85vh] w-full object-cover" />
              <figcaption className="bg-primary px-6 py-5 text-cream-50">
                <span className="text-xs uppercase tracking-[0.2em] text-accent-300">{visible[lightbox].cat}</span>
                <h3 className="mt-1 font-serif text-2xl">{visible[lightbox].title}</h3>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

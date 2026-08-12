import { Reveal } from './Reveal';
import { MapPin } from 'lucide-react';
import { ADDRESS } from '../lib/content';

export default function GoogleMap() {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
  return (
    <section className="bg-cream-200 pb-24 md:pb-32">
      <div className="container-lux">
        <Reveal dir="scale">
          <div className="overflow-hidden rounded-5xl border border-primary/10 shadow-card">
            <div className="flex flex-col md:flex-row">
              <div className="flex items-center gap-3 bg-primary px-6 py-5 md:px-8 md:w-80 md:py-0">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/15 text-accent-300">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-cream-50/60">Visítanos</span>
                  <span className="block text-sm text-cream-50">{ADDRESS}</span>
                </div>
              </div>
              <div className="relative h-80 flex-1 md:h-[420px]">
                <iframe
                  title="Ubicación de ECCOPISOS en Lima, Perú"
                  src={src}
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

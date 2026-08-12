import { motion } from 'framer-motion';
import { StaggerGroup, StaggerItem } from './Reveal';

const companies = ['Ave Fénix', 'Costa Verde', 'Innova Hogar', 'Grupo Atlas', 'Vértice', 'Magna'];

export default function TrustedCompanies() {
  return (
    <section className="border-y border-primary/8 bg-cream-100 py-12 md:py-16" aria-label="Empresas que confían en ECCOPISOS">
      <div className="container-lux">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center text-xs font-medium uppercase tracking-[0.3em] text-ink-muted"
        >
          Empresas y estudios que confían en nosotros
        </motion.p>
        <StaggerGroup className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16">
          {companies.map((c) => (
            <StaggerItem key={c}>
              <span className="font-serif text-2xl text-primary/35 transition-colors duration-500 hover:text-primary/70 md:text-3xl">
                {c}
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

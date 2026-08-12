import { ShieldCheck, BadgeCheck, Sparkles, Wrench, Leaf, Building2 } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';

const benefits = [
  { icon: ShieldCheck, title: 'Control de Calidad en Origen', desc: 'Marca propia con control de calidad en cada lote. Productos seleccionados por desempeño y durabilidad.' },
  { icon: BadgeCheck, title: 'Certificación Internacional', desc: 'Materiales con certificación de calidad 100%, estables ante cambios de clima y humedad.' },
  { icon: Sparkles, title: 'Acabados Modernos', desc: 'Diseño innovador con excelente acabado. Estéticas contemporáneas que elevan cada proyecto.' },
  { icon: Wrench, title: 'Instalación + Postventa', desc: 'Suministro e instalación profesional con servicio de postventa consolidado. Acompañamiento total.' },
  { icon: Leaf, title: 'Sostenibles y Renovables', desc: 'Bambú y WPC 100%, materiales renovables. Compromiso real con el medio ambiente.' },
  { icon: Building2, title: 'Enfoque B2B Estructurado', desc: 'Especialización técnica para constructoras, arquitectos, ingenieros y desarrolladores.' },
];

export default function Benefits() {
  return (
    <section className="section-pad bg-primary relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-[0.05]" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container-lux relative">
        <Reveal dir="left" className="mb-16 max-w-3xl">
          <span className="eyebrow !text-accent-300">Por qué ECCOPISOS</span>
          <h2 className="mt-4 font-serif text-section text-cream-50 text-balance">
            La propuesta de valor que respalda tu <span className="italic text-secondary">obra</span>
          </h2>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-5xl border border-cream-50/10 bg-cream-50/5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <StaggerItem key={b.title}>
              <div className="group h-full bg-primary/40 p-8 transition-colors duration-500 hover:bg-primary-600 md:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-3xl bg-accent/15 text-accent-300 transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-primary">
                  <b.icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-serif text-2xl text-cream-50">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-50/70 text-pretty">{b.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

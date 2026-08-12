import { motion } from 'framer-motion';
import { ArrowUpRight, Droplets, Leaf, Layers, TreePine, Sun } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';
import { PEXELS } from '../lib/content';
import { easeOutExpo } from '../lib/motion';

const products = [
  {
    id: 'endurance-spc',
    name: 'Endurance SPC',
    tagline: 'Núcleo de piedra · 100% impermeable',
    desc: 'Pisos de núcleo compuesto de piedra caliza de alta densidad. Extremadamente resistentes, estables e impermeables. Ideal para alto tránsito comercial.',
    img: PEXELS.spc,
    icon: Droplets,
    span: 'lg:col-span-7',
  },
  {
    id: 'urban-spc',
    name: 'Urban SPC',
    tagline: 'Diseño para interiores',
    desc: 'Línea SPC pensada para espacios interiores residenciales. Combina resistencia SPC con acabados contemporáneos.',
    img: PEXELS.gallery4,
    icon: Layers,
    span: 'lg:col-span-5',
  },
  {
    id: 'eccobamboo',
    name: 'EccoBamboo',
    tagline: 'Fibras naturales compactadas',
    desc: 'Pisos de bambú de alta densidad, sostenible y renovable. Para uso residencial y comercial moderado.',
    img: PEXELS.bamboo,
    icon: Leaf,
    span: 'lg:col-span-5',
  },
  {
    id: 'eccoflooring',
    name: 'Eccoflooring',
    tagline: 'Ingeniería · Madera fina natural',
    desc: 'Pisos estructurados de ingeniería. Eficiencia en el uso de materia prima con la calidez de la madera fina natural.',
    img: PEXELS.engineering,
    icon: Layers,
    span: 'lg:col-span-7',
  },
  {
    id: 'foresta',
    name: 'Foresta',
    tagline: 'Roble Europeo multicapa',
    desc: 'Piso estructurado de Roble Europeo. Base multicapa más estable que madera sólida, acabado en poliuretano o aceites naturales.',
    img: PEXELS.foresta,
    icon: TreePine,
    span: 'lg:col-span-7',
  },
  {
    id: 'eccodeck',
    name: 'EccoDeck',
    tagline: 'WPC y Bambú 100%',
    desc: 'Tarimas para exteriores en WPC y bambú 100%. Terrazas, piscinas y áreas exteriores con resistencia climática total.',
    img: PEXELS.deck,
    icon: Sun,
    span: 'lg:col-span-5',
  },
];

export default function Products() {
  return (
    <section id="productos" className="section-pad relative overflow-hidden bg-cream-100">
      <div className="container-lux">
        <Reveal className="mb-16 max-w-3xl">
          <span className="eyebrow">Nuestras Líneas</span>
          <h2 className="mt-4 font-serif text-section text-primary text-balance">
            Seis líneas de pisos seleccionadas por <span className="italic text-accent-600">desempeño</span> y tendencia
          </h2>
          <p className="mt-5 text-lg text-ink-light text-pretty">
            Desde núcleo SPC de alta densidad hasta bambú sostenible y madera de ingeniería.
            Productos con control de calidad en origen y certificación internacional.
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {products.map((p) => (
            <StaggerItem key={p.id} className={p.span}>
              <ProductCard {...p} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function ProductCard({
  name,
  tagline,
  desc,
  img,
  icon: Icon,
  id,
}: (typeof products)[number]) {
  return (
    <motion.a
      href={`#${id}`}
      whileHover="hover"
      className="group relative block h-full min-h-[360px] overflow-hidden rounded-5xl bg-primary shadow-card"
    >
      <motion.img
        src={img}
        alt={`${name} — ECCOPISOS`}
        loading="lazy"
        variants={{ hover: { scale: 1.08 } }}
        transition={{ duration: 1.2, ease: easeOutExpo }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/30 to-transparent transition-opacity duration-500 group-hover:from-primary-900/95" />

      <div className="relative flex h-full flex-col justify-end p-7 md:p-9">
        <div className="mb-4 flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-cream-50/30 bg-cream-50/10 text-cream-50 backdrop-blur-md">
            <Icon className="h-4 w-4" />
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-cream-50/70">{tagline}</span>
        </div>
        <h3 className="font-serif text-3xl text-cream-50 md:text-4xl">{name}</h3>
        <p className="mt-2 max-w-md text-sm text-cream-50/75 text-pretty">{desc}</p>

        <motion.div
          variants={{ hover: { opacity: 1, y: 0 } }}
          initial={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.4, ease: easeOutExpo }}
          className="mt-5 flex items-center gap-2 text-sm font-medium text-accent-300"
        >
          Solicitar ficha técnica
          <ArrowUpRight className="h-4 w-4" />
        </motion.div>
      </div>
    </motion.a>
  );
}

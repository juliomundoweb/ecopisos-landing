import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Send, Loader2, Building2, Home } from 'lucide-react';

const b2bProducts = ['Endurance SPC', 'Urban SPC', 'EccoBamboo', 'Eccoflooring', 'Foresta', 'EccoDeck', 'Suministro + Instalación', 'No estoy seguro'];
const b2cProducts = ['Endurance SPC', 'Urban SPC', 'EccoBamboo', 'Eccoflooring', 'Foresta', 'EccoDeck', 'No estoy seguro'];

export interface QuoteFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  message: string;
  segment: 'b2b' | 'b2c';
}

interface QuoteFormCardProps {
  variant?: 'light' | 'glass';
  compact?: boolean;
  onSuccess?: (data: QuoteFormData) => void;
}

export default function QuoteFormCard({ variant = 'light', compact = false, onSuccess }: QuoteFormCardProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [segment, setSegment] = useState<'b2b' | 'b2c'>('b2b');
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', product: b2bProducts[0], message: '' });

  const products = segment === 'b2b' ? b2bProducts : b2cProducts;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      onSuccess?.({ ...form, segment });
    }, 1200);
  };

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const switchSegment = (s: 'b2b' | 'b2c') => {
    setSegment(s);
    setForm((f) => ({ ...f, company: s === 'b2c' ? '' : f.company, product: (s === 'b2b' ? b2bProducts : b2cProducts)[0] }));
  };

  const reset = () => {
    setStatus('idle');
    setForm({ name: '', company: '', email: '', phone: '', product: products[0], message: '' });
  };

  const isGlass = variant === 'glass';
  const inputClass = isGlass
    ? 'w-full rounded-2xl border border-cream-50/25 bg-cream-50/10 px-4 py-3 text-cream-50 placeholder:text-cream-50/40 transition-all duration-300 ease-smooth focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 backdrop-blur-sm'
    : 'lux-input';
  const labelClass = isGlass ? 'mb-2 block text-sm font-medium text-cream-50/90' : 'mb-2 block text-sm font-medium text-primary';
  const toggleBase = isGlass ? 'text-cream-50/70 hover:text-cream-50' : 'text-ink hover:text-primary';
  const toggleActive = isGlass ? 'bg-accent text-primary shadow-soft' : 'bg-primary text-cream-50 shadow-soft';
  const toggleBg = isGlass ? 'bg-cream-50/10' : 'bg-cream-200';
  const successBg = isGlass ? 'bg-accent/15 text-accent-300' : 'bg-accent/15 text-accent';
  const successTitle = isGlass ? 'text-cream-50' : 'text-primary';
  const successText = isGlass ? 'text-cream-50/80' : 'text-ink-light';
  const legalText = isGlass ? 'text-cream-50/50' : 'text-ink-muted';
  const btnClass = isGlass
    ? 'w-full group disabled:opacity-70 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-500 ease-smooth bg-accent text-primary hover:bg-accent-400 hover:shadow-glow'
    : 'btn-primary w-full group disabled:opacity-70';

  return (
    <div>
      {/* Segment toggle */}
      <div className={`mb-6 flex rounded-full p-1.5 ${toggleBg}`}>
        <button
          type="button"
          onClick={() => switchSegment('b2b')}
          className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-500 ease-smooth ${segment === 'b2b' ? toggleActive : toggleBase}`}
        >
          <Building2 className="h-4 w-4" />
          Proyecto / Empresa
        </button>
        <button
          type="button"
          onClick={() => switchSegment('b2c')}
          className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-500 ease-smooth ${segment === 'b2c' ? toggleActive : toggleBase}`}
        >
          <Home className="h-4 w-4" />
          Hogar / Personal
        </button>
      </div>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`flex flex-col items-center justify-center text-center ${compact ? 'min-h-[280px]' : 'min-h-[360px]'}`}
          >
            <span className={`flex ${compact ? 'h-16 w-16' : 'h-20 w-20'} items-center justify-center rounded-full ${successBg}`}>
              <Check className={compact ? 'h-8 w-8' : 'h-10 w-10'} strokeWidth={2} />
            </span>
            <h3 className={`mt-6 font-serif ${compact ? 'text-2xl' : 'text-3xl'} ${successTitle}`}>¡Gracias, {form.name || 'amigo'}!</h3>
            <p className={`mt-3 max-w-md ${successText}`}>
              Hemos recibido tu solicitud{form.company ? ` de ${form.company}` : ''}. Un asesor de ECCOPISOS te contactará
              {segment === 'b2b' ? ' para coordinar la visita a obra' : ' en menos de 24 horas'}.
            </p>
            <button onClick={reset} className={`mt-8 ${isGlass ? 'inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/40 bg-cream-50/10 px-6 py-3 text-sm font-medium text-cream-50 backdrop-blur-md transition-all duration-500 ease-smooth hover:border-cream-50 hover:bg-cream-50/20' : 'btn-secondary'}`}>
              Enviar otra solicitud
            </button>
          </motion.div>
        ) : (
          <motion.form
            key={`form-${segment}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <Field label="Nombre" htmlFor={`name-${variant}`} labelClass={labelClass}>
              <input id={`name-${variant}`} required value={form.name} onChange={update('name')} placeholder="Tu nombre" className={inputClass} />
            </Field>
            {segment === 'b2b' ? (
              <Field label="Empresa" htmlFor={`company-${variant}`} labelClass={labelClass}>
                <input id={`company-${variant}`} value={form.company} onChange={update('company')} placeholder="Razón social" className={inputClass} />
              </Field>
            ) : (
              <Field label="Teléfono" htmlFor={`phone-${variant}`} labelClass={labelClass}>
                <input id={`phone-${variant}`} type="tel" required value={form.phone} onChange={update('phone')} placeholder="+51 999 999 999" className={inputClass} />
              </Field>
            )}
            {segment === 'b2b' && (
              <Field label="Teléfono" htmlFor={`phone-b2b-${variant}`} labelClass={labelClass}>
                <input id={`phone-b2b-${variant}`} type="tel" required value={form.phone} onChange={update('phone')} placeholder="+51 999 999 999" className={inputClass} />
              </Field>
            )}
            <Field label="Email" htmlFor={`email-${variant}`} labelClass={labelClass} className="sm:col-span-2">
              <input id={`email-${variant}`} type="email" required value={form.email} onChange={update('email')} placeholder="tucorreo@email.com" className={inputClass} />
            </Field>
            <Field label={segment === 'b2b' ? 'Línea de interés' : 'Producto'} htmlFor={`product-${variant}`} labelClass={labelClass} className="sm:col-span-2">
              <select id={`product-${variant}`} value={form.product} onChange={update('product')} className={inputClass}>
                {products.map((p) => <option key={p} className={isGlass ? 'text-ink' : ''}>{p}</option>)}
              </select>
            </Field>
            {!compact && (
              <Field label={segment === 'b2b' ? 'Sobre la obra' : 'Sobre el proyecto'} htmlFor={`message-${variant}`} labelClass={labelClass} className="sm:col-span-2">
                <textarea id={`message-${variant}`} rows={3} value={form.message} onChange={update('message')} placeholder={segment === 'b2b' ? 'Área, tipo de proyecto, plazos...' : 'Área, tipo de espacio...'} className={`${inputClass} resize-none`} />
              </Field>
            )}
            <div className="sm:col-span-2">
              <button type="submit" disabled={status === 'loading'} className={btnClass}>
                {status === 'loading' ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Enviando...</>
                ) : (
                  <>Solicitar cotización <Send className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" /></>
                )}
              </button>
              <p className={`mt-3 text-center text-xs ${legalText}`}>
                Ley N° 29733 · Protección de Datos.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, htmlFor, children, className, labelClass }: { label: string; htmlFor: string; children: React.ReactNode; className?: string; labelClass: string }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className={labelClass}>{label}</label>
      {children}
    </div>
  );
}

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MSG } from '../lib/content';

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-primary px-4 py-4 text-cream-50 shadow-float"
    >
      <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping opacity-20" />
      <span className="relative flex h-6 w-6 items-center justify-center">
        <MessageCircle className="h-6 w-6" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-500 ease-smooth group-hover:max-w-[160px] group-hover:opacity-100">
        Escríbenos
      </span>
    </motion.a>
  );
}

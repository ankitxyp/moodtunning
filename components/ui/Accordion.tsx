'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4 w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <button
              className="w-full px-6 py-4 flex items-center justify-between focus-visible:outline-none focus-visible:bg-white/10 transition-colors"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="font-bold text-left">{item.question}</span>
              <ChevronDown
                size={20}
                className={`text-pink-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

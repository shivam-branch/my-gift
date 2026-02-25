'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const things = [
  { text: "I'm proud of you.", delay: 0 },
  { text: "I admire you.", delay: 0.5 },
  { text: "I feel lucky every day.", delay: 1 },
  { text: "You make life softer.", delay: 1.5 },
  { text: "Thank you for choosing me.", delay: 2 },
  { text: "You are my home.", delay: 2.5 },
  { text: "I love who I become when I'm with you.", delay: 3 },
  { text: "Your happiness is my priority.", delay: 3.5 },
];

export default function ThingsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <motion.div
      ref={pageRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center py-12 px-6 pb-32"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #fff5f7 50%, #fff1f4 100%)',
      }}
    >
      <div className="max-w-lg mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-16"
        >
          <motion.span
            className="text-5xl mb-6 block"
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💭
          </motion.span>
          <h1 
            className="text-3xl md:text-4xl text-rose-600 mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Things I Never Say Enough
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto max-w-xs"
          />
        </motion.div>

        {/* Things list */}
        <div className="space-y-8">
          {things.map((thing, index) => (
            <motion.div
              key={thing.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: thing.delay, duration: 0.8 }}
            >
              <motion.p
                className="text-xl md:text-2xl text-rose-700"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
                whileHover={{ scale: 1.05, color: '#e11d48' }}
              >
                {thing.text}
              </motion.p>
              
              {/* Subtle divider */}
              {index < things.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ delay: thing.delay + 0.4 }}
                  className="flex justify-center mt-6"
                >
                  <span className="text-rose-300 text-sm">✦</span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer signature */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
          className="mt-16"
        >
          <motion.p
            className="text-2xl text-rose-500"
            style={{ fontFamily: 'Dancing Script, cursive' }}
            animate={{ 
              textShadow: [
                '0 0 10px rgba(244, 63, 94, 0)',
                '0 0 20px rgba(244, 63, 94, 0.3)',
                '0 0 10px rgba(244, 63, 94, 0)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            — Your forever person 💕
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}

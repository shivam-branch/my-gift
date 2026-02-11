'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Letter {
  trigger: string;
  emoji: string;
  message: string;
  color: string;
}

const letters: Letter[] = [
  {
    trigger: "Open when you're sad",
    emoji: '🌧️',
    message: "Close your eyes and remember, you are loved more than you know. I'm here, always. Every tear you shed, I wish I could wipe away. But know this - after every storm comes a rainbow, and you, my love, are that rainbow in my life. Take a deep breath. You've got this. We've got this.",
    color: 'from-blue-400 to-indigo-500',
  },
  {
    trigger: "Open when you doubt yourself",
    emoji: '💪',
    message: "You are stronger than you think, and I'm always on your team. I've watched you overcome so much, face challenges head-on, and emerge even more beautiful. Don't let anyone, including yourself, dim your light. You are capable, you are worthy, and you are absolutely incredible.",
    color: 'from-amber-400 to-orange-500',
  },
  {
    trigger: "Open when you miss me",
    emoji: '💕',
    message: "Distance can't reduce what lives in the heart. Close your eyes and feel my arms around you. I'm thinking of you right now, wherever you are. Every moment apart only makes our time together more precious. Hold this close - my heart is with you, always.",
    color: 'from-rose-400 to-pink-500',
  },
  {
    trigger: "Open when you need motivation",
    emoji: '🌟',
    message: "Remember why you started. Remember the fire in your eyes when you talked about your dreams. That fire is still there - it never left. You inspire me every single day with your dedication and passion. Now go show the world what I already know - you're extraordinary.",
    color: 'from-yellow-400 to-amber-500',
  },
  {
    trigger: "Open when you can't sleep",
    emoji: '🌙',
    message: "Close your eyes, my love. Imagine I'm right there beside you, whispering how much I love you. Let go of the worries of today - they can wait until tomorrow. For now, just breathe, relax, and drift into dreams where I'll be waiting for you. Sweet dreams, always.",
    color: 'from-indigo-400 to-purple-500',
  },
];

export default function LettersPage() {
  const [openLetter, setOpenLetter] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-12 px-6 pb-32"
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <motion.span
            className="text-6xl mb-4 block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💌
          </motion.span>
          <h1 
            className="text-4xl gradient-text mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Open When...
          </h1>
          <p 
            className="text-xl text-rose-600"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Digital letters filled with love, for whenever you need them
          </p>
        </motion.div>

        {/* Letters Grid */}
        <div className="grid gap-4">
          {letters.map((letter, index) => (
            <motion.div
              key={letter.trigger}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 * index }}
            >
              <motion.button
                onClick={() => setOpenLetter(index)}
                className="w-full text-left"
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="romantic-card flex items-center gap-4 group">
                  {/* Envelope icon */}
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${letter.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-2xl">{letter.emoji}</span>
                  </motion.div>

                  {/* Letter trigger */}
                  <div className="flex-1">
                    <p 
                      className="text-lg text-rose-700 group-hover:text-rose-500 transition-colors"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {letter.trigger}
                    </p>
                    <p 
                      className="text-sm text-rose-400"
                      style={{ fontFamily: 'Dancing Script, cursive' }}
                    >
                      Tap to open 💕
                    </p>
                  </div>

                  {/* Envelope seal */}
                  <motion.div
                    className="text-3xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    ✉️
                  </motion.div>
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Letter Modal */}
      <AnimatePresence>
        {openLetter !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onTouchStart={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-rose-900/40 backdrop-blur-md"
              onClick={() => setOpenLetter(null)}
            />

            {/* Envelope Opening Animation Container */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md"
            >
              {/* Envelope flap (opening animation) */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={{ rotateX: 180 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-16 origin-bottom"
                style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              >
                <div className={`w-full h-full bg-gradient-to-br ${letters[openLetter].color} rounded-t-3xl opacity-60`} 
                  style={{ 
                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                    backfaceVisibility: 'hidden'
                  }} 
                />
              </motion.div>

              {/* Letter paper sliding up */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
                className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[75vh]"
              >
                {/* Decorative header stripe */}
                <div className={`h-2 bg-gradient-to-r ${letters[openLetter].color}`} />
                
                {/* Scrollable content */}
                <div className="p-6 overflow-y-auto max-h-[65vh]">
                  {/* Wax seal */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
                    className="flex justify-center mb-4"
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${letters[openLetter].color} flex items-center justify-center shadow-lg`}>
                      <span className="text-3xl">{letters[openLetter].emoji}</span>
                    </div>
                  </motion.div>

                  {/* Letter title */}
                  <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-2xl text-rose-600 text-center mb-6"
                    style={{ fontFamily: 'Dancing Script, cursive' }}
                  >
                    {letters[openLetter].trigger}
                  </motion.h3>

                  {/* Decorative divider */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                    className="flex items-center justify-center gap-3 mb-6"
                  >
                    <div className="h-px w-12 bg-rose-200" />
                    <span className="text-rose-300">💕</span>
                    <div className="h-px w-12 bg-rose-200" />
                  </motion.div>

                  {/* Letter body - more readable */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="text-lg text-gray-700 leading-relaxed text-center px-2"
                    style={{ fontFamily: 'Cormorant Garamond, serif', lineHeight: '1.8' }}
                  >
                    {letters[openLetter].message}
                  </motion.p>

                  {/* Signature */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-8 text-center"
                  >
                    <p 
                      className="text-xl text-rose-500"
                      style={{ fontFamily: 'Dancing Script, cursive' }}
                    >
                      With all my love,
                    </p>
                    <p 
                      className="text-lg text-rose-400 mt-1"
                      style={{ fontFamily: 'Dancing Script, cursive' }}
                    >
                      Forever Yours 💕
                    </p>
                  </motion.div>

                  {/* Close button */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="mt-6 flex justify-center"
                  >
                    <button
                      onClick={() => setOpenLetter(null)}
                      className="btn-romantic"
                    >
                      Close Letter
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

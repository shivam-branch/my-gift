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
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            onClick={() => setOpenLetter(null)}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Letter Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateX: -30 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 30 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full"
            >
              <div 
                className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-8 shadow-2xl"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f4a4b5' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              >
                {/* Decorative wax seal */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${letters[openLetter].color} flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl">{letters[openLetter].emoji}</span>
                  </div>
                </motion.div>

                {/* Letter header */}
                <motion.h3
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl text-rose-700 text-center mt-4 mb-6"
                  style={{ fontFamily: 'Dancing Script, cursive' }}
                >
                  {letters[openLetter].trigger}
                </motion.h3>

                {/* Letter body */}
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-rose-800 leading-relaxed text-center"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {letters[openLetter].message}
                </motion.p>

                {/* Signature */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 text-right"
                >
                  <p 
                    className="text-xl text-rose-600"
                    style={{ fontFamily: 'Dancing Script, cursive' }}
                  >
                    With all my love,
                    <br />
                    Forever Yours 💕
                  </p>
                </motion.div>

                {/* Close button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  onClick={() => setOpenLetter(null)}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 btn-romantic text-sm"
                >
                  Close Letter
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

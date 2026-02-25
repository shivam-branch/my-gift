'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Letter {
  trigger: string;
  emoji: string;
  message: string;
  color: string;
  signature: string;
  signatureEmoji: string;
}

const letters: Letter[] = [
  {
    trigger: "Open when you're sad",
    emoji: '🌧️',
    message: `It's okay to feel heavy sometimes. Even the strongest hearts have quiet storms.

I am here, I would sit beside you without trying to fix anything — just holding your hand until the world felt softer again.

You don't have to be strong every single day. On the days you feel tired, lean on me. We are a team, and we always find our way back to the light together.`,
    color: 'from-blue-400 to-indigo-500',
    signature: 'Your shelter in every storm',
    signatureEmoji: '☂️',
  },
  {
    trigger: "Open when you doubt yourself",
    emoji: '💪',
    message: `Whenever you start questioning yourself, remember this — I have seen your courage up close.

I've watched you take on things that scared you and still move forward. That quiet determination in you is powerful.

If your mind ever tells you that you're not enough, borrow my eyes for a moment. Through them, you are capable, intelligent, graceful, and absolutely unstoppable.`,
    color: 'from-amber-400 to-orange-500',
    signature: 'The one who sees your strength',
    signatureEmoji: '👀',
  },
  {
    trigger: "Open when you miss me",
    emoji: '💕',
    message: `If you're missing me right now, pause and smile for a second.

Think about our random laughs, the way we look at each other across the room, the comfort of just sitting together doing nothing.

That connection doesn't disappear with distance. Until I can hold you again, remember this — I choose you. Every day. In every place. In every version of our future.`,
    color: 'from-rose-400 to-pink-500',
    signature: 'Forever choosing you',
    signatureEmoji: '💓',
  },
  {
    trigger: "Open when you need motivation",
    emoji: '🌟',
    message: `You don't just dream — you build, patiently and fearlessly.

I've seen the spark in your eyes when you talk about your goals, and that spark is still there. Nothing about you has dimmed.

If today feels hard, take one small step forward — that's all it takes. I already know how strong you are. Now go remind the world.`,
    color: 'from-yellow-400 to-amber-500',
    signature: 'Your biggest believer',
    signatureEmoji: '🏆',
  },
  {
    trigger: "Open when you can't sleep",
    emoji: '🌙',
    message: `If the night feels long and your thoughts won't slow down, imagine my hand resting gently over yours.

You are safe. You are loved. Nothing urgent needs you right now.

Let tomorrow wait. Let your breathing soften. And as you drift into sleep, remember — wherever you are, you fall asleep loved.`,
    color: 'from-indigo-400 to-purple-500',
    signature: 'Your peaceful night',
    signatureEmoji: '🌙',
  },
  {
    trigger: "Open on our anniversary",
    emoji: '💍',
    message: `If you're reading this years from now, I hope we're still laughing at silly things and holding hands without even thinking about it.

I hope we've grown kinder, wiser, and even more in love. Whatever life gave us, I hope we faced it together.

And if I ever forget to say it enough — marrying you was the best decision of my life, and I would choose you all over again.`,
    color: 'from-red-500 to-rose-600',
    signature: 'Your husband, today and always',
    signatureEmoji: '💒',
  },
  {
    trigger: "Open when you're angry at me",
    emoji: '🙈',
    message: `I messed up. I know.

I'm sorry — not to end the fight, but because I never want to hurt you.

Even when you're furious, I love you. Even now.

Take your time. I'll be here with rasmalai and an apology when you're ready.`,
    color: 'from-orange-400 to-red-400',
    signature: 'Your imperfect but devoted husband',
    signatureEmoji: '🙏',
  },
  {
    trigger: "Open when you feel unloved",
    emoji: '🤍',
    message: `Read this carefully:

You are the most loved person in my universe.

Not for what you do. Not for how you look. Just because you're YOU.

Loving you is like breathing — natural, essential, endless.

You are loved. Deeply. Completely. Always.`,
    color: 'from-purple-400 to-pink-400',
    signature: 'Yours until the stars burn out',
    signatureEmoji: '✨',
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
            My Shree, letters from my heart, sealed with love
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

        {/* Hint note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center text-rose-400 mt-8 mb-20"
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          ✨ Tap any letter to open it ✨
        </motion.p>
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
                className="relative bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Decorative header stripe */}
                <div className={`h-2 bg-gradient-to-r ${letters[openLetter].color}`} />
                
                {/* Content */}
                <div className="p-6">
                  {/* Wax seal */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
                    className="flex justify-center mb-4"
                  >
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${letters[openLetter].color} flex items-center justify-center shadow-lg`}>
                      <span className="text-2xl">{letters[openLetter].emoji}</span>
                    </div>
                  </motion.div>

                  {/* Letter title */}
                  <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-xl text-rose-600 text-center mb-4"
                    style={{ fontFamily: 'Dancing Script, cursive' }}
                  >
                    {letters[openLetter].trigger}
                  </motion.h3>

                  {/* Decorative divider */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                    className="flex items-center justify-center gap-3 mb-5"
                  >
                    <div className="h-px w-10 bg-rose-200" />
                    <span className="text-rose-300 text-sm">💕</span>
                    <div className="h-px w-10 bg-rose-200" />
                  </motion.div>

                  {/* Letter body */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="text-gray-700 leading-relaxed text-center space-y-3"
                    style={{ fontFamily: 'Cormorant Garamond, serif', lineHeight: '1.8' }}
                  >
                    {letters[openLetter].message.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-base">
                        {paragraph}
                      </p>
                    ))}
                  </motion.div>

                  {/* Unique Signature */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-6 pt-4 border-t border-rose-100"
                  >
                    <div className="text-center">
                      <motion.span
                        className="text-xl block mb-1"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {letters[openLetter].signatureEmoji}
                      </motion.span>
                      <p 
                        className="text-lg text-rose-500 italic"
                        style={{ fontFamily: 'Dancing Script, cursive' }}
                      >
                        {letters[openLetter].signature}
                      </p>
                    </div>
                  </motion.div>

                  {/* Close button */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="mt-5 flex justify-center"
                  >
                    <button
                      onClick={() => setOpenLetter(null)}
                      className="btn-romantic text-sm px-6 py-2"
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

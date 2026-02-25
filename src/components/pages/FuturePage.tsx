'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Typewriter from '../Typewriter';

export default function FuturePage() {
  const [showLetter, setShowLetter] = useState(false);
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
        background: 'linear-gradient(135deg, #fef3c7 0%, #fce7f3 50%, #ede9fe 100%)',
      }}
    >
      <div className="max-w-xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <motion.div
            className="text-6xl mb-6"
            animate={{ 
              y: [0, -10, 0],
              rotateY: [0, 360],
            }}
            transition={{ 
              y: { duration: 2, repeat: Infinity },
              rotateY: { duration: 4, repeat: Infinity, ease: 'linear' },
            }}
          >
            🎥
          </motion.div>
          <h1 
            className="text-3xl md:text-4xl gradient-text mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Message From the Future
          </h1>
          <p 
            className="text-lg text-rose-600"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            A letter from us, 20 years after our wedding...
          </p>
        </motion.div>

        {/* Time capsule */}
        {!showLetter ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <motion.button
              onClick={() => setShowLetter(true)}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-40 h-40 rounded-full bg-gradient-to-br from-amber-200 via-rose-200 to-purple-200 flex items-center justify-center shadow-2xl"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(244, 63, 94, 0.2)',
                    '0 0 40px rgba(244, 63, 94, 0.4)',
                    '0 0 20px rgba(244, 63, 94, 0.2)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.span
                  className="text-7xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  📜
                </motion.span>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-6 text-rose-500"
                style={{ fontFamily: 'Dancing Script, cursive' }}
              >
                Tap to open the time capsule
              </motion.p>
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ type: 'spring', damping: 15 }}
            className="romantic-card bg-gradient-to-br from-amber-50/80 to-rose-50/80"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4a574' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            {/* Date stamp */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-6"
            >
              <span 
                className="text-sm text-amber-600 bg-amber-100 px-4 py-1 rounded-full"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                📅  Our 21st Anniversary, 2046
              </span>
            </motion.div>

            {/* Letter content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-left space-y-4"
            >
              <p 
                className="text-xl text-rose-700"
                style={{ fontFamily: 'Dancing Script, cursive' }}
              >
                Dear Love,
              </p>
              
              <p 
                className="text-lg text-rose-800 leading-relaxed"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                <Typewriter 
                  text="We made it. Through ups, downs, and everything in between..."
                  delay={40}
                />
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="space-y-4"
              >
                <p 
                  className="text-lg text-rose-800 leading-relaxed"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Remember our 1st anniversary when we were still figuring out married life together? 
                  Well, we did it beautifully. We built a home, not just with walls, but with laughter, tears, late-night talks, and morning coffees.
                </p>

                <p 
                  className="text-lg text-rose-800 leading-relaxed"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  There were storms, yes. Days when we didn&apos;t understand each other. But we never let go of each other&apos;s hands.
                </p>

                <p 
                  className="text-lg text-rose-800 leading-relaxed"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  And if I could go back to that person who wrote this letter on our 1st anniversary, I would tell them:
                </p>

                <motion.p 
                  className="text-xl text-rose-600 text-center py-4"
                  style={{ fontFamily: 'Dancing Script, cursive' }}
                  animate={{ 
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  &quot;I would still marry you all over again.&quot;
                </motion.p>

                <p 
                  className="text-lg text-rose-800 leading-relaxed"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Twenty-one years of marriage later, your smile still makes my heart skip. Your laugh is still my favorite sound. 
                  And I fall in love with you all over again, every single day.
                </p>
              </motion.div>

              {/* Signature */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4 }}
                className="pt-6 text-right"
              >
                <p 
                  className="text-xl text-rose-600"
                  style={{ fontFamily: 'Dancing Script, cursive' }}
                >
                  Forever yours,
                  <br />
                  Your Future Self 💕
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* Reset button */}
        {showLetter && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5 }}
            onClick={() => setShowLetter(false)}
            className="mt-8 text-rose-400 underline"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Read again from the beginning
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}

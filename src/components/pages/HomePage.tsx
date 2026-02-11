'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Typewriter from '../Typewriter';

interface HomePageProps {
  onNavigate: (page: number) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [heartClicks, setHeartClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleHeartClick = () => {
    const newCount = heartClicks + 1;
    setHeartClicks(newCount);
    if (newCount >= 5) {
      setShowEasterEgg(true);
    }
  };

  if (showEasterEgg) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 text-center"
        style={{
          background: 'linear-gradient(135deg, #fef7f0 0%, #fce4ec 50%, #fff1f2 100%)',
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.3 }}
          className="mb-6 sm:mb-8"
        >
          <span className="text-6xl sm:text-8xl">✨</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl gradient-text mb-4 sm:mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          You found the secret!
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="romantic-card max-w-sm sm:max-w-md mx-4"
        >
          <p 
            className="text-lg sm:text-xl text-rose-700 mb-3 sm:mb-4"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            🎫 Congratulations! 🎫
          </p>
          <p 
            className="text-base sm:text-lg text-rose-600"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            You&apos;ve unlocked one extra hug coupon, redeemable anytime, anywhere.
            <br /><br />
            <span className="text-xs sm:text-sm text-rose-400">
              (Valid forever • No expiration • Non-transferable)
            </span>
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => setShowEasterEgg(false)}
          className="mt-6 sm:mt-8 btn-romantic text-sm sm:text-base px-6 py-3"
        >
          Continue exploring 💕
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-6 sm:p-6 text-center pb-36 sm:pb-40"
    >
      {/* Animated heart that triggers easter egg */}
      <motion.div
        onClick={handleHeartClick}
        className="cursor-pointer select-none mb-4 sm:mb-8"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <span className="text-5xl sm:text-7xl md:text-8xl">💖</span>
        {heartClicks > 0 && heartClicks < 5 && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs sm:text-sm text-rose-400 mt-2"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            {5 - heartClicks} more taps...
          </motion.p>
        )}
      </motion.div>

      {/* Welcome message */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-sm sm:max-w-lg w-full"
      >
        <h1 
          className="text-2xl sm:text-4xl md:text-5xl gradient-text mb-4 sm:mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <Typewriter text="Welcome, My Love" delay={80} />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-base sm:text-lg md:text-xl text-rose-700 mb-4 sm:mb-8 leading-relaxed px-2"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          I created this little corner of the internet just for you. 
          Every page holds a piece of my heart, a memory, a promise.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-lg sm:text-xl md:text-2xl text-rose-500 mb-6 sm:mb-12"
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          Happy Valentine&apos;s Day, forever and always 💕
        </motion.p>

        {/* Quick navigation cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="grid grid-cols-2 gap-2 sm:gap-4 mt-4 sm:mt-8"
        >
          {[
            { icon: '🎧', label: 'Our Songs', page: 1 },
            { icon: '💌', label: 'Love Letters', page: 2 },
            { icon: '💭', label: 'Sweet Words', page: 3 },
            { icon: '🎥', label: 'From Future', page: 4 },
          ].map((item, index) => (
            <motion.button
              key={item.label}
              onClick={() => onNavigate(item.page)}
              className="romantic-card flex flex-col items-center py-3 sm:py-4 hover:bg-white/90 transition-all touch-target"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 + index * 0.1 }}
            >
              <span className="text-2xl sm:text-3xl mb-1 sm:mb-2">{item.icon}</span>
              <span 
                className="text-rose-600 text-sm sm:text-base"
                style={{ fontFamily: 'Dancing Script, cursive' }}
              >
                {item.label}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

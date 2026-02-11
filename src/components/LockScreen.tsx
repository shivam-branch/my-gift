'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from './Typewriter';

interface LockScreenProps {
  onUnlock: () => void;
  correctPassword: string;
}

export default function LockScreen({ onUnlock, correctPassword }: LockScreenProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [showInput, setShowInput] = useState(false);

  // Memoize star positions to prevent re-renders causing position changes
  const stars = useMemo(() => 
    [...Array(30)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 3,
    })), []
  );

  const floatingHearts = useMemo(() =>
    [...Array(6)].map((_, i) => ({
      id: i,
      left: `${10 + Math.random() * 80}%`,
      delay: i * 0.5,
      duration: 4 + Math.random() * 2,
    })), []
  );

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (password === correctPassword) {
      setIsUnlocking(true);
      setTimeout(onUnlock, 2000);
    } else {
      setError('Still cute, but try again 😄');
      setPassword('');
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleButtonClick = () => {
    handleSubmit();
  };

  return (
    <AnimatePresence>
      {!isUnlocking ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.5 }}
          className="min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:p-8 md:p-12 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 25%, #fbcfe8 50%, #f9a8d4 75%, #f472b6 100%)',
          }}
        >
          {/* Sparkle background */}
          <div className="absolute inset-0 overflow-hidden">
            {stars.map((star) => (
              <motion.div
                key={star.id}
                className="absolute rounded-full"
                style={{
                  left: star.left,
                  top: star.top,
                  width: star.size,
                  height: star.size,
                  background: star.id % 2 === 0 ? '#ec4899' : '#f9a8d4',
                }}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: star.duration,
                  repeat: Infinity,
                  delay: star.delay,
                }}
              />
            ))}
          </div>

          {/* Floating hearts */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {floatingHearts.map((heart) => (
              <motion.div
                key={heart.id}
                className="absolute text-2xl sm:text-3xl opacity-40"
                style={{ left: heart.left, bottom: '-50px' }}
                animate={{
                  y: [0, -1200],
                  x: [0, Math.sin(heart.id) * 30],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: heart.duration,
                  repeat: Infinity,
                  delay: heart.delay,
                  ease: 'linear',
                }}
              >
                💕
              </motion.div>
            ))}
          </div>

          {/* Soft glowing orbs - smaller on mobile */}
          <motion.div
            className="absolute w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)',
              top: '5%',
              left: '-10%',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)',
              bottom: '10%',
              right: '-5%',
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          {/* Lock Icon with heart */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', delay: 0.3, duration: 0.8 }}
            className="mb-6 sm:mb-10 md:mb-12 relative"
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  '0 0 30px rgba(236, 72, 153, 0.3)',
                  '0 0 60px rgba(244, 63, 94, 0.5)',
                  '0 0 30px rgba(236, 72, 153, 0.3)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center relative"
              style={{
                background: 'linear-gradient(145deg, #ec4899, #f43f5e, #be185d)',
              }}
            >
              <motion.span 
                className="text-4xl sm:text-5xl md:text-6xl"
                animate={{ 
                  rotateY: [0, 10, -10, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🔐
              </motion.span>
              
              {/* Sparkles around lock - fewer on mobile */}
              {[0, 90, 180, 270].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-300 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: 'center',
                  }}
                  animate={{
                    x: [0, Math.cos(angle * Math.PI / 180) * 60],
                    y: [0, Math.sin(angle * Math.PI / 180) * 60],
                    opacity: [1, 0],
                    scale: [0.5, 1.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Title with elegant styling */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-6 sm:mb-8 md:mb-10 px-2"
          >
            <motion.h1
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 leading-relaxed"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              <Typewriter 
                text="Only the love of my life can enter" 
                delay={50}
                onComplete={() => setShowInput(true)}
              />
            </motion.h1>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: showInput ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="h-0.5 w-32 sm:w-48 md:w-64 mx-auto mt-3 sm:mt-4 bg-gradient-to-r from-transparent via-rose-400 to-transparent"
            />
          </motion.div>

          <AnimatePresence>
            {showInput && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md px-2"
              >
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Input field with soft shadow */}
                  <div className="relative group">
                    <motion.input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter our special date..."
                      className="relative w-full px-4 py-3 sm:px-6 sm:py-4 md:py-5 bg-white/80 backdrop-blur-xl border-2 border-pink-300 rounded-full text-rose-700 placeholder-rose-400/60 focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-200 text-center text-base sm:text-lg md:text-xl tracking-wide shadow-lg"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  {/* Unlock button */}
                  <motion.button
                    type="submit"
                    onClick={handleButtonClick}
                    className="w-full py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-semibold text-white rounded-full relative overflow-hidden cursor-pointer shadow-xl touch-target"
                    style={{ 
                      fontFamily: 'Cormorant Garamond, serif',
                      background: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 50%, #e11d48 100%)',
                    }}
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: '0 20px 50px rgba(236, 72, 153, 0.4)' 
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                    <span className="relative z-10">Unlock My Heart 💕</span>
                  </motion.button>
                </form>

                {/* Error message */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-center mt-4 sm:mt-5"
                    >
                      <motion.p
                        className="text-rose-600 text-base sm:text-lg"
                        style={{ fontFamily: 'Dancing Script, cursive' }}
                        animate={{ x: [-5, 5, -5, 5, 0] }}
                        transition={{ duration: 0.4 }}
                      >
                        {error}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hint */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-center mt-6 sm:mt-8 text-rose-500/80 text-sm sm:text-base md:text-lg flex items-center justify-center gap-1 sm:gap-2"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  <span className="text-lg sm:text-xl">💡</span>
                  Hint: Our special date
                  <span className="text-lg sm:text-xl">💑</span>
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Unlock animation */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen flex flex-col items-center justify-center p-4"
          style={{
            background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)',
          }}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.8, 0] }}
            transition={{ duration: 1.8, times: [0, 0.5, 1] }}
            className="text-7xl sm:text-8xl md:text-9xl"
          >
            💖
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 0], y: [20, 0, -20] }}
            transition={{ duration: 1.8, times: [0, 0.4, 1] }}
            className="text-xl sm:text-2xl text-rose-600 mt-6 sm:mt-8"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Welcome, my love...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

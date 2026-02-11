'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 🎸 CUSTOMIZE: Change this URL to your background music file
const BACKGROUND_MUSIC_URL = 'https://storage.googleapis.com/my-gift-music/romantic_guitar.mp3';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio(BACKGROUND_MUSIC_URL);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
      setShowPrompt(false);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <>
      {/* Initial prompt to play music */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40"
          >
            <motion.button
              onClick={togglePlay}
              className="bg-white/90 backdrop-blur-lg px-6 py-3 rounded-full shadow-xl border border-rose-200 flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(244, 63, 94, 0.2)',
                  '0 0 30px rgba(244, 63, 94, 0.4)',
                  '0 0 20px rgba(244, 63, 94, 0.2)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-2xl">🎵</span>
              <span 
                className="text-rose-600 font-medium"
                style={{ fontFamily: 'Dancing Script, cursive' }}
              >
                Play background music
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating music control */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed top-4 left-4 z-50"
      >
        <motion.div
          className={`flex items-center gap-2 p-2 rounded-full shadow-lg backdrop-blur-lg ${
            isPlaying ? 'bg-rose-500/90' : 'bg-white/80'
          }`}
          whileHover={{ scale: 1.05 }}
        >
          {/* Play/Pause button */}
          <motion.button
            onClick={togglePlay}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isPlaying ? 'bg-white text-rose-500' : 'bg-rose-100 text-rose-500'
            }`}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? (
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                🎵
              </motion.span>
            ) : (
              <span>🔇</span>
            )}
          </motion.button>

          {/* Volume slider - only show when playing */}
          <AnimatePresence>
            {isPlaying && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 'auto', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-16 h-1 bg-white/50 rounded-full appearance-none cursor-pointer accent-white"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  );
}

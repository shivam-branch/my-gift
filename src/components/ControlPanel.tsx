'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 🎸 CUSTOMIZE: Change this URL to your background music file
const BACKGROUND_MUSIC_URL = 'https://storage.googleapis.com/my-gift-music/romantic_guitar.mp3';

interface ControlPanelProps {
  onLock: () => void;
}

export default function ControlPanel({ onLock }: ControlPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2); // Low volume by default
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
    }
  };

  const adjustVolume = (delta: number) => {
    const newVolume = Math.max(0, Math.min(1, volume + delta));
    setVolume(newVolume);
  };

  const handleLock = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    onLock();
  };

  return (
    <>
      {/* Main control button */}
      <div className="fixed top-4 right-4 z-50">
        {/* Expanded menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              className="absolute top-14 right-0 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-rose-100 p-3 min-w-[160px]"
            >
              {/* Lock button */}
              <motion.button
                onClick={handleLock}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-rose-50 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">🔒</span>
                <span 
                  className="text-rose-600 text-sm"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Lock
                </span>
              </motion.button>

              {/* Divider */}
              <div className="h-px bg-rose-100 my-2" />

              {/* Play/Stop music */}
              <motion.button
                onClick={togglePlay}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-rose-50 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{isPlaying ? '⏸️' : '▶️'}</span>
                <span 
                  className="text-rose-600 text-sm"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {isPlaying ? 'Pause Music' : 'Play Music'}
                </span>
              </motion.button>

              {/* Volume controls */}
              <div className="flex items-center gap-2 px-3 py-2.5">
                <span className="text-lg">🔊</span>
                <div className="flex items-center gap-1 flex-1">
                  <motion.button
                    onClick={() => adjustVolume(-0.1)}
                    className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-sm font-bold hover:bg-rose-200 transition-colors"
                    whileTap={{ scale: 0.9 }}
                  >
                    −
                  </motion.button>
                  
                  {/* Volume indicator */}
                  <div className="flex-1 h-1.5 bg-rose-100 rounded-full overflow-hidden mx-1">
                    <motion.div 
                      className="h-full bg-rose-500 rounded-full"
                      animate={{ width: `${volume * 100}%` }}
                    />
                  </div>
                  
                  <motion.button
                    onClick={() => adjustVolume(0.1)}
                    className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-sm font-bold hover:bg-rose-200 transition-colors"
                    whileTap={{ scale: 0.9 }}
                  >
                    +
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center ${
            isOpen 
              ? 'bg-rose-500 text-white' 
              : 'bg-white/90 backdrop-blur-lg border border-rose-200'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={isPlaying && !isOpen ? {
            boxShadow: [
              '0 0 10px rgba(244, 63, 94, 0.3)',
              '0 0 20px rgba(244, 63, 94, 0.5)',
              '0 0 10px rgba(244, 63, 94, 0.3)',
            ]
          } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {isOpen ? (
            <span className="text-lg">✕</span>
          ) : (
            <motion.span 
              className="text-lg"
              animate={isPlaying ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              {isPlaying ? '🎵' : '⚙️'}
            </motion.span>
          )}
        </motion.button>
      </div>
    </>
  );
}

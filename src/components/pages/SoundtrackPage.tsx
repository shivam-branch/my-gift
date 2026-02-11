'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

interface Song {
  title: string;
  artist: string;
  memory: string;
  emoji: string;
  color: string;
  // YouTube video ID - find from YouTube URL
  // Example: https://www.youtube.com/watch?v=2Vv-BfVoq4g -> youtubeId = "2Vv-BfVoq4g"
  youtubeId: string;
}

// 🎵 CUSTOMIZE: Add your own songs with their YouTube video IDs
// To find a YouTube video ID:
// 1. Go to YouTube and find your song
// 2. Copy the URL: https://www.youtube.com/watch?v=VIDEO_ID
// 3. The ID is after "v=" (e.g., 2Vv-BfVoq4g)
const songs: Song[] = [
  {
    title: 'Perfect',
    artist: 'Ed Sheeran',
    memory: 'This song reminds me of the way you smiled that day when we first danced together.',
    emoji: '💃',
    color: 'from-rose-400 to-pink-500',
    youtubeId: '2Vv-BfVoq4g',
  },
  {
    title: 'A Thousand Years',
    artist: 'Christina Perri',
    memory: 'Every time I hear this, I think of how I knew you were the one from the very first moment.',
    emoji: '💫',
    color: 'from-pink-400 to-purple-500',
    youtubeId: 'rtOvBOTyX00',
  },
  {
    title: 'All of Me',
    artist: 'John Legend',
    memory: 'This was playing during our first trip together. I remember your laughter filling the car.',
    emoji: '🚗',
    color: 'from-purple-400 to-indigo-500',
    youtubeId: '450p7goxZqg',
  },
  {
    title: "Can't Help Falling in Love",
    artist: 'Elvis Presley',
    memory: 'A classic that describes exactly how I felt - like falling was never a choice.',
    emoji: '🌹',
    color: 'from-red-400 to-rose-500',
    youtubeId: 'vGJTaP6anOU',
  },
];

export default function SoundtrackPage() {
  const [playingSong, setPlayingSong] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement | null>(null);

  // Handle song click - toggle play/pause or switch songs
  const handleSongClick = (index: number) => {
    if (playingSong === index) {
      // Same song clicked - stop playing
      setPlayingSong(null);
    } else {
      // Different song or no song playing - play this song
      setPlayingSong(index);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-6 sm:py-12 px-3 sm:px-6 pb-36 sm:pb-40"
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-6 sm:mb-12"
        >
          <motion.span
            className="text-4xl sm:text-6xl mb-2 sm:mb-4 block"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎧
          </motion.span>
          <h1 
            className="text-2xl sm:text-4xl gradient-text mb-2 sm:mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Soundtrack of Us
          </h1>
          <p 
            className="text-base sm:text-xl text-rose-600 px-4"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Every love story has a background score. These are ours.
          </p>
        </motion.div>

        {/* Now Playing Bar */}
        {playingSong !== null && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl sm:rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between text-white gap-2">
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="text-xl sm:text-2xl flex-shrink-0"
                >
                  🎵
                </motion.div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm sm:text-base" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Now Playing
                  </p>
                  <p className="text-xs sm:text-sm text-white/80 truncate" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {songs[playingSong].title} - {songs[playingSong].artist}
                  </p>
                </div>
              </div>
              <motion.button
                onClick={() => setPlayingSong(null)}
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors touch-target flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ⏹️
              </motion.button>
            </div>
            
            {/* Animated sound waves */}
            <div className="flex items-end justify-center gap-0.5 sm:gap-1 mt-2 sm:mt-3 h-4 sm:h-6">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-0.5 sm:w-1 bg-white/60 rounded-full"
                  animate={{
                    height: [6, 16, 6],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    delay: i * 0.05,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* YouTube Player - Positioned off-screen but technically visible for iOS */}
        {playingSong !== null && (
          <div 
            style={{ 
              position: 'fixed',
              left: '-9999px',
              top: '-9999px',
              width: '1px',
              height: '1px',
              overflow: 'hidden',
            }}
          >
            <iframe
              ref={playerRef}
              width="300"
              height="200"
              src={`https://www.youtube.com/embed/${songs[playingSong].youtubeId}?autoplay=1&loop=1&playlist=${songs[playingSong].youtubeId}`}
              title={songs[playingSong].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        )}

        {/* Song Cards */}
        <div className="space-y-3 sm:space-y-4">
          {songs.map((song, index) => {
            const isPlaying = playingSong === index;
            
            return (
              <motion.div
                key={song.title}
                initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                onClick={() => handleSongClick(index)}
                className="cursor-pointer"
              >
                <motion.div
                  className={`romantic-card overflow-hidden transition-all duration-300 ${
                    isPlaying 
                      ? 'ring-2 ring-green-400 bg-gradient-to-r from-green-50 to-emerald-50' 
                      : 'hover:ring-2 hover:ring-rose-300'
                  }`}
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Song icon with play indicator */}
                    <motion.div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${song.color} flex items-center justify-center shadow-lg relative flex-shrink-0`}
                      animate={isPlaying ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      {isPlaying ? (
                        <motion.div
                          className="flex items-end gap-0.5 h-5 sm:h-6"
                        >
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-1 sm:w-1.5 bg-white rounded-full"
                              animate={{ height: [6, 16, 6] }}
                              transition={{
                                duration: 0.4,
                                repeat: Infinity,
                                delay: i * 0.1,
                              }}
                            />
                          ))}
                        </motion.div>
                      ) : (
                        <span className="text-2xl sm:text-3xl">{song.emoji}</span>
                      )}
                      
                      {/* Ripple effect when playing */}
                      {isPlaying && (
                        <motion.div
                          className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-white"
                          animate={{ scale: [1, 1.3], opacity: [0.8, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                    
                    {/* Song info */}
                    <div className="flex-1 min-w-0">
                      <h3 
                        className={`text-base sm:text-xl truncate ${isPlaying ? 'text-green-700' : 'text-rose-700'}`}
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {song.title}
                      </h3>
                      <p 
                        className={`text-sm sm:text-base truncate ${isPlaying ? 'text-green-600' : 'text-rose-500'}`}
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        {song.artist}
                      </p>
                      {/* Memory preview - hidden on very small screens */}
                      <p 
                        className="text-rose-400 text-xs sm:text-sm mt-0.5 sm:mt-1 line-clamp-1 hidden xs:block"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        &ldquo;{song.memory}&rdquo;
                      </p>
                    </div>

                    {/* Play/Pause indicator */}
                    <motion.div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isPlaying 
                          ? 'bg-green-500 text-white' 
                          : 'bg-rose-100 text-rose-500'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {isPlaying ? (
                        <span className="text-base sm:text-lg">⏸️</span>
                      ) : (
                        <span className="text-base sm:text-lg">▶️</span>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-8 sm:mt-12 space-y-1 sm:space-y-2"
        >
          <p 
            className="text-rose-400 text-sm sm:text-base"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Tap on any song to play • Tap again to stop 🎵
          </p>
          <p 
            className="text-rose-300 text-xs sm:text-sm"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            (Tap play on the YouTube player if music doesn&apos;t start)
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

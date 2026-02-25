'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface MessageOption {
  button: string;
  emoji: string;
  message: string;
  color: string;
}

const messageOptions: MessageOption[] = [
  {
    button: "I need motivation",
    emoji: "🔥",
    message: "You are capable of incredible things. Every challenge you've faced has only made you stronger. Today might be hard, but you're harder. I believe in you with every fiber of my being. Now go conquer the world – I'll be here cheering you on!",
    color: "from-orange-400 to-red-500",
  },
  {
    button: "Make me smile",
    emoji: "😊",
    message: "Did you know that your smile is my favorite thing in the entire universe? It's true! When you smile, flowers bloom, birds sing, and my heart does a little happy dance. Now imagine me smiling right now just to see you smile. Are you smiling yet? 🥰💃",
    color: "from-yellow-400 to-amber-500",
  },
  {
    button: "Remind me you love me",
    emoji: "💕",
    message: "I love you. Not just in the big moments, but in the small ones too. In the way you laugh at your own jokes. In how your cheek dimple shows up when you're thinking. In your morning voice and your sleepy eyes. I love all of you – the messy parts, the beautiful parts, every single part.",
    color: "from-rose-400 to-pink-500",
  },
  {
    button: "I'm feeling anxious",
    emoji: "🌿",
    message: "Take a deep breath with me. In... and out. You're safe. You're loved. Whatever is worrying you, we'll figure it out together. Right now, just focus on this moment. Feel my love wrapping around you like a warm blanket. Everything will be okay. I promise.",
    color: "from-green-400 to-teal-500",
  },
  {
    button: "Tell me I'm beautiful",
    emoji: "✨",
    message: "You are absolutely, breathtakingly beautiful. Not just on the outside (though wow, you're stunning), but your soul radiates light. The way you care for others, your kindness, your strength – it all makes you the most beautiful person I know. Inside and out. Always.",
    color: "from-purple-400 to-pink-500",
  },
  {
    button: "I need a virtual hug",
    emoji: "🤗",
    message: "Close your eyes. Imagine my arms wrapped tightly around you. Feel the warmth. The safety. The love. I'm squeezing you so tight, telling you that everything is going to be okay. This hug lasts as long as you need it. I'm not letting go until you're ready.",
    color: "from-indigo-400 to-purple-500",
  },
];

export default function MessagesPage() {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-12 px-6 pb-32"
    >
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-10"
        >
          <motion.span
            className="text-5xl mb-4 block"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ❤️
          </motion.span>
          <h1 
            className="text-3xl md:text-4xl gradient-text mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Choose Your Message
          </h1>
          <p 
            className="text-lg text-rose-600"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            What does your heart need right now?
          </p>
        </motion.div>

        {/* Message buttons */}
        <div className="grid gap-4">
          {messageOptions.map((option, index) => (
            <motion.button
              key={option.button}
              initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              onClick={() => setSelectedMessage(index)}
              className="w-full"
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`romantic-card flex items-center gap-4 text-left transition-all ${
                selectedMessage === index ? 'ring-2 ring-rose-400' : ''
              }`}>
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center shadow-md flex-shrink-0`}
                  animate={selectedMessage === index ? { 
                    scale: [1, 1.2, 1],
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-2xl">{option.emoji}</span>
                </motion.div>
                <p 
                  className="text-lg text-rose-700"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {option.button}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

      </div>

      {/* Full-screen message modal */}
      <AnimatePresence>
        {selectedMessage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            onTouchStart={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
          >
            {/* Backdrop - click to close */}
            <div 
              className="absolute inset-0 bg-rose-900/30 backdrop-blur-md"
              onClick={() => setSelectedMessage(null)}
            />

            {/* Message card */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-md max-h-[80vh] overflow-y-auto bg-white rounded-3xl p-8 shadow-2xl"
            >
              {/* Emoji header */}
              <div className="text-center mb-4">
                <span className="text-5xl" role="img" aria-label="emoji">
                  {messageOptions[selectedMessage].emoji}
                </span>
              </div>

              {/* Title */}
              <h2
                className="text-2xl text-center mb-6 text-rose-600"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {messageOptions[selectedMessage].button}
              </h2>

              {/* Message content */}
              <p 
                className="text-lg text-rose-700 leading-relaxed text-center"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {messageOptions[selectedMessage].message}
              </p>

              {/* Signature */}
              <div className="mt-8 text-center">
                <p 
                  className="text-xl text-rose-500"
                  style={{ fontFamily: 'Dancing Script, cursive' }}
                >
                  With all my love 💕
                </p>
              </div>

              {/* Choose Another button */}
              <button
                onClick={() => setSelectedMessage(null)}
                className="mt-6 mx-auto block btn-romantic"
              >
                Choose Another
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

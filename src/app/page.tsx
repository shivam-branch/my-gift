'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LockScreen from '@/components/LockScreen';
import FloatingHearts from '@/components/FloatingHearts';
import Navigation from '@/components/Navigation';
import ControlPanel from '@/components/ControlPanel';
import HomePage from '@/components/pages/HomePage';
import SoundtrackPage from '@/components/pages/SoundtrackPage';
import LettersPage from '@/components/pages/LettersPage';
import ThingsPage from '@/components/pages/ThingsPage';
import FuturePage from '@/components/pages/FuturePage';
import MessagesPage from '@/components/pages/MessagesPage';

// 🔐 CUSTOMIZE THIS: Set your special password (wedding date, first trip date, etc.)
const SECRET_PASSWORD = '1111';

const pageNames = [
  '💖 Welcome Home',
  '🎧 Soundtrack of Us',
  '💌 Open When Letters',
  '💭 Things I Never Say',
  '🎥 Message From Future',
  '❤️ Choose Your Message',
];

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  // Check if already unlocked (localStorage)
  useEffect(() => {
    const unlocked = localStorage.getItem('valentine-unlocked');
    if (unlocked === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const handleUnlock = () => {
    localStorage.setItem('valentine-unlocked', 'true');
    setIsUnlocked(true);
  };

  const handleNavigate = (page: number) => {
    // Reset scroll before navigation
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    setDirection(page > currentPage ? 1 : -1);
    setCurrentPage(page);
  };

  // Scroll to top when page changes
  useEffect(() => {
    // Reset scroll immediately
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    // Also reset after a small delay (for page transition)
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 100);
    
    return () => clearTimeout(timer);
  }, [currentPage]);

  // Page transition variants
  const pageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const renderCurrentPage = () => {
    const pages = [
      <HomePage key="home" onNavigate={handleNavigate} />,
      <SoundtrackPage key="soundtrack" />,
      <LettersPage key="letters" />,
      <ThingsPage key="things" />,
      <FuturePage key="future" />,
      <MessagesPage key="messages" />,
    ];
    return pages[currentPage];
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isUnlocked) return;
      if (e.key === 'ArrowRight' && currentPage < pageNames.length - 1) {
        handleNavigate(currentPage + 1);
      } else if (e.key === 'ArrowLeft' && currentPage > 0) {
        handleNavigate(currentPage - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isUnlocked, currentPage]);

  // Handle swipe navigation
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentPage < pageNames.length - 1) {
      handleNavigate(currentPage + 1);
    }
    if (isRightSwipe && currentPage > 0) {
      handleNavigate(currentPage - 1);
    }
  };

  if (!isUnlocked) {
    return <LockScreen onUnlock={handleUnlock} correctPassword={SECRET_PASSWORD} />;
  }

  return (
    <main 
      className="min-h-screen overflow-x-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Floating hearts background */}
      <FloatingHearts />

      {/* Control Panel - Music & Lock */}
      <ControlPanel onLock={() => {
        localStorage.removeItem('valentine-unlocked');
        setIsUnlocked(false);
        setCurrentPage(0);
      }} />

      {/* Page content with transitions */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentPage}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="relative z-10"
        >
          {renderCurrentPage()}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <Navigation
        currentPage={currentPage}
        totalPages={pageNames.length}
        onNavigate={handleNavigate}
        pageNames={pageNames}
      />

    </main>
  );
}

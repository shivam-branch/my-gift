'use client';

import { motion } from 'framer-motion';

interface NavigationProps {
  currentPage: number;
  totalPages: number;
  onNavigate: (page: number) => void;
  pageNames: string[];
}

export default function Navigation({ 
  currentPage, 
  totalPages, 
  onNavigate,
  pageNames 
}: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 safe-bottom"
    >
      <div className="mx-3 mb-3 sm:mx-4 sm:mb-4 md:mx-auto md:max-w-lg">
        <div className="glass rounded-2xl px-4 py-3 shadow-xl">
          {/* Main navigation row */}
          <div className="flex items-center justify-between gap-3">
            {/* Left arrow */}
            <motion.button
              onClick={() => currentPage > 0 && onNavigate(currentPage - 1)}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentPage === 0 
                  ? 'opacity-30 bg-rose-100' 
                  : 'bg-rose-100 hover:bg-rose-200 active:bg-rose-300'
              }`}
              disabled={currentPage === 0}
              whileHover={currentPage > 0 ? { scale: 1.1 } : {}}
              whileTap={currentPage > 0 ? { scale: 0.9 } : {}}
            >
              <span className="text-rose-500 text-lg">←</span>
            </motion.button>

            {/* Center content */}
            <div className="flex-1 text-center">
              {/* Page dots */}
              <div className="flex justify-center items-center gap-1.5 mb-1">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => onNavigate(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === currentPage 
                        ? 'bg-rose-500 w-4 h-1.5' 
                        : 'bg-rose-300/50 hover:bg-rose-400/50 w-1.5 h-1.5'
                    }`}
                  />
                ))}
              </div>
              
              {/* Page name */}
              <motion.p
                key={currentPage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-rose-600 text-xs truncate"
                style={{ fontFamily: 'Dancing Script, cursive' }}
              >
                {pageNames[currentPage]}
              </motion.p>
            </div>

            {/* Right arrow */}
            <motion.button
              onClick={() => currentPage < totalPages - 1 && onNavigate(currentPage + 1)}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentPage === totalPages - 1 
                  ? 'opacity-30 bg-rose-100' 
                  : 'bg-rose-100 hover:bg-rose-200 active:bg-rose-300'
              }`}
              disabled={currentPage === totalPages - 1}
              whileHover={currentPage < totalPages - 1 ? { scale: 1.1 } : {}}
              whileTap={currentPage < totalPages - 1 ? { scale: 0.9 } : {}}
            >
              <span className="text-rose-500 text-lg">→</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

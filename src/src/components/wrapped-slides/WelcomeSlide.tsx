import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Sparkles } from 'lucide-react';

export function WelcomeSlide() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-center px-8 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-8 mx-auto">
          <Calendar className="w-16 h-16 text-white" />
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute -top-2 -right-2"
        >
          <Sparkles className="w-8 h-8 text-yellow-400" />
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-4xl md:text-6xl text-white mb-4 font-medium"
      >
        Your December
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-2xl md:text-4xl text-white mb-6 font-medium"
      >
        Financial Review
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-lg text-white/80 max-w-md"
      >
        Let's take a look at your financial journey this month. 
        Get ready for some insights!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-8 text-white/60"
      >
        Swipe or click next to continue →
      </motion.div>
    </div>
  );
}
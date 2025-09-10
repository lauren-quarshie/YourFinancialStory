import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Sparkles, TrendingUp } from 'lucide-react';

export function MobileWelcomeSlide() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-8 w-20 h-20 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-12 w-16 h-16 bg-yellow-400 rounded-full blur-lg"></div>
        <div className="absolute top-1/3 right-8 w-12 h-12 bg-purple-400 rounded-full blur-lg"></div>
      </div>

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.3 }}
        className="relative mb-8"
      >
        <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/30">
          <Calendar className="w-12 h-12 text-white" />
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1 -right-1"
        >
          <Sparkles className="w-6 h-6 text-yellow-400 drop-shadow-lg" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-2"
      >
        <div className="text-white/60 text-sm uppercase tracking-wider mb-2">December</div>
        <h1 className="text-3xl text-white mb-2 font-medium leading-tight">
          Your Monthly
        </h1>
        <h2 className="text-3xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-medium">
          Review
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-white/80 max-w-xs leading-relaxed mb-8"
      >
        Discover your financial journey this month with personalized insights and actionable tips
      </motion.p>

      {/* Stats preview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex gap-4 mb-8"
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
          <div className="text-white text-lg font-medium">£3,247</div>
          <div className="text-white/60 text-xs">Total Spent</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
          <div className="text-green-400 text-lg font-medium flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            12%
          </div>
          <div className="text-white/60 text-xs">Savings Growth</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="text-white/50 text-sm flex items-center gap-2"
      >
        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
        <div className="w-2 h-1 bg-white rounded-full"></div>
        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
        <span className="ml-2">Swipe to explore</span>
      </motion.div>
    </div>
  );
}
import React from 'react';
import { motion } from 'motion/react';
import { PiggyBank, Star, Target, TrendingUp, Zap } from 'lucide-react';
import { Button } from '../ui/button';

export function MobileSavingsSlide() {
  const savedAmount = 752.18;
  const savingsGoal = 1000;
  const progressPercentage = (savedAmount / savingsGoal) * 100;
  const remainingAmount = savingsGoal - savedAmount;
  const daysRemaining = 5; // Days left in month

  return (
    <div className="h-full w-full flex flex-col text-center px-6 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 overflow-y-auto py-8 pb-32 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-8 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-40 right-8 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-4 w-8 h-8 bg-white rounded-full"></div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.3 }}
          className="relative mb-6"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-green-500/30">
            <PiggyBank className="w-10 h-10 text-white" />
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="absolute -top-1 -right-1"
          >
            <Star className="w-6 h-6 text-yellow-400 drop-shadow-lg" />
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/80 mb-2"
        >
          You saved
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, type: "spring" }}
          className="text-4xl text-white mb-4 font-medium"
        >
          £{savedAmount.toLocaleString()}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-2 text-white/80 text-sm">
            <span>Progress to goal</span>
            <span>{progressPercentage.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1.5, delay: 1 }}
              className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
            />
          </div>
          <div className="flex items-center justify-center gap-1 mt-2 text-white/60 text-sm">
            <Target className="w-4 h-4" />
            <span>Goal: £{savingsGoal.toLocaleString()}</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-white/70 text-sm mb-8"
        >
          Just £{remainingAmount.toFixed(2)} more to reach your goal!
        </motion.p>
      </div>

      <div className="space-y-3">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-white font-medium mb-4 flex items-center justify-center gap-2"
        >
          <span>💪</span>
          <span>Boost Savings</span>
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="text-white font-medium">Reach Your Goal</h4>
            </div>
          </div>
          <p className="text-white/70 text-sm mb-4 leading-relaxed text-left">
            Save £{(remainingAmount / daysRemaining).toFixed(2)} daily for the next {daysRemaining} days to hit your target!
          </p>
          <Button
            size="sm"
            className="w-full bg-white text-black hover:bg-white/90 font-medium rounded-xl"
            onClick={() => alert('Daily savings reminder would be set up here!')}
          >
            Set Daily Reminder
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="text-white font-medium">Automate Savings</h4>
            </div>
          </div>
          <p className="text-white/70 text-sm mb-4 leading-relaxed text-left">
            Set up automatic transfers to make saving effortless and consistent.
          </p>
          <Button
            size="sm"
            className="w-full bg-white text-black hover:bg-white/90 font-medium rounded-xl"
            onClick={() => alert('Auto-savings setup would open here!')}
          >
            Enable Auto-Save
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
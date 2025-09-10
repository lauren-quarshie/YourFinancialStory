import React from 'react';
import { motion } from 'motion/react';
import { PiggyBank, TrendingUp, Target, Trophy, Plus } from 'lucide-react';
import { Button } from '../ui/button';

export function MobileSavingsSlide() {
  const savedAmount = 487.32;
  const savingsGoal = 1000;
  const progressPercentage = (savedAmount / savingsGoal) * 100;
  const monthlyIncrease = 12.5;

  return (
    <div className="h-full w-full flex flex-col px-6 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 overflow-y-auto py-8 pb-32 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-8 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-40 right-8 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-1/3 right-4 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="text-center mb-6">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4 mx-auto shadow-2xl shadow-green-500/30"
        >
          <PiggyBank className="w-10 h-10 text-white" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl text-white mb-2 font-medium"
        >
          Savings Progress
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/70 text-sm"
        >
          You're building wealth step by step
        </motion.p>
      </div>

      {/* Savings Amount */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1, type: "spring" }}
        className="text-center mb-6"
      >
        <div className="text-4xl text-white font-medium mb-2">
          £{savedAmount.toLocaleString()}
        </div>
        <div className="flex items-center justify-center gap-2 text-green-400">
          <TrendingUp className="w-4 h-4" />
          <span>+{monthlyIncrease}% this month</span>
        </div>
      </motion.div>

      {/* Progress Circle */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="flex justify-center mb-8"
      >
        <div className="relative w-32 h-32">
          {/* Background circle */}
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
            />
            <motion.path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 100" }}
              animate={{ strokeDasharray: `${progressPercentage} 100` }}
              transition={{ duration: 2, delay: 1.4 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-white font-medium">{Math.round(progressPercentage)}%</div>
            <div className="text-white/60 text-xs">of goal</div>
          </div>
        </div>
      </motion.div>

      {/* Goal Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 mb-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-white font-medium">Current Goal</div>
            <div className="text-white/70 text-sm">£{(savingsGoal - savedAmount).toFixed(2)} remaining</div>
          </div>
          <div className="text-2xl text-white font-medium">
            £{savingsGoal.toLocaleString()}
          </div>
        </div>
      </motion.div>

      {/* Action Cards */}
      <div className="space-y-3">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="text-white font-medium mb-4 flex items-center justify-center gap-2"
        >
          <span>💡</span>
          <span>Boost Your Savings</span>
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-white font-medium">Auto-Save</h4>
            </div>
          </div>
          <p className="text-white/70 text-sm mb-4 leading-relaxed">
            Round up purchases and save the change automatically. Could save an extra £50-100/month.
          </p>
          <Button
            size="sm"
            className="w-full bg-white text-black hover:bg-white/90 font-medium rounded-xl"
            onClick={() => alert('Auto-save setup would open here!')}
          >
            Enable Auto-Save
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-white font-medium">Savings Challenge</h4>
            </div>
          </div>
          <p className="text-white/70 text-sm mb-4 leading-relaxed">
            Try saving £20 per week this month and reach your £{savingsGoal} goal!
          </p>
          <Button
            size="sm"
            className="w-full bg-white text-black hover:bg-white/90 font-medium rounded-xl"
            onClick={() => alert('Savings challenge would start here!')}
          >
            Join Challenge
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
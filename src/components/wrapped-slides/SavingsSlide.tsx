import React from 'react';
import { motion } from 'motion/react';
import { PiggyBank, Star, Target, TrendingUp, Zap } from 'lucide-react';
import { ActionCard } from '../ActionCard';

export function SavingsSlide() {
  const savedAmount = 752.18;
  const savingsGoal = 1000;
  const progressPercentage = (savedAmount / savingsGoal) * 100;
  const remainingAmount = savingsGoal - savedAmount;
  const daysInMonth = 31;
  const dailySavingsNeeded = remainingAmount / daysInMonth;

  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 overflow-y-auto py-8">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mb-6"
      >
        <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
          <PiggyBank className="w-12 h-12 text-white" />
        </div>
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute -top-2 -right-2"
        >
          <Star className="w-8 h-8 text-yellow-400" />
        </motion.div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl text-white/80 mb-3"
      >
        You saved
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-5xl md:text-6xl text-white mb-4 font-medium"
      >
        £{savedAmount.toLocaleString()}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full max-w-md mb-6"
      >
        <div className="flex items-center justify-between mb-2 text-white/80">
          <span>Progress to goal</span>
          <span>{progressPercentage.toFixed(0)}%</span>
        </div>
        <div className="w-full bg-white/20 h-4 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 1.5, delay: 1 }}
            className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
          />
        </div>
        <div className="flex items-center gap-1 mt-2 text-white/60 justify-center">
          <Target className="w-4 h-4" />
          <span>Goal: £{savingsGoal.toLocaleString()}</span>
        </div>
      </motion.div>

      <div className="w-full max-w-md space-y-3">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-white text-lg mb-4"
        >
          💪 Boost Your Savings
        </motion.h3>

        <ActionCard
          icon={Target}
          title="Reach Your Goal"
          description={`Save £${dailySavingsNeeded.toFixed(2)} daily for the rest of the month to hit your target`}
          actionText="Set Daily Reminder"
          delay={1.4}
          onAction={() => alert('Daily savings reminder would be set up here!')}
        />

        <ActionCard
          icon={TrendingUp}
          title="Increase Your Goal"
          description="You're doing great! Consider raising your savings goal to £1,200"
          actionText="Update Goal"
          delay={1.6}
          variant="secondary"
          onAction={() => alert('Savings goal update would open here!')}
        />

        <ActionCard
          icon={Zap}
          title="Automate Savings"
          description="Set up automatic transfers to make saving effortless"
          actionText="Set Up Auto-Save"
          delay={1.8}
          onAction={() => alert('Auto-savings setup would open here!')}
        />
      </div>
    </div>
  );
}
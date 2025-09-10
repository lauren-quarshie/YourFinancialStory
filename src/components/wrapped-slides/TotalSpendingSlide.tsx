import React from 'react';
import { motion } from 'motion/react';
import { DollarSign, TrendingUp, TrendingDown, Target, PiggyBank } from 'lucide-react';
import { ActionCard } from '../ActionCard';

export function TotalSpendingSlide() {
  const totalSpent = 3247.82;
  const previousMonth = 2895.64;
  const difference = totalSpent - previousMonth;
  const percentageChange = ((difference / previousMonth) * 100).toFixed(1);
  const isIncrease = difference > 0;
  const suggestedBudget = Math.ceil(totalSpent * 0.95 / 100) * 100; // 5% reduction, rounded

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-6 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 overflow-y-auto py-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mb-6"
      >
        <DollarSign className="w-12 h-12 text-white" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl text-white/80 mb-3 text-center"
      >
        You spent a total of
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-5xl md:text-6xl text-white mb-4 font-medium text-center"
      >
        £{totalSpent.toLocaleString()}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex items-center gap-2 text-white/80 mb-8 justify-center"
      >
        {isIncrease ? (
          <TrendingUp className="w-5 h-5 text-red-400" />
        ) : (
          <TrendingDown className="w-5 h-5 text-green-400" />
        )}
        <span>
          {isIncrease ? '+' : ''}{percentageChange}% from last month
        </span>
      </motion.div>

      <div className="w-full max-w-md space-y-3">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-white text-lg mb-4 flex items-center gap-2"
        >
          <Target className="w-5 h-5" />
          Take Action
        </motion.h3>

        <ActionCard
          icon={Target}
          title="Set Next Month's Budget"
          description={`Try spending ${suggestedBudget < totalSpent ? '5% less' : 'within'} £${suggestedBudget.toLocaleString()} next month`}
          actionText="Set Budget"
          delay={1.2}
          onAction={() => alert('Budget setting feature would open here!')}
        />

        {isIncrease && (
          <ActionCard
            icon={PiggyBank}
            title="Savings Challenge"
            description={`Save the extra £${difference.toFixed(2)} you spent this month`}
            actionText="Start Challenge"
            delay={1.4}
            variant="secondary"
            onAction={() => alert('Savings challenge would start here!')}
          />
        )}
      </div>
    </div>
  );
}
import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, Calendar, Clock, Zap } from 'lucide-react';

export function TransactionsSlide() {
  const totalTransactions = 127;
  const avgPerDay = (totalTransactions / 31).toFixed(1);
  const busiestDay = 'Friday';
  const quickestTransaction = '0.8 seconds';

  const stats = [
    { label: 'Total Transactions', value: totalTransactions.toString(), icon: CreditCard },
    { label: 'Daily Average', value: avgPerDay, icon: Calendar },
    { label: 'Busiest Day', value: busiestDay, icon: Zap },
    { label: 'Quickest Payment', value: quickestTransaction, icon: Clock },
  ];

  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 overflow-y-auto py-8 pb-32">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl text-white mb-8"
      >
        Your Transaction Activity
      </motion.h2>

      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Icon className="w-6 h-6 text-white" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-xl text-white mb-2 font-medium"
              >
                {stat.value}
              </motion.div>
              
              <div className="text-white/70 text-sm">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-white/60 mt-8 max-w-md"
      >
        You were most active on Fridays, making an average of {avgPerDay} transactions per day.
      </motion.p>
    </div>
  );
}
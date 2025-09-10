import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, MapPin, Calendar, ThumbsUp, AlertCircle } from 'lucide-react';
import { ActionCard } from '../ActionCard';

export function BiggestPurchaseSlide() {
  const biggestPurchase = {
    amount: 1245.00,
    merchant: 'Best Buy',
    category: 'Electronics',
    date: 'December 15',
    description: 'New laptop for work'
  };

  const isGoodPurchase = biggestPurchase.category === 'Electronics' && biggestPurchase.description.includes('work');
  const percentageOfSpending = ((biggestPurchase.amount / 3247.82) * 100).toFixed(0);

  return (
    <div className="h-full w-full flex flex-col items-center text-center px-6 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 overflow-y-auto py-8 pb-32">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-6 mt-8 flex-shrink-0 aspect-square"
      >
        <ShoppingCart className="w-12 h-12 text-white" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl text-white/80 mb-3"
      >
        Your biggest purchase was
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-4xl text-white mb-4 font-medium"
      >
        £{biggestPurchase.amount.toLocaleString()}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-md w-full mb-6"
      >
        <h3 className="text-xl text-white mb-4">{biggestPurchase.description}</h3>
        
        <div className="space-y-2 text-white/70 mb-4">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{biggestPurchase.merchant}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{biggestPurchase.date}</span>
          </div>
        </div>

        <div className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg ${
          isGoodPurchase ? 'bg-green-500/20' : 'bg-yellow-500/20'
        }`}>
          {isGoodPurchase ? (
            <>
              <ThumbsUp className="w-4 h-4 text-green-400" />
              <span className="text-green-400">Smart Investment!</span>
            </>
          ) : (
            <>
              <AlertCircle className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400">Consider Next Time</span>
            </>
          )}
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-white/60 mb-6 max-w-md"
      >
        That's {percentageOfSpending}% of your total spending this month.
      </motion.p>

      <div className="w-full max-w-md space-y-3">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-white text-lg mb-4"
        >
          🎯 Purchase Analysis
        </motion.h3>

        <ActionCard
          icon={AlertCircle}
          title="Set Purchase Limit"
          description="Set alerts for purchases over £500 to help with mindful spending"
          actionText="Set Alert"
          delay={1.4}
          onAction={() => alert('Purchase alert would be set up here!')}
        />

        <ActionCard
          icon={ThumbsUp}
          title="Track ROI"
          description="Monitor how this investment pays off over the next 6 months"
          actionText="Add to Tracker"
          delay={1.6}
          variant="secondary"
          onAction={() => alert('Investment tracker would open here!')}
        />
      </div>
    </div>
  );
}
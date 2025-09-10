import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Share, Heart, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { ActionCard } from '../ActionCard';

export function SummarySlide() {
  const actionPlan = [
    "Set monthly budget of £3,100 (5% reduction)",
    "Start daily £8 savings challenge",
    "Set up coffee budget of £80/month",
    "Enable spending alerts for purchases over £500"
  ];

  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-y-auto py-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mb-6"
      >
        <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
          <Trophy className="w-12 h-12 text-white" />
        </div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute -top-2 -right-2"
        >
          <Star className="w-8 h-8 text-yellow-400" />
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-3xl md:text-4xl text-white mb-3"
      >
        That's a Wrap!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-lg text-white/80 mb-6 max-w-md"
      >
        Your December Financial Review is complete. 
        Ready to make January even better?
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid grid-cols-2 gap-4 mb-8 w-full max-w-xs"
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <div className="text-2xl text-white mb-1">£3,247</div>
          <div className="text-white/60 text-sm">Total Spent</div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <div className="text-2xl text-white mb-1">£752</div>
          <div className="text-white/60 text-sm">Saved</div>
        </div>
      </motion.div>

      <div className="w-full max-w-md space-y-4 mb-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-white text-lg mb-4"
        >
          🎯 Your January Action Plan
        </motion.h3>

        {actionPlan.map((action, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            className="flex items-center gap-3 bg-white/5 rounded-lg p-3 text-left"
          >
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span className="text-white/90 text-sm">{action}</span>
          </motion.div>
        ))}
      </div>

      <div className="w-full max-w-md space-y-3 mb-6">
        <ActionCard
          icon={ArrowRight}
          title="Activate All Recommendations"
          description="Set up all your personalized financial tools with one click"
          actionText="Activate All"
          delay={1.8}
          onAction={() => alert('All recommendations would be activated here!')}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="flex gap-4"
      >
        <Button
          size="sm"
          className="bg-white text-black hover:bg-white/90 flex items-center gap-2"
        >
          <Share className="w-4 h-4" />
          Share Progress
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 flex items-center gap-2"
        >
          <Heart className="w-4 h-4" />
          Save Plan
        </Button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="text-white/40 mt-6 text-sm"
      >
        Ready to crush your financial goals in January! 🚀
      </motion.p>
    </div>
  );
}
import React from 'react';
import { motion } from 'motion/react';
import { 
  Share, 
  Download, 
  Calendar, 
  TrendingUp, 
  Target, 
  Star,
  Heart,
  Coffee,
  PiggyBank
} from 'lucide-react';
import { Button } from '../ui/button';

const highlights = [
  { icon: Coffee, label: 'Total Spent', value: '£3,247', color: 'from-amber-500 to-orange-500' },
  { icon: PiggyBank, label: 'Saved', value: '£487', color: 'from-green-500 to-emerald-500' },
  { icon: TrendingUp, label: 'Top Category', value: 'Shopping', color: 'from-pink-500 to-rose-500' },
  { icon: Target, label: 'Goals Hit', value: '3/4', color: 'from-blue-500 to-cyan-500' },
];

export function MobileSummarySlide() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My December Financial Review',
        text: 'Check out my December financial insights! 💰',
        url: window.location.href,
      });
    } else {
      alert('Sharing feature would work here!');
    }
  };

  const handleDownload = () => {
    alert('PDF download would start here!');
  };

  return (
    <div className="h-full w-full flex flex-col px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-y-auto py-8 pb-32 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-4 w-20 h-20 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-4 w-24 h-24 bg-pink-400 rounded-full blur-lg"></div>
        <div className="absolute top-1/3 right-8 w-16 h-16 bg-purple-400 rounded-full blur-lg"></div>
        <div className="absolute top-2/3 left-8 w-12 h-12 bg-indigo-400 rounded-full blur-lg"></div>
      </div>

      <div className="text-center mb-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="relative mx-auto mb-4"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/30">
            <Star className="w-10 h-10 text-white" />
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-1 -right-1"
          >
            <Heart className="w-6 h-6 text-pink-400 fill-current" />
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl text-white mb-2 font-medium"
        >
          That's a Wrap!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/70 text-sm mb-6"
        >
          Your December financial journey in numbers
        </motion.p>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {highlights.map((highlight, index) => (
          <motion.div
            key={highlight.label}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 + index * 0.1, type: "spring" }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center"
          >
            <div className={`w-10 h-10 bg-gradient-to-r ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
              <highlight.icon className="w-5 h-5 text-white" />
            </div>
            <div className="text-white font-medium text-lg mb-1">{highlight.value}</div>
            <div className="text-white/60 text-xs">{highlight.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Achievement Badge */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-4 border border-yellow-400/30 mb-8"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <Star className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-white font-medium">Smart Spender</h4>
            <p className="text-yellow-200 text-sm">Achievement Unlocked!</p>
          </div>
        </div>
        <p className="text-white/80 text-sm leading-relaxed">
          You stayed within budget for 3 out of 4 categories and increased your savings by 12.5%. Keep it up! 🎉
        </p>
      </motion.div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <Button
            onClick={handleShare}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-2xl py-4 font-medium"
          >
            <Share className="w-5 h-5 mr-2" />
            Share My Review
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <Button
            onClick={handleDownload}
            variant="outline"
            className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-2xl py-4 font-medium"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Report
          </Button>
        </motion.div>
      </div>

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="mt-8 text-center"
      >
        <p className="text-white/60 text-sm mb-4">Ready for January?</p>
        <div className="flex gap-2 justify-center">
          <Button
            size="sm"
            variant="ghost"
            className="text-white/80 hover:text-white hover:bg-white/10 rounded-xl"
            onClick={() => alert('Budget setup would open here!')}
          >
            Set January Budget
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="text-white/80 hover:text-white hover:bg-white/10 rounded-xl"
            onClick={() => alert('Goals setup would open here!')}
          >
            New Goals
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
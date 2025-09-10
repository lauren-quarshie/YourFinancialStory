import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Car, Coffee, Home, AlertCircle, Bell } from 'lucide-react';
import { Button } from '../ui/button';

const categories = [
  { name: 'Shopping', amount: 892.45, icon: ShoppingBag, color: 'from-pink-500 to-rose-500', percentage: 27.5 },
  { name: 'Transportation', amount: 654.23, icon: Car, color: 'from-blue-500 to-cyan-500', percentage: 20.1 },
  { name: 'Food & Dining', amount: 543.67, icon: Coffee, color: 'from-amber-500 to-orange-500', percentage: 16.7 },
  { name: 'Bills & Utilities', amount: 432.18, icon: Home, color: 'from-green-500 to-emerald-500', percentage: 13.3 },
];

export function MobileTopCategoriesSlide() {
  const topCategory = categories[0];
  const isOverBudget = topCategory.amount > 800; // Assuming $800 budget for shopping

  return (
    <div className="h-full w-full flex flex-col px-6 bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 overflow-y-auto py-8 pb-32 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-4 w-16 h-16 bg-white rounded-lg rotate-12"></div>
        <div className="absolute bottom-32 right-4 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-1/3 right-8 w-12 h-12 bg-white rounded-lg -rotate-12"></div>
      </div>

      <div className="text-center mb-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="w-20 h-20 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto shadow-2xl shadow-purple-500/30"
        >
          <ShoppingBag className="w-10 h-10 text-white" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl text-white mb-2 font-medium"
        >
          Top Categories
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/70 text-sm"
        >
          Where your money went this month
        </motion.p>
      </div>

      <div className="flex-1 space-y-3 mb-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">{category.name}</div>
                  <div className="text-white/60 text-sm">{category.percentage}% of spending</div>
                </div>
              </div>
              <div className="text-white font-medium">£{category.amount.toLocaleString()}</div>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-white/20 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${category.percentage}%` }}
                transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Action Cards */}
      <div className="space-y-3">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-white font-medium mb-4 flex items-center justify-center gap-2"
        >
          <span>💡</span>
          <span>Smart Actions</span>
        </motion.h3>

        {isOverBudget && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-4 border border-red-400/30"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium">Shopping Alert</h4>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-4 leading-relaxed">
              You spent £{(topCategory.amount - 800).toFixed(2)} over your shopping budget. Set spending alerts to stay on track.
            </p>
            <Button
              size="sm"
              className="w-full bg-white text-black hover:bg-white/90 font-medium rounded-xl"
              onClick={() => alert('Spending alerts feature would open here!')}
            >
              Set Spending Alerts
            </Button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <Bell className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-white font-medium">Smart Notifications</h4>
            </div>
          </div>
          <p className="text-white/70 text-sm mb-4 leading-relaxed">
            Get notified before you exceed category budgets and receive weekly spending summaries.
          </p>
          <Button
            size="sm"
            className="w-full bg-white text-black hover:bg-white/90 font-medium rounded-xl"
            onClick={() => alert('Notification settings would open here!')}
          >
            Enable Notifications
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
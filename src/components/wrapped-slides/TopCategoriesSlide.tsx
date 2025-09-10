import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Car, Home, Coffee, Gamepad2, AlertTriangle, Lightbulb } from 'lucide-react';
import { ActionCard } from '../ActionCard';

export function TopCategoriesSlide() {
  const categories = [
    { name: 'Housing', amount: 1245.00, icon: Home, color: 'from-purple-500 to-violet-500', recommended: 1200 },
    { name: 'Shopping', amount: 892.45, icon: ShoppingBag, color: 'from-pink-500 to-rose-500', recommended: 600 },
    { name: 'Transportation', amount: 467.32, icon: Car, color: 'from-blue-500 to-indigo-500', recommended: 400 },
    { name: 'Food & Dining', amount: 387.64, icon: Coffee, color: 'from-orange-500 to-amber-500', recommended: 350 },
    { name: 'Entertainment', amount: 255.41, icon: Gamepad2, color: 'from-green-500 to-emerald-500', recommended: 200 },
  ];

  const maxAmount = Math.max(...categories.map(cat => cat.amount));
  const overspentCategory = categories.find(cat => cat.amount > cat.recommended);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-6 bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 overflow-y-auto py-8">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl md:text-3xl text-white mb-6 text-center"
      >
        Your Top Spending Categories
      </motion.h2>

      <div className="w-full max-w-md space-y-4 mb-6">
        {categories.slice(0, 4).map((category, index) => {
          const percentage = (category.amount / maxAmount) * 100;
          const Icon = category.icon;
          const isOverBudget = category.amount > category.recommended;
          
          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="relative"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-white">{category.name}</span>
                    {isOverBudget && <AlertTriangle className="w-4 h-4 text-yellow-400" />}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-medium">£{category.amount.toLocaleString()}</div>
                  <div className="text-white/60 text-xs">Budget: £{category.recommended}</div>
                </div>
              </div>
              
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                  className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="w-full max-w-md space-y-3">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-white text-lg mb-4 flex items-center gap-2"
        >
          <Lightbulb className="w-5 h-5" />
          Smart Recommendations
        </motion.h3>

        {overspentCategory && (
          <ActionCard
            icon={AlertTriangle}
            title={`Reduce ${overspentCategory.name} Spending`}
            description={`You're £${(overspentCategory.amount - overspentCategory.recommended).toFixed(2)} over budget in this category`}
            actionText="Set Spending Alert"
            delay={1.2}
            onAction={() => alert('Spending alert would be set up here!')}
          />
        )}

        <ActionCard
          icon={ShoppingBag}
          title="Smart Shopping Challenge"
          description="Try a 30-day no-spend challenge for non-essentials"
          actionText="Start Challenge"
          delay={1.4}
          variant="secondary"
          onAction={() => alert('Shopping challenge would start here!')}
        />
      </div>
    </div>
  );
}
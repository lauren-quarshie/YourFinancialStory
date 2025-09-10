import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Coffee, Clock, Sparkles, Target, Bell } from 'lucide-react';
import { ActionCard } from '../ActionCard';

export function FunFactsSlide() {
  const funFacts = [
    {
      icon: Coffee,
      title: 'Coffee Lover',
      description: 'You bought coffee 23 times this month',
      detail: "That's £115 on coffee! ☕",
      actionable: true
    },
    {
      icon: Clock,
      title: 'Night Owl Spender',
      description: 'Most purchases were made after 8 PM',
      detail: 'Late night shopping sessions are your thing! 🌙',
      actionable: true
    },
    {
      icon: Sparkles,
      title: 'Weekend Warrior',
      description: '47% of spending happened on weekends',
      detail: 'Saturday shopping sprees for the win! 🛍️',
      actionable: false
    }
  ];

  return (
    <div className="h-full w-full flex flex-col px-6 bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 overflow-y-auto py-8 pb-32">
      <div className="text-center mb-6">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto"
        >
          <Lightbulb className="w-10 h-10 text-white" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl text-white mb-8"
        >
          Fun Facts & Insights
        </motion.h2>
      </div>

      <div className="flex-1 space-y-4 w-full max-w-md mb-8">
        {funFacts.map((fact, index) => {
          const Icon = fact.icon;
          
          return (
            <motion.div
              key={fact.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg text-white mb-1">{fact.title}</h3>
                  <p className="text-white/80 mb-2">{fact.description}</p>
                  <p className="text-white/60 text-sm">{fact.detail}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="w-full max-w-md space-y-3">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-white text-lg mb-4"
        >
          🚀 Behavior Hacks
        </motion.h3>

        <ActionCard
          icon={Target}
          title="Coffee Budget Challenge"
          description="Try making coffee at home 3 days a week to save £45/month"
          actionText="Start Challenge"
          delay={1.6}
          onAction={() => alert('Coffee challenge would start here!')}
        />

        <ActionCard
          icon={Bell}
          title="Evening Spending Alert"
          description="Get a gentle reminder before making purchases after 8 PM"
          actionText="Set Reminder"
          delay={1.8}
          variant="secondary"
          onAction={() => alert('Evening alert would be set up here!')}
        />
      </div>
    </div>
  );
}
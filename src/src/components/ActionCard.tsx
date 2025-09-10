import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { Button } from './ui/button';

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionText: string;
  onAction?: () => void;
  delay?: number;
  variant?: 'primary' | 'secondary';
}

export function ActionCard({ 
  icon: Icon, 
  title, 
  description, 
  actionText, 
  onAction, 
  delay = 0,
  variant = 'primary' 
}: ActionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-colors"
    >
      <div className="flex items-start gap-1">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
          variant === 'primary' 
            ? 'bg-gradient-to-r from-blue-400 to-cyan-500' 
            : 'bg-gradient-to-r from-purple-400 to-pink-500'
        }`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        
        <div className="flex-1 text-left">
          <h4 className="text-white mb-1 text-left">{title}</h4>
          <p className="text-white/70 text-sm mb-3 text-left">{description}</p>
          <Button
            onClick={onAction}
            size="sm"
            className="bg-white text-black hover:bg-white/90 h-8"
          >
            {actionText}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
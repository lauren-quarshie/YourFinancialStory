import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, MoreHorizontal, Battery, Signal, Wifi } from 'lucide-react';
import { Button } from './ui/button';
import { MobileFinancialWrapped } from './MobileFinancialWrapped';

export function IPhoneMockup() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="relative">
        {/* iPhone 15 Frame */}
        <div className="relative w-[393px] h-[852px] bg-black rounded-[55px] p-2 shadow-2xl">
          {/* iPhone Screen */}
          <div className="w-full h-full bg-black rounded-[47px] overflow-hidden relative">
            {/* Dynamic Island */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-b-[20px] z-50"></div>
            
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-[47px] flex items-center justify-between px-8 pt-2 z-40 bg-gradient-to-b from-black/20 to-transparent">
              <div className="text-white font-medium">{currentTime}</div>
              <div className="flex items-center gap-1">
                <Signal className="w-4 h-4 text-white" />
                <Wifi className="w-4 h-4 text-white" />
                <Battery className="w-6 h-3 text-white" />
              </div>
            </div>

            {/* App Header */}
            <div className="absolute top-[47px] left-0 right-0 h-16 bg-gradient-to-b from-black/30 to-transparent z-30 flex items-center justify-between px-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                <div>
                  <div className="text-white font-medium">MoneyWise</div>
                  <div className="text-white/60 text-xs">Year in Review</div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10 w-8 h-8 p-0"
                onClick={() => setIsFullscreen(!isFullscreen)}
              >
                {isFullscreen ? <X className="w-5 h-5" /> : <MoreHorizontal className="w-5 h-5" />}
              </Button>
            </div>

            {/* App Content */}
            <div className="absolute top-[111px] bottom-0 left-0 right-0 overflow-hidden">
              <motion.div
                animate={{ scale: isFullscreen ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <MobileFinancialWrapped />
              </motion.div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[134px] h-[5px] bg-white/30 rounded-full"></div>
          </div>
        </div>

        {/* iPhone Model Label */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-gray-800 font-medium mb-1">iPhone 15</div>
          <div className="text-gray-600 text-sm">MoneyWise Banking App</div>
        </div>
      </div>
    </div>
  );
}
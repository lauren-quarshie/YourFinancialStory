import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { ChevronLeft, Share, X, TrendingUp, PiggyBank, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';

// Temporary demo slides until we copy all components
const DemoSlide = ({ title, icon: Icon, content }: { title: string; icon: any; content: string }) => (
  <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white p-8">
    <div className="text-center">
      <Icon className="w-16 h-16 mx-auto mb-6 text-white/90" />
      <h2 className="text-3xl font-medium mb-4">{title}</h2>
      <p className="text-lg text-white/80 leading-relaxed">{content}</p>
    </div>
  </div>
);

const slides = [
  () => <DemoSlide 
    title="Welcome" 
    icon={TrendingUp} 
    content="Your December financial journey awaits! Let's explore your spending patterns and achievements." 
  />,
  () => <DemoSlide 
    title="Total Spending" 
    icon={ShoppingBag} 
    content="You spent £2,847.23 this month. That's 12% less than last month - great progress!" 
  />,
  () => <DemoSlide 
    title="Top Categories" 
    icon={TrendingUp} 
    content="Groceries (£892), Entertainment (£445), and Transport (£234) were your biggest expenses." 
  />,
  () => <DemoSlide 
    title="Savings" 
    icon={PiggyBank} 
    content="You saved £453.77 this month! You're on track to meet your yearly savings goal." 
  />,
];

interface MobileFinancialWrappedProps {
  onClose?: () => void;
}

export function MobileFinancialWrapped({ onClose }: MobileFinancialWrappedProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const constraintsRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    
    if (info.offset.x > swipeThreshold && currentSlide > 0) {
      prevSlide();
    } else if (info.offset.x < -swipeThreshold && currentSlide < slides.length - 1) {
      nextSlide();
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Monthly Financial Review',
        text: 'Check out my December financial insights!',
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="h-full w-full overflow-hidden relative bg-black">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/50 to-transparent z-50 flex items-center justify-between px-4">
        {currentSlide > 0 && (
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10 w-10 h-10 p-0 rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
        )}
        
        <div className="flex-1 flex justify-center">
          <div className="flex space-x-1.5">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white w-6'
                    : index < currentSlide
                    ? 'bg-white/60 w-1.5'
                    : 'bg-white/30 w-1.5'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10 w-10 h-10 p-0 rounded-full"
            onClick={handleShare}
          >
            <Share className="w-4 h-4" />
          </Button>
          {onClose && (
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 w-10 h-10 p-0 rounded-full"
              onClick={onClose}
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Slide Content */}
      <div className="h-full w-full pt-16" ref={constraintsRef}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.25, 0.46, 0.45, 0.94] // iOS-like easing
            }}
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            className="h-full w-full cursor-grab active:cursor-grabbing"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation (iOS style) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent z-40 flex items-center justify-center pb-8">
        {currentSlide < slides.length - 1 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              onClick={nextSlide}
              className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-3 font-medium shadow-lg"
            >
              Continue
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              onClick={onClose || (() => window.location.reload())}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-full px-8 py-3 font-medium shadow-lg"
            >
              Done
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
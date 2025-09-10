import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';
import { WelcomeSlide } from './wrapped-slides/WelcomeSlide';
import { TotalSpendingSlide } from './wrapped-slides/TotalSpendingSlide';
import { TopCategoriesSlide } from './wrapped-slides/TopCategoriesSlide';
import { SavingsSlide } from './wrapped-slides/SavingsSlide';
import { TransactionsSlide } from './wrapped-slides/TransactionsSlide';
import { BiggestPurchaseSlide } from './wrapped-slides/BiggestPurchaseSlide';
import { FunFactsSlide } from './wrapped-slides/FunFactsSlide';
import { SummarySlide } from './wrapped-slides/SummarySlide';

const slides = [
  WelcomeSlide,
  TotalSpendingSlide,
  TopCategoriesSlide,
  SavingsSlide,
  TransactionsSlide,
  BiggestPurchaseSlide,
  FunFactsSlide,
  SummarySlide,
];

export function FinancialWrapped() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-full w-full"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <Button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          variant="outline"
          size="sm"
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 disabled:opacity-30"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Button>
        <Button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          size="sm"
          className="bg-white text-black hover:bg-white/90 disabled:opacity-30"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
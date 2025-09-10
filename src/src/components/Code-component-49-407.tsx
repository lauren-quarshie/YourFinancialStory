import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, TrendingUp, PiggyBank, ShoppingBag, Calendar } from 'lucide-react';
import { Button } from './ui/button';

// Temporary demo slides for desktop version
const DemoSlide = ({ title, icon: Icon, content, color }: { 
  title: string; 
  icon: any; 
  content: string;
  color: string;
}) => (
  <div className={`h-full w-full flex items-center justify-center ${color} text-white p-12`}>
    <div className="text-center max-w-2xl">
      <Icon className="w-20 h-20 mx-auto mb-8 text-white/90" />
      <h2 className="text-4xl font-medium mb-6">{title}</h2>
      <p className="text-xl text-white/80 leading-relaxed">{content}</p>
    </div>
  </div>
);

const slides = [
  {
    component: () => <DemoSlide 
      title="December Financial Review" 
      icon={Calendar} 
      content="Welcome to your monthly financial journey! Let's explore your spending patterns, savings achievements, and actionable insights for the month ahead."
      color="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"
    />,
  },
  {
    component: () => <DemoSlide 
      title="Total Spending: £2,847.23" 
      icon={ShoppingBag} 
      content="You spent £2,847.23 this month. That's 12% less than November - excellent progress! Your spending discipline is really paying off."
      color="bg-gradient-to-br from-green-500 via-teal-600 to-blue-600"
    />,
  },
  {
    component: () => <DemoSlide 
      title="Top Categories" 
      icon={TrendingUp} 
      content="Your biggest expenses: Groceries (£892), Entertainment (£445), and Transport (£234). Consider setting up spending alerts for these categories."
      color="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600"
    />,
  },
  {
    component: () => <DemoSlide 
      title="Savings: £453.77" 
      icon={PiggyBank} 
      content="Amazing! You saved £453.77 this month. You're 89% on track to meet your yearly savings goal of £6,000. Keep up the fantastic work!"
      color="bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-600"
    />,
  },
];

export function FinancialWrapped() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="h-full w-full relative overflow-hidden">
      {/* Navigation */}
      <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/10 rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        
        {/* Progress indicators */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 w-2'
              }`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/10 rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Slide Content */}
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        transition={{ duration: 0.5 }}
        className="h-full w-full"
      >
        <CurrentSlideComponent />
      </motion.div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-4 left-4 right-4 z-50 flex justify-center">
        <Button
          onClick={nextSlide}
          className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full px-8 py-3"
        >
          {currentSlide === slides.length - 1 ? 'Start Over' : 'Next'}
        </Button>
      </div>
    </div>
  );
}
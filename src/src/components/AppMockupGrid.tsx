import React from 'react';
import { motion } from 'motion/react';
import { MobileFinancialWrapped } from './MobileFinancialWrapped';
import { FinancialWrapped } from './FinancialWrapped';
import { Button } from './ui/button';
import { Smartphone, Monitor, Zap, Layout, Palette, Share } from 'lucide-react';

export function AppMockupGrid() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-medium text-gray-900 mb-4">
              Monthly Financial Review
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              Interactive iPhone 15 mockups showcasing the Monthly Financial Review feature 
              for modern banking apps
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                <Smartphone className="w-4 h-4 mr-1" />
                Mobile First
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
                <Zap className="w-4 h-4 mr-1" />
                Interactive
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                <Layout className="w-4 h-4 mr-1" />
                Responsive
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800">
                <Palette className="w-4 h-4 mr-1" />
                Animated
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Mobile Version */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-medium text-gray-900 mb-3">Mobile Experience</h2>
                <p className="text-gray-600 mb-4">
                  Swipe through your monthly financial journey with smooth animations 
                  and actionable insights designed for mobile-first banking.
                </p>
              </div>

              {/* iPhone 15 Mockup Container */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* iPhone 15 Frame */}
                  <div className="w-[280px] h-[570px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
                    {/* Screen */}
                    <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                      {/* Dynamic Island */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-full z-10" />
                      
                      {/* App Content */}
                      <div className="w-full h-full">
                        <MobileFinancialWrapped />
                      </div>
                    </div>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-[2.5rem] blur-2xl -z-10 scale-110" />
                </div>
              </div>

              {/* Features */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-medium text-gray-900 mb-2">Interactive Slides</h3>
                  <p className="text-gray-600 text-sm">
                    8 animated slides with swipe gestures, monthly insights, and smooth transitions
                  </p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-medium text-gray-900 mb-2">Smart Actions</h3>
                  <p className="text-gray-600 text-sm">
                    Actionable recommendations with one-tap setup for budgets and alerts
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Version */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8 pb-0">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-medium text-gray-900 mb-3">Desktop Experience</h2>
                  <p className="text-gray-600 mb-4">
                    Full-screen financial overview with detailed analytics and 
                    comprehensive action plans for desktop users.
                  </p>
                </div>
              </div>

              {/* Desktop Mockup */}
              <div className="h-[400px] bg-gray-100 border-t border-gray-200">
                <FinancialWrapped />
              </div>

              {/* Desktop Features */}
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Monitor className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">Large Screen</h4>
                      <p className="text-gray-600 text-xs">Optimized layouts</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Share className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">Easy Sharing</h4>
                      <p className="text-gray-600 text-xs">Export & collaborate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-medium mb-4">Ready to integrate?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              This Monthly Financial Review component is production-ready and can be easily 
              integrated into your banking app or financial platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                View Documentation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Components
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
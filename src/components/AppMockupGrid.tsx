import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, RotateCcw, Monitor, Smartphone } from 'lucide-react';
import { Button } from './ui/button';
import { IPhoneMockup } from './iPhoneMockup';
import { MobileFinancialWrapped } from './MobileFinancialWrapped';

export function AppMockupGrid() {
  const [selectedView, setSelectedView] = useState<'phone' | 'app'>('phone');
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-medium text-gray-900 mb-4">
            Monthly Financial Review
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Interactive iPhone 15 mockups showcasing the Monthly Financial Review feature 
            for modern banking apps
          </p>
          
          {/* View Toggle */}
          <div className="flex items-center justify-center gap-2 p-1 bg-white rounded-2xl shadow-sm w-fit mx-auto">
            <Button
              variant={selectedView === 'phone' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSelectedView('phone')}
              className="rounded-xl font-medium"
            >
              <Smartphone className="w-4 h-4 mr-2" />
              Phone Mockup
            </Button>
            <Button
              variant={selectedView === 'app' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSelectedView('app')}
              className="rounded-xl font-medium"
            >
              <Monitor className="w-4 h-4 mr-2" />
              App View
            </Button>
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="rounded-xl"
          >
            {isAutoPlay ? (
              <>
                <Pause className="w-4 h-4 mr-2" />
                Pause Demo
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Auto Demo
              </>
            )}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.location.reload()}
            className="rounded-xl"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        {selectedView === 'phone' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <IPhoneMockup />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="h-[700px] relative">
                <MobileFinancialWrapped />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
            <Smartphone className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-medium text-gray-900 mb-2">iPhone 15 Optimized</h3>
          <p className="text-gray-600 text-sm">
            Pixel-perfect design optimized for iPhone 15 dimensions and iOS interface guidelines
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-medium text-gray-900 mb-2">Interactive Slides</h3>
          <p className="text-gray-600 text-sm">
            8 animated slides with swipe gestures, monthly insights, and smooth transitions
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
            <Monitor className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-medium text-gray-900 mb-2">Banking App Ready</h3>
          <p className="text-gray-600 text-sm">
            Production-ready components with real financial insights and user actions
          </p>
        </div>
      </motion.div>

      {/* Technical Details */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
      >
        <h3 className="font-medium text-gray-900 mb-4">Technical Implementation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Frontend Stack</h4>
            <ul className="space-y-1">
              <li>• React 18 with TypeScript</li>
              <li>• Tailwind CSS v4 for styling</li>
              <li>• Motion/React for animations</li>
              <li>• shadcn/ui component library</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Features</h4>
            <ul className="space-y-1">
              <li>• Touch/swipe gesture support</li>
              <li>• iOS-native styling patterns</li>
              <li>• Responsive design system</li>
              <li>• Production-ready components</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
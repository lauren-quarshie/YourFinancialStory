import React, { useState } from 'react';
import { MobileFinancialWrapped } from './components/MobileFinancialWrapped';
import { FinancialWrapped } from './components/FinancialWrapped';
import { Button } from './components/ui/button';
import { Smartphone, Monitor } from 'lucide-react';

// Figma-optimized version with device switching
export default function FigmaApp() {
  const [viewMode, setViewMode] = useState<'mobile' | 'desktop'>('mobile');
  
  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col">
      {/* Header with device switcher */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between shadow-sm">
        <div>
          <h1 className="text-lg font-medium text-gray-900">Monthly Financial Review</h1>
          <p className="text-sm text-gray-600">Interactive prototype for banking apps</p>
        </div>
        
        <div className="flex gap-2">
          <Button
            variant={viewMode === 'mobile' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('mobile')}
            className="flex items-center gap-2"
          >
            <Smartphone className="w-4 h-4" />
            Mobile
          </Button>
          <Button
            variant={viewMode === 'desktop' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('desktop')}
            className="flex items-center gap-2"
          >
            <Monitor className="w-4 h-4" />
            Desktop
          </Button>
        </div>
      </div>

      {/* Prototype content */}
      <div className="flex-1 flex items-center justify-center p-4">
        {viewMode === 'mobile' ? (
          <div className="w-full max-w-sm">
            <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl">
              <div className="bg-white rounded-[2rem] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
                <MobileFinancialWrapped />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
            <div style={{ height: '600px' }}>
              <FinancialWrapped />
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 p-3 text-center">
        <p className="text-xs text-gray-500">
          Swipe or use arrow keys to navigate • Click action buttons to see interactions
        </p>
      </div>
    </div>
  );
}
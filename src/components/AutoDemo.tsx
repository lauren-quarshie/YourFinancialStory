import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { AppMockupGrid } from './AppMockupGrid';

interface AutoDemoProps {
  onComplete?: () => void;
}

export function AutoDemo({ onComplete }: AutoDemoProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRecording, setIsRecording] = useState(false);

  const demoSteps = [
    {
      name: "App Overview",
      duration: 3000,
      action: "show-full-app"
    },
    {
      name: "Mobile Swipe Demo",
      duration: 8000,
      action: "simulate-mobile-swipes"
    },
    {
      name: "Desktop Slides",
      duration: 10000,
      action: "cycle-desktop-slides"
    },
    {
      name: "Interaction Demo",
      duration: 5000,
      action: "show-interactions"
    }
  ];

  useEffect(() => {
    if (!isRecording) return;

    const timer = setTimeout(() => {
      if (currentStep < demoSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setIsRecording(false);
        onComplete?.();
      }
    }, demoSteps[currentStep]?.duration || 3000);

    return () => clearTimeout(timer);
  }, [currentStep, isRecording, onComplete]);

  const startDemo = () => {
    setCurrentStep(0);
    setIsRecording(true);
  };

  const stopDemo = () => {
    setIsRecording(false);
    setCurrentStep(0);
  };

  return (
    <div className="w-full h-screen relative">
      {/* Demo Controls */}
      <div className="absolute top-4 left-4 z-50 bg-black/80 text-white p-4 rounded-lg">
        <div className="flex items-center gap-4 mb-2">
          <button
            onClick={startDemo}
            disabled={isRecording}
            className="px-4 py-2 bg-red-600 text-white rounded disabled:opacity-50"
          >
            {isRecording ? 'Recording...' : 'Start Demo'}
          </button>
          <button
            onClick={stopDemo}
            disabled={!isRecording}
            className="px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50"
          >
            Stop
          </button>
        </div>
        
        {isRecording && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span>Recording Step {currentStep + 1} of {demoSteps.length}</span>
            </div>
            <div className="text-sm opacity-75">
              {demoSteps[currentStep]?.name}
            </div>
            <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-red-500"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ 
                  duration: (demoSteps[currentStep]?.duration || 3000) / 1000,
                  ease: 'linear'
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Demo Instructions Overlay */}
      {!isRecording && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-40">
          <div className="bg-white p-8 rounded-lg max-w-md mx-4">
            <h2 className="text-xl mb-4">Video Demo Instructions</h2>
            <div className="space-y-3 text-sm mb-6">
              <p>1. Click "Start Demo" to begin the automated demonstration</p>
              <p>2. Start your screen recording software (OBS, Loom, etc.)</p>
              <p>3. The demo will automatically cycle through all features</p>
              <p>4. Total demo duration: ~26 seconds</p>
            </div>
            <div className="space-y-2 text-xs text-gray-600">
              <p><strong>Demo Steps:</strong></p>
              {demoSteps.map((step, index) => (
                <p key={index}>• {step.name} ({step.duration/1000}s)</p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main App Content */}
      <div className={`transition-all duration-500 ${
        isRecording ? 'scale-100' : 'scale-95 opacity-50'
      }`}>
        <AppMockupGrid />
      </div>
    </div>
  );
}

export default AutoDemo;
import { useState } from 'react';
import { AppMockupGrid } from './AppMockupGrid';

export function MeasurementOverlay() {
  const [showMeasurements, setShowMeasurements] = useState(true);

  const measurements = [
    // iPhone Mockup measurements
    { id: 'iphone-width', x: 50, y: 100, width: 320, height: 2, label: '320px', orientation: 'horizontal' },
    { id: 'iphone-height', x: 48, y: 100, width: 2, height: 640, label: '640px', orientation: 'vertical' },
    { id: 'screen-padding', x: 58, y: 108, width: 304, height: 2, label: '304px (screen)', orientation: 'horizontal' },
    
    // Mobile slide measurements  
    { id: 'slide-padding', x: 90, y: 132, width: 32, height: 2, label: '32px padding', orientation: 'horizontal' },
    { id: 'content-width', x: 122, y: 140, width: 256, height: 2, label: '256px content', orientation: 'horizontal' },
    
    // Spacing measurements
    { id: 'element-gap', x: 150, y: 200, width: 2, height: 24, label: '24px', orientation: 'vertical' },
    { id: 'card-gap', x: 200, y: 300, width: 2, height: 16, label: '16px', orientation: 'vertical' },
    
    // Desktop grid measurements
    { id: 'desktop-card', x: 500, y: 100, width: 400, height: 2, label: '400px', orientation: 'horizontal' },
    { id: 'desktop-height', x: 498, y: 100, width: 2, height: 300, label: '300px', orientation: 'vertical' },
    { id: 'grid-gap', x: 924, y: 108, width: 24, height: 2, label: '24px gap', orientation: 'horizontal' },
  ];

  const Measurement = ({ measurement }: { measurement: any }) => (
    <div
      className="absolute pointer-events-none"
      style={{
        left: measurement.x,
        top: measurement.y,
        width: measurement.width,
        height: measurement.height,
      }}
    >
      {/* Measurement line */}
      <div 
        className={`bg-red-500 ${measurement.orientation === 'horizontal' ? 'w-full h-0.5' : 'w-0.5 h-full'}`}
      />
      
      {/* Start cap */}
      <div 
        className={`absolute bg-red-500 ${
          measurement.orientation === 'horizontal' 
            ? 'w-0.5 h-2 -top-1 left-0' 
            : 'w-2 h-0.5 -left-1 top-0'
        }`}
      />
      
      {/* End cap */}
      <div 
        className={`absolute bg-red-500 ${
          measurement.orientation === 'horizontal' 
            ? 'w-0.5 h-2 -top-1 right-0' 
            : 'w-2 h-0.5 -left-1 bottom-0'
        }`}
      />
      
      {/* Label */}
      <div 
        className={`absolute bg-red-500 text-white text-xs px-1 py-0.5 rounded whitespace-nowrap ${
          measurement.orientation === 'horizontal'
            ? '-top-6 left-1/2 transform -translate-x-1/2'
            : '-left-16 top-1/2 transform -translate-y-1/2'
        }`}
      >
        {measurement.label}
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-background">
      {/* Toggle Controls */}
      <div className="fixed top-4 right-4 z-50 bg-black text-white p-4 rounded-lg shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showMeasurements}
              onChange={(e) => setShowMeasurements(e.target.checked)}
              className="w-4 h-4"
            />
            Show Measurements
          </label>
        </div>
        
        <div className="text-xs space-y-1 opacity-75">
          <p>Red lines show exact dimensions</p>
          <p>Use these for Figma recreation</p>
        </div>
      </div>

      {/* Main App Content */}
      <AppMockupGrid />

      {/* Measurement Overlays */}
      {showMeasurements && (
        <div className="absolute inset-0 pointer-events-none">
          {measurements.map((measurement) => (
            <Measurement key={measurement.id} measurement={measurement} />
          ))}
        </div>
      )}

      {/* Measurement Legend */}
      {showMeasurements && (
        <div className="fixed bottom-4 left-4 bg-black text-white p-4 rounded-lg shadow-lg max-w-xs">
          <h3 className="font-semibold mb-2 text-sm">Measurement Guide</h3>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-red-500"></div>
              <span>Horizontal dimensions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-0.5 h-4 bg-red-500"></div>
              <span>Vertical dimensions</span>
            </div>
          </div>
          
          <div className="mt-3 pt-3 border-t border-gray-600">
            <h4 className="font-medium mb-1 text-xs">Key Measurements:</h4>
            <ul className="space-y-1 text-xs opacity-75">
              <li>iPhone: 320×640px, 32px radius</li>
              <li>Screen: 304×608px (16px bezels)</li>
              <li>Mobile slides: 32px padding</li>
              <li>Desktop cards: 400×300px</li>
              <li>Grid gaps: 24px</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
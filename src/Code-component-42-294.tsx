import React, { useState, useEffect } from 'react';
import { MobileFinancialWrapped } from './components/MobileFinancialWrapped';

// Minimal version optimized for Figma plugin constraints
export default function FigmaPluginApp() {
  const [dimensions, setDimensions] = useState({ width: 375, height: 812 });

  useEffect(() => {
    // Listen for Figma plugin resize messages
    const handleMessage = (event: MessageEvent) => {
      if (event.data.pluginMessage?.type === 'resize') {
        setDimensions(event.data.pluginMessage.size);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Send ready message to Figma plugin
  useEffect(() => {
    if (window.parent) {
      window.parent.postMessage({ 
        pluginMessage: { 
          type: 'ui-ready',
          size: { width: 375, height: 812 }
        } 
      }, '*');
    }
  }, []);

  return (
    <div 
      className="bg-black rounded-lg overflow-hidden"
      style={{ 
        width: `${dimensions.width}px`, 
        height: `${dimensions.height}px`,
        maxWidth: '100%',
        maxHeight: '100%'
      }}
    >
      <MobileFinancialWrapped />
    </div>
  );
}
import { useEffect } from 'react';
import { AppMockupGrid } from './components/AppMockupGrid';

export default function IframeApp() {
  useEffect(() => {
    // Send height updates to parent window
    const updateHeight = () => {
      const height = document.documentElement.scrollHeight;
      window.parent.postMessage({
        type: 'financial-wrapped-resize',
        height: height
      }, '*');
    };

    // Initial height update
    updateHeight();

    // Update height on window resize
    window.addEventListener('resize', updateHeight);

    // Send ready message to parent
    window.parent.postMessage({
      type: 'financial-wrapped-ready'
    }, '*');

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  // Handle interaction events
  const handleInteraction = (action: string, data?: any) => {
    window.parent.postMessage({
      type: 'financial-wrapped-interaction',
      action,
      data
    }, '*');
  };

  return (
    <div className="min-h-screen bg-background">
      <div onClick={(e) => {
        // Track clicks for parent window
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.closest('button')) {
          handleInteraction('button-click', {
            text: target.textContent,
            className: target.className
          });
        }
      }}>
        <AppMockupGrid />
      </div>
    </div>
  );
}
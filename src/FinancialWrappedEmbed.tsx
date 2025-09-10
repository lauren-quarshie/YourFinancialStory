import { AppMockupGrid } from './components/AppMockupGrid';

interface FinancialWrappedEmbedProps {
  className?: string;
  onInteraction?: (action: string, data?: any) => void;
  theme?: 'light' | 'dark';
}

export default function FinancialWrappedEmbed({ 
  className = '', 
  onInteraction,
  theme = 'light'
}: FinancialWrappedEmbedProps) {
  return (
    <div 
      className={`financial-wrapped-embed ${theme} ${className}`}
      onClick={(e) => {
        if (onInteraction) {
          const target = e.target as HTMLElement;
          if (target.tagName === 'BUTTON' || target.closest('button')) {
            onInteraction('button-click', {
              text: target.textContent,
              className: target.className
            });
          }
        }
      }}
    >
      <AppMockupGrid />
    </div>
  );
}

// Export the component and its props type for TypeScript users
export type { FinancialWrappedEmbedProps };
import { useState } from 'react';

interface DesignToken {
  name: string;
  value: string;
  type: 'color' | 'spacing' | 'typography' | 'radius' | 'shadow';
  figmaValue?: string;
  description?: string;
}

export function DesignSpecs() {
  const [activeTab, setActiveTab] = useState<'colors' | 'typography' | 'spacing' | 'components'>('colors');

  const colorTokens: DesignToken[] = [
    { name: 'Background', value: '#ffffff', type: 'color', figmaValue: 'RGB(255, 255, 255)', description: 'Main background color' },
    { name: 'Foreground', value: '#030213', type: 'color', figmaValue: 'RGB(3, 2, 19)', description: 'Primary text color' },
    { name: 'Primary', value: '#030213', type: 'color', figmaValue: 'RGB(3, 2, 19)', description: 'Primary brand color' },
    { name: 'Secondary', value: '#ececf0', type: 'color', figmaValue: 'RGB(236, 236, 240)', description: 'Secondary color' },
    { name: 'Muted', value: '#717182', type: 'color', figmaValue: 'RGB(113, 113, 130)', description: 'Muted text color' },
    { name: 'Gradient Start (Purple)', value: '#8B5CF6', type: 'color', figmaValue: 'RGB(139, 92, 246)', description: 'Purple gradient start' },
    { name: 'Gradient End (Blue)', value: '#3B82F6', type: 'color', figmaValue: 'RGB(59, 130, 246)', description: 'Blue gradient end' },
    { name: 'Gradient Start (Pink)', value: '#EC4899', type: 'color', figmaValue: 'RGB(236, 72, 153)', description: 'Pink gradient start' },
    { name: 'Gradient End (Orange)', value: '#F59E0B', type: 'color', figmaValue: 'RGB(245, 158, 11)', description: 'Orange gradient end' },
    { name: 'Success Green', value: '#10B981', type: 'color', figmaValue: 'RGB(16, 185, 129)', description: 'Success/positive color' },
    { name: 'Warning Orange', value: '#F59E0B', type: 'color', figmaValue: 'RGB(245, 158, 11)', description: 'Warning color' },
    { name: 'Error Red', value: '#EF4444', type: 'color', figmaValue: 'RGB(239, 68, 68)', description: 'Error/negative color' },
  ];

  const typographyTokens: DesignToken[] = [
    { name: 'Base Font Size', value: '14px', type: 'typography', figmaValue: '14', description: 'Root font size' },
    { name: 'H1 Large', value: '48px', type: 'typography', figmaValue: '48', description: 'Large heading (mobile slides)' },
    { name: 'H1 Medium', value: '32px', type: 'typography', figmaValue: '32', description: 'Medium heading' },
    { name: 'H2', value: '24px', type: 'typography', figmaValue: '24', description: 'Secondary heading' },
    { name: 'H3', value: '20px', type: 'typography', figmaValue: '20', description: 'Tertiary heading' },
    { name: 'Body Large', value: '18px', type: 'typography', figmaValue: '18', description: 'Large body text' },
    { name: 'Body Medium', value: '16px', type: 'typography', figmaValue: '16', description: 'Medium body text' },
    { name: 'Body Small', value: '14px', type: 'typography', figmaValue: '14', description: 'Small body text' },
    { name: 'Caption', value: '12px', type: 'typography', figmaValue: '12', description: 'Caption text' },
    { name: 'Font Weight Normal', value: '400', type: 'typography', figmaValue: '400', description: 'Normal font weight' },
    { name: 'Font Weight Medium', value: '500', type: 'typography', figmaValue: '500', description: 'Medium font weight' },
    { name: 'Font Weight Semibold', value: '600', type: 'typography', figmaValue: '600', description: 'Semibold font weight' },
    { name: 'Font Weight Bold', value: '700', type: 'typography', figmaValue: '700', description: 'Bold font weight' },
  ];

  const spacingTokens: DesignToken[] = [
    { name: 'Space 1', value: '4px', type: 'spacing', figmaValue: '4', description: 'Tiny spacing' },
    { name: 'Space 2', value: '8px', type: 'spacing', figmaValue: '8', description: 'Extra small spacing' },
    { name: 'Space 3', value: '12px', type: 'spacing', figmaValue: '12', description: 'Small spacing' },
    { name: 'Space 4', value: '16px', type: 'spacing', figmaValue: '16', description: 'Base spacing unit' },
    { name: 'Space 5', value: '20px', type: 'spacing', figmaValue: '20', description: 'Medium spacing' },
    { name: 'Space 6', value: '24px', type: 'spacing', figmaValue: '24', description: 'Large spacing' },
    { name: 'Space 8', value: '32px', type: 'spacing', figmaValue: '32', description: 'Extra large spacing' },
    { name: 'Space 10', value: '40px', type: 'spacing', figmaValue: '40', description: 'XXL spacing' },
    { name: 'Space 12', value: '48px', type: 'spacing', figmaValue: '48', description: 'XXXL spacing' },
    { name: 'Space 16', value: '64px', type: 'spacing', figmaValue: '64', description: 'Section spacing' },
    { name: 'Border Radius Small', value: '6px', type: 'radius', figmaValue: '6', description: 'Small border radius' },
    { name: 'Border Radius Medium', value: '8px', type: 'radius', figmaValue: '8', description: 'Medium border radius' },
    { name: 'Border Radius Large', value: '12px', type: 'radius', figmaValue: '12', description: 'Large border radius' },
    { name: 'Border Radius XL', value: '16px', type: 'radius', figmaValue: '16', description: 'Extra large border radius' },
  ];

  const componentSpecs = {
    iPhoneMockup: {
      width: '320px',
      height: '640px',
      borderRadius: '32px',
      bezels: {
        top: '16px',
        bottom: '16px',
        sides: '8px'
      },
      screen: {
        width: '304px',
        height: '608px'
      }
    },
    mobileSlides: {
      width: '320px',
      height: '568px',
      padding: '32px',
      contentWidth: '256px',
      contentHeight: '504px'
    },
    desktopSlides: {
      width: '400px',
      height: '300px',
      padding: '24px',
      borderRadius: '12px'
    },
    actionCards: {
      minHeight: '80px',
      padding: '16px',
      borderRadius: '8px',
      gap: '12px'
    }
  };

  const TokenDisplay = ({ tokens }: { tokens: DesignToken[] }) => (
    <div className="grid grid-cols-1 gap-4">
      {tokens.map((token) => (
        <div key={token.name} className="flex items-center justify-between p-3 border rounded-lg">
          <div className="flex items-center gap-3">
            {token.type === 'color' && (
              <div 
                className="w-6 h-6 rounded border"
                style={{ backgroundColor: token.value }}
              />
            )}
            <div>
              <div className="font-medium">{token.name}</div>
              <div className="text-sm text-muted-foreground">{token.description}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-mono text-sm">{token.value}</div>
            <div className="text-xs text-muted-foreground">Figma: {token.figmaValue || token.value}</div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mb-4">Financial Wrapped - Design Specifications</h1>
          <p className="text-muted-foreground mb-6">
            Complete design specifications for recreating the Financial Wrapped feature in Figma
          </p>
          
          {/* Export Button */}
          <button
            onClick={() => {
              const specs = {
                colors: colorTokens,
                typography: typographyTokens,
                spacing: spacingTokens,
                components: componentSpecs
              };
              
              const dataStr = JSON.stringify(specs, null, 2);
              const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
              
              const exportFileDefaultName = 'financial-wrapped-design-specs.json';
              
              const linkElement = document.createElement('a');
              linkElement.setAttribute('href', dataUri);
              linkElement.setAttribute('download', exportFileDefaultName);
              linkElement.click();
            }}
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
          >
            Export Design Specs JSON
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b mb-8">
          <div className="flex gap-8">
            {(['colors', 'typography', 'spacing', 'components'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 px-1 capitalize ${
                  activeTab === tab 
                    ? 'border-b-2 border-primary text-primary font-medium' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'colors' && <TokenDisplay tokens={colorTokens} />}
        {activeTab === 'typography' && <TokenDisplay tokens={typographyTokens} />}
        {activeTab === 'spacing' && <TokenDisplay tokens={spacingTokens} />}
        
        {activeTab === 'components' && (
          <div className="space-y-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">iPhone Mockup Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Overall Dimensions</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Width: {componentSpecs.iPhoneMockup.width}</li>
                    <li>Height: {componentSpecs.iPhoneMockup.height}</li>
                    <li>Border Radius: {componentSpecs.iPhoneMockup.borderRadius}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Screen Area</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Width: {componentSpecs.iPhoneMockup.screen.width}</li>
                    <li>Height: {componentSpecs.iPhoneMockup.screen.height}</li>
                    <li>Top Bezel: {componentSpecs.iPhoneMockup.bezels.top}</li>
                    <li>Bottom Bezel: {componentSpecs.iPhoneMockup.bezels.bottom}</li>
                    <li>Side Bezels: {componentSpecs.iPhoneMockup.bezels.sides}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Mobile Slide Specifications</h3>
              <ul className="space-y-1 text-sm">
                <li>Slide Width: {componentSpecs.mobileSlides.width}</li>
                <li>Slide Height: {componentSpecs.mobileSlides.height}</li>
                <li>Padding: {componentSpecs.mobileSlides.padding}</li>
                <li>Content Area: {componentSpecs.mobileSlides.contentWidth} × {componentSpecs.mobileSlides.contentHeight}</li>
              </ul>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Desktop Slide Specifications</h3>
              <ul className="space-y-1 text-sm">
                <li>Width: {componentSpecs.desktopSlides.width}</li>
                <li>Height: {componentSpecs.desktopSlides.height}</li>
                <li>Padding: {componentSpecs.desktopSlides.padding}</li>
                <li>Border Radius: {componentSpecs.desktopSlides.borderRadius}</li>
              </ul>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Action Card Specifications</h3>
              <ul className="space-y-1 text-sm">
                <li>Min Height: {componentSpecs.actionCards.minHeight}</li>
                <li>Padding: {componentSpecs.actionCards.padding}</li>
                <li>Border Radius: {componentSpecs.actionCards.borderRadius}</li>
                <li>Gap between elements: {componentSpecs.actionCards.gap}</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
import { AppMockupGrid } from './components/AppMockupGrid';
import FigmaApp from './FigmaApp';

export default function App() {
  // Check if we're in Figma embed mode
  const urlParams = new URLSearchParams(window.location.search);
  const isFigmaEmbed = urlParams.get('figma') === 'true';
  
  if (isFigmaEmbed) {
    return <FigmaApp />;
  }
  
  return <AppMockupGrid />;
}
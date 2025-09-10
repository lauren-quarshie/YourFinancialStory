import { AppMockupGrid } from './components/AppMockupGrid';
import { DeploymentTest } from './components/DeploymentTest';
import FigmaApp from './FigmaApp';

export default function App() {
  // Check if we're in Figma embed mode
  const urlParams = new URLSearchParams(window.location.search);
  const isFigmaEmbed = urlParams.get('figma') === 'true';
  const isTest = urlParams.get('test') === 'true';
  
  if (isTest) {
    return <DeploymentTest />;
  }
  
  if (isFigmaEmbed) {
    return <FigmaApp />;
  }
  
  return <AppMockupGrid />;
}
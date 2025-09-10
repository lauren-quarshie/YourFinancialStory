import { AutoDemo } from './components/AutoDemo';

export default function DemoApp() {
  const handleDemoComplete = () => {
    console.log('Demo recording complete! You can now stop your screen recording.');
  };

  return (
    <div className="min-h-screen bg-background">
      <AutoDemo onComplete={handleDemoComplete} />
    </div>
  );
}
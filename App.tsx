import React from 'react';
import { FloatingHearts } from './components/FloatingHearts';
import { ApologyCard } from './components/ApologyCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Ambience */}
      <FloatingHearts />

      {/* Main Content */}
      <div className="z-10 w-full max-w-lg">
        <ApologyCard />
      </div>
      
      {/* Footer / Copyright */}
      <div className="absolute bottom-4 text-rose-300 text-xs text-center w-full opacity-60">
        Made with ❤️ specifically for you
      </div>
    </div>
  );
};

export default App;
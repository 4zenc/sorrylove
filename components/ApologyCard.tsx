import React, { useState } from 'react';

export const ApologyCard: React.FC = () => {
  const [loveCount, setLoveCount] = useState(0);

  const handleLoveClick = () => {
    setLoveCount((prev) => prev + 1);
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl p-8 md:p-12 text-center border border-white/50 transition-all duration-500 hover:shadow-2xl hover:bg-white/95">
      
      {/* Header Icon */}
      <div className="mb-6 animate-pulse-slow">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-20 h-20 mx-auto text-rose-400 drop-shadow-md"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl md:text-4xl font-serif text-rose-600 mb-6 font-bold tracking-tight">
        I'm So Sorry, My Love
      </h1>

      {/* Sincere Message */}
      <div className="space-y-4 text-gray-600 text-lg leading-relaxed font-sans mb-8">
        <p>
          Baby, I am so incredibly sorry for falling asleep and missing your messages. 
          I know it must have made you worry or feel like I wasn't listening, and that is the last thing I ever want to do.
        </p>
        <p>
          Please know that I care about your feelings deeply. You are my top priority, and I promise to do better at letting you know when I might be unavailable.
        </p>
        <p className="font-semibold text-rose-500">
          I love you more than words can say.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 items-center justify-center">
        
        {/* Primary Love Button */}
        <button
          onClick={handleLoveClick}
          className="group relative px-8 py-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white font-bold rounded-full shadow-lg transform transition hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none ring-4 ring-rose-200"
        >
          <span className="flex items-center gap-2 text-lg">
            {loveCount > 0 ? `I Love You So Much! (${loveCount})` : 'I Love You ❤️'}
          </span>
          {loveCount > 0 && (
            <span className="absolute -top-2 -right-2 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500"></span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
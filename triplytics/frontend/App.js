import React from 'react';
import { 
  AreaChart, 
  Globe
} from 'lucide-react';

/**
 * COMPONENT: Interactive India Map
 * Displays an embedded Google Map.
 */
function IndiaMap() {
  return (
    <div className="glass-card relative overflow-hidden min-h-[400px] lg:min-h-[500px] flex flex-col">
      <h2 className="text-xl font-semibold mb-4 flex items-center shrink-0 text-glow">
        <Globe className="h-6 w-6 mr-2 text-orange-400" />
        Famous Cities To Cover in India
      </h2>
      
      {/* Embedded Google Map Iframe */}
      <div className="flex-grow w-full rounded-lg overflow-hidden border border-orange-500/30">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1z29_IfvjFqUlG5MmKsRz_Z94g6Eig44&ehbc=2E312F&noprof=1"
          className="w-full h-full min-h-[400px] lg:min-h-[500px]"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

// --- Main App Component ---

export default function App() {

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans p-4 md:p-8">
      {/* Header */}
      <header className="mb-8 flex flex-col items-center text-center">
        <div className="flex items-center space-x-3">
          <AreaChart className="h-8 w-8 text-orange-400 text-glow" />
          <h1 className="text-3xl font-bold text-white text-glow">Triplytics</h1>
        </div>
        <p className="text-lg text-gray-400 mt-1">
          Tourism Trend Analysis & Price Prediction
        </p>
      </header>

      {/* --- India Map Section --- */}
      <section className="max-w-7xl mx-auto mb-8">
        <IndiaMap />
      </section>

      {/* Simple Footer */}
      <footer className="max-w-7xl mx-auto mt-12 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Triplytics. All rights reserved.</p>
      </footer>
      
      {/* Global CSS for fade-in animation and new theme effects */}
      <style>{`
        /* Glassmorphism Card Style */
        .glass-card {
          background: rgba(31, 41, 55, 0.5); /* bg-gray-800/50 */
          backdrop-filter: blur(10px);
          border-radius: 0.75rem; /* rounded-xl */
          padding: 1.5rem; /* p-6 */
          border: 1px solid rgba(249, 115, 22, 0.3); /* border border-orange-500/30 */
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }

        /* Text Glow Effect */
        .text-glow {
          text-shadow: 0 0 8px rgba(249, 115, 22, 0.5), 0 0 12px rgba(249, 115, 22, 0.3);
        }
        
        /* Button Text Glow Effect */
        .text-shadow-glow {
          text-shadow: 0 0 6px rgba(255, 255, 255, 0.3);
        }

        /* Fade-in Animation */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}


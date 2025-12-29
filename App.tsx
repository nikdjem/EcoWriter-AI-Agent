
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import PostGenerator from './components/PostGenerator';
import Settings from './components/Settings';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Safe environment check
  const apiKey = (() => {
    try {
      return (process as any).env.API_KEY;
    } catch {
      return null;
    }
  })();

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'write':
        return <PostGenerator />;
      case 'settings':
        return <Settings />;
      case 'history':
        return (
          <div className="bg-white p-20 rounded-[3rem] text-center border border-slate-100 shadow-sm animate-fadeIn">
            <div className="text-6xl mb-6">📂</div>
            <h3 className="text-2xl font-bold text-slate-900">Publishing Archive</h3>
            <p className="text-slate-500 mt-3 max-w-sm mx-auto leading-relaxed">
              Historical view of all AI-generated posts is coming soon. Connect your CMS to see live statuses.
            </p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Navigation currentTab={activeTab} setTab={setActiveTab} />
      
      <main className="flex-1 ml-64 p-10 max-w-7xl mx-auto w-full">
        {renderContent()}
      </main>

      {!apiKey && (
        <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-md z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-[2.5rem] p-12 max-w-md w-full shadow-2xl text-center border border-slate-100">
            <div className="w-20 h-20 bg-amber-50 rounded-3xl flex items-center justify-center mx-auto mb-8 transform rotate-3">
              <span className="text-4xl">🔑</span>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4 font-serif">Key Required</h3>
            <p className="text-slate-500 mb-8 leading-relaxed text-lg">
              To activate your autonomous sustainability writer, please configure your <span className="font-bold text-slate-800">API_KEY</span> in the project settings.
            </p>
            <div className="bg-slate-900 p-5 rounded-2xl text-xs text-left font-mono text-emerald-400 mb-8 overflow-x-auto border border-white/10 shadow-inner">
              # Add this to your environment:<br/>
              API_KEY=your_gemini_key
            </div>
            <div className="space-y-4">
              <p className="text-xs text-slate-400 italic">
                Awaiting connection to Gemini-3-Pro engine...
              </p>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-1/3 animate-[progress_2s_infinite_linear]"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
};

export default App;

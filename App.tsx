
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import PostGenerator from './components/PostGenerator';
import Settings from './components/Settings';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

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
          <div className="bg-white p-20 rounded-3xl text-center border border-slate-100">
            <div className="text-5xl mb-6">📂</div>
            <h3 className="text-2xl font-bold text-slate-900">Publishing Archive</h3>
            <p className="text-slate-500 mt-2">Historical view of all AI-generated posts is coming soon.</p>
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

      {/* Quick Setup Modal Overlay (if no API key or settings) */}
      {!process.env.API_KEY && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-[2rem] p-10 max-w-md w-full shadow-2xl text-center">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">⚠️</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Configuration Required</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              To activate the content agent, please ensure your <span className="font-bold text-slate-700">API_KEY</span> is configured in the environment variables.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl text-xs text-left font-mono text-slate-600 mb-6 overflow-x-auto">
              process.env.API_KEY is missing.
            </div>
            <p className="text-xs text-slate-400">
              Wait... checking system status...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

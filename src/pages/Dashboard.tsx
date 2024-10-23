import React from 'react';
import MessageAnalyzer from '../components/MessageAnalyzer';
import { Sparkles } from 'lucide-react';

function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center justify-center">
          <Sparkles className="text-indigo-500 mr-2" />
          AI Fun Hub Dashboard
        </h1>
        <p className="text-gray-600">
          Currently featuring our Message Analysis tool. More AI tools coming soon!
        </p>
      </div>

      <MessageAnalyzer />

      {/* Coming Soon Banner */}
      <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">More Tools Coming Soon!</h2>
        <p className="text-gray-600">
          We're working on exciting new AI tools to add to your dashboard.
          Stay tuned for updates!
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
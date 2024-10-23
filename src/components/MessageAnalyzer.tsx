import React, { useState } from 'react';
import { MessageSquare, Loader, Sparkles, Shield } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { analyzeMessage } from '../services/messageService';
import CreditsPurchase from './CreditsPurchase';

function MessageAnalyzer() {
  const [message, setMessage] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<'serious' | 'fun'>('serious');
  const [credits, setCredits] = useState(3); // Demo credits
  const [showCreditsModal, setShowCreditsModal] = useState(false);

  const handleAnalyze = async () => {
    if (!message.trim()) {
      toast.error('Please enter a message to analyze');
      return;
    }

    if (credits <= 0) {
      toast.error('No credits remaining. Please upgrade your plan.');
      setShowCreditsModal(true);
      return;
    }

    setLoading(true);
    try {
      const result = await analyzeMessage(message, mode);
      setAnalysis(result);
      setCredits(prev => prev - 1);
      toast.success('Analysis complete!');
    } catch (error) {
      toast.error('Failed to analyze message');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePurchaseCredits = (amount: number) => {
    setCredits(prev => prev + amount);
  };

  return (
    <div className="space-y-6">
      {/* Credits Display */}
      <div className="bg-indigo-50 p-4 rounded-lg flex items-center justify-between">
        <div className="flex items-center">
          <Sparkles className="w-5 h-5 text-indigo-600 mr-2" />
          <span className="text-indigo-900 font-medium">Credits Remaining: {credits}</span>
        </div>
        <button 
          onClick={() => setShowCreditsModal(true)}
          className="text-sm px-4 py-1 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
        >
          Get More Credits
        </button>
      </div>

      {/* Message Input */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <div className="flex items-center text-sm text-gray-500">
              <Shield className="w-4 h-4 mr-1" />
              Encrypted Analysis
            </div>
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
            placeholder="Type or paste your message here..."
          />
        </div>

        {/* Analysis Mode */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Analysis Mode
          </label>
          <div className="flex space-x-4">
            <button
              onClick={() => setMode('serious')}
              className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                mode === 'serious'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Professional Advice
            </button>
            <button
              onClick={() => setMode('fun')}
              className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                mode === 'fun'
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Fun & Playful
            </button>
          </div>
        </div>

        {/* Analyze Button */}
        <button
          onClick={handleAnalyze}
          disabled={loading || credits <= 0}
          className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center"
        >
          {loading ? (
            <>
              <Loader className="animate-spin mr-2" />
              Analyzing...
            </>
          ) : (
            <>
              <MessageSquare className="mr-2" />
              Analyze Message
            </>
          )}
        </button>

        {/* Analysis Result */}
        {analysis && (
          <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-lg border border-indigo-100">
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Analysis Result:</h3>
            <p className="text-gray-700 whitespace-pre-wrap">{analysis}</p>
          </div>
        )}
      </div>

      {/* Credits Purchase Modal */}
      {showCreditsModal && (
        <CreditsPurchase
          onClose={() => setShowCreditsModal(false)}
          onPurchase={handlePurchaseCredits}
        />
      )}
    </div>
  );
}

export default MessageAnalyzer;
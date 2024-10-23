import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Brain, Sparkles, Rocket, ArrowRight, Star } from 'lucide-react';

function Home() {
  const currentTools = [
    {
      icon: <MessageSquare className="w-6 h-6 text-indigo-600" />,
      title: 'Message Analyzer',
      description: 'Get instant feedback on your messages with AI-powered analysis',
      available: true
    }
  ];

  const upcomingTools = [
    {
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      title: 'Story Generator',
      description: 'Create unique stories with AI assistance',
      comingSoon: true
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-600" />,
      title: 'Image Creator',
      description: 'Generate amazing images from text descriptions',
      comingSoon: true
    },
    {
      icon: <Rocket className="w-6 h-6 text-pink-600" />,
      title: 'Code Assistant',
      description: 'Get help with coding and debugging',
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Your Gateway to Fun AI Tools
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience the power of AI with our growing collection of fun and useful tools.
          Start with message analysis today, with more exciting features coming soon!
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/login"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/dashboard"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-gray-900 font-medium border border-gray-200 hover:border-gray-300 transition-colors"
          >
            Try Demo
          </Link>
        </div>
      </div>

      {/* Available Tools Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Available Tools</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {currentTools.map((tool, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-indigo-100"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {tool.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {tool.description}
              </p>
              <Link
                to="/dashboard"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Try Now
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Coming Soon</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingTools.map((tool, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-600">
                  {tool.description}
                </p>
                <span className="inline-block mt-4 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Using AI Tools Today
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join our growing community of users who are already experiencing
            the power of AI with our message analysis tool. More exciting features coming soon!
          </p>
          <Link
            to="/login"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-opacity-90 transition-opacity"
          >
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
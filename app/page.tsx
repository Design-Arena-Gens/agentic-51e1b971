"use client";

import { useState } from "react";
import { Search, TrendingUp, Users, Video, Eye, ThumbsUp, MessageSquare, Clock, Calendar, Target, Award, Sparkles } from "lucide-react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface ChannelData {
  channelName: string;
  subscribers: number;
  avgViews: number;
  avgEngagement: number;
  uploadFrequency: string;
  topCategories: string[];
  bestTimeToPost: string;
  avgVideoLength: string;
  thumbnailStyle: string;
  titleStrategy: string;
  keyInsights: string[];
}

export default function Home() {
  const [channelUrl, setChannelUrl] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<ChannelData | null>(null);

  const analyzeChannel = async () => {
    if (!channelUrl.trim()) return;

    setAnalyzing(true);

    // Simulate API analysis with realistic data
    setTimeout(() => {
      const mockData: ChannelData = {
        channelName: extractChannelName(channelUrl),
        subscribers: Math.floor(Math.random() * 5000000) + 100000,
        avgViews: Math.floor(Math.random() * 500000) + 10000,
        avgEngagement: Math.random() * 8 + 2,
        uploadFrequency: ["Daily", "3x per week", "Weekly", "2x per week"][Math.floor(Math.random() * 4)],
        topCategories: ["Tutorial", "Review", "Vlog", "How-to", "Entertainment"].sort(() => Math.random() - 0.5).slice(0, 3),
        bestTimeToPost: ["2 PM - 4 PM EST", "6 PM - 8 PM EST", "10 AM - 12 PM EST"][Math.floor(Math.random() * 3)],
        avgVideoLength: ["8-12 minutes", "12-15 minutes", "15-20 minutes", "5-8 minutes"][Math.floor(Math.random() * 4)],
        thumbnailStyle: ["Bold text with bright colors", "Face close-up with emotion", "Action shot with text overlay", "Minimalist with contrast"][Math.floor(Math.random() * 4)],
        titleStrategy: ["Question-based titles", "Numbers and lists", "Emotional hooks", "How-to format"][Math.floor(Math.random() * 4)],
        keyInsights: [
          "Consistent upload schedule drives 35% more engagement",
          "Videos posted during peak hours get 2.3x more views",
          "Thumbnails with faces increase CTR by 45%",
          "First 48 hours are critical for algorithm push",
          "Strong CTA at end increases subscriber conversion by 28%",
          "Series/playlists improve watch time by 67%"
        ]
      };

      setResults(mockData);
      setAnalyzing(false);
    }, 2000);
  };

  const extractChannelName = (url: string): string => {
    const match = url.match(/@([^\/\?]+)/);
    if (match) return match[1];
    const parts = url.split('/');
    return parts[parts.length - 1] || "Competitor Channel";
  };

  const viewsData = [
    { name: "Mon", views: 45000 },
    { name: "Tue", views: 52000 },
    { name: "Wed", views: 48000 },
    { name: "Thu", views: 61000 },
    { name: "Fri", views: 73000 },
    { name: "Sat", views: 89000 },
    { name: "Sun", views: 95000 },
  ];

  const engagementData = [
    { name: "Likes", value: 65, color: "#10b981" },
    { name: "Comments", value: 25, color: "#3b82f6" },
    { name: "Shares", value: 10, color: "#f59e0b" },
  ];

  const contentData = [
    { category: "Tutorial", count: 45 },
    { category: "Review", count: 32 },
    { category: "Vlog", count: 28 },
    { category: "How-to", count: 38 },
    { category: "Live", count: 15 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="w-12 h-12 text-red-600 mr-3" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              YouTube Competitor Analyzer
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Analyze competitor channels to unlock profitable growth strategies for your YouTube channel
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Enter Competitor Channel URL
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="https://youtube.com/@channelname or channel URL"
                value={channelUrl}
                onChange={(e) => setChannelUrl(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                onKeyPress={(e) => e.key === "Enter" && analyzeChannel()}
              />
              <button
                onClick={analyzeChannel}
                disabled={analyzing || !channelUrl.trim()}
                className="px-8 py-3 bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-lg font-semibold hover:from-red-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all"
              >
                <Search className="w-5 h-5" />
                {analyzing ? "Analyzing..." : "Analyze"}
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {results && (
          <div className="space-y-6 animate-in fade-in duration-500">
            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <Users className="w-8 h-8 text-red-600" />
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">+12.5%</span>
                </div>
                <h3 className="text-gray-600 dark:text-gray-400 text-sm">Subscribers</h3>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{(results.subscribers / 1000000).toFixed(2)}M</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <Eye className="w-8 h-8 text-blue-600" />
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">+8.3%</span>
                </div>
                <h3 className="text-gray-600 dark:text-gray-400 text-sm">Avg Views</h3>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{(results.avgViews / 1000).toFixed(0)}K</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <ThumbsUp className="w-8 h-8 text-green-600" />
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">+15.2%</span>
                </div>
                <h3 className="text-gray-600 dark:text-gray-400 text-sm">Engagement Rate</h3>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{results.avgEngagement.toFixed(1)}%</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <Video className="w-8 h-8 text-purple-600" />
                  <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">Consistent</span>
                </div>
                <h3 className="text-gray-600 dark:text-gray-400 text-sm">Upload Frequency</h3>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{results.uploadFrequency}</p>
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Views Trend */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  Weekly Views Trend
                </h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={viewsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="views" stroke="#3b82f6" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Engagement Distribution */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                  Engagement Distribution
                </h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={engagementData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name} ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {engagementData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Content Analysis */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Video className="w-6 h-6 text-purple-600" />
                Content Category Distribution
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={contentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Strategy Insights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl shadow-lg p-6">
                <Clock className="w-10 h-10 text-blue-600 mb-3" />
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Best Time to Post</h4>
                <p className="text-2xl font-bold text-blue-600">{results.bestTimeToPost}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Peak audience activity window</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-xl shadow-lg p-6">
                <Calendar className="w-10 h-10 text-purple-600 mb-3" />
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Optimal Video Length</h4>
                <p className="text-2xl font-bold text-purple-600">{results.avgVideoLength}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Sweet spot for retention</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-xl shadow-lg p-6">
                <Target className="w-10 h-10 text-green-600 mb-3" />
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Top Categories</h4>
                <div className="space-y-1">
                  {results.topCategories.map((cat, idx) => (
                    <span key={idx} className="inline-block bg-green-600 text-white text-xs px-3 py-1 rounded-full mr-2">
                      {cat}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Highest performing content</p>
              </div>
            </div>

            {/* Content Strategy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-yellow-600" />
                  Thumbnail Strategy
                </h3>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-600">
                  <p className="font-semibold text-gray-900 dark:text-white text-lg">{results.thumbnailStyle}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    This style increases click-through rate by analyzing their most successful videos
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-pink-600" />
                  Title Formula
                </h3>
                <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4 border-l-4 border-pink-600">
                  <p className="font-semibold text-gray-900 dark:text-white text-lg">{results.titleStrategy}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Proven pattern that drives higher engagement and algorithmic recommendation
                  </p>
                </div>
              </div>
            </div>

            {/* Key Actionable Insights */}
            <div className="bg-gradient-to-br from-red-50 to-purple-50 dark:from-red-900/20 dark:to-purple-900/20 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-8 h-8 text-red-600" />
                Actionable Growth Strategies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.keyInsights.map((insight, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-red-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 flex-1">{insight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Plan */}
            <div className="bg-gradient-to-r from-purple-600 to-red-600 rounded-xl shadow-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Target className="w-10 h-10" />
                Your Personalized Action Plan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white/10 backdrop-blur rounded-lg p-5">
                  <h4 className="font-bold text-xl mb-2">Week 1-2</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Optimize thumbnail style</li>
                    <li>• Adjust video length</li>
                    <li>• Test posting times</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-5">
                  <h4 className="font-bold text-xl mb-2">Week 3-4</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Implement title formula</li>
                    <li>• Match upload frequency</li>
                    <li>• Create series/playlists</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-5">
                  <h4 className="font-bold text-xl mb-2">Month 2+</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Scale top categories</li>
                    <li>• A/B test strategies</li>
                    <li>• Track and optimize</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 text-center text-gray-600 dark:text-gray-400">
          <p className="text-sm">
            Analyze competitor strategies • Optimize your content • Grow profitably
          </p>
        </div>
      </div>
    </div>
  );
}

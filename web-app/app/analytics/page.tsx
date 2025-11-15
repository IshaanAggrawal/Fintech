"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, PieChart, Activity } from "lucide-react";

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("1M");

  // Mock data for demonstration
  const performanceData = [
    { date: "Jan", value: 120000 },
    { date: "Feb", value: 125000 },
    { date: "Mar", value: 122000 },
    { date: "Apr", value: 130000 },
    { date: "May", value: 135000 },
    { date: "Jun", value: 140000 },
  ];

  const sectorData = [
    { name: "Technology", value: 65, color: "bg-green-500" },
    { name: "Healthcare", value: 15, color: "bg-blue-500" },
    { name: "Finance", value: 10, color: "bg-purple-500" },
    { name: "Consumer", value: 7, color: "bg-yellow-500" },
    { name: "Other", value: 3, color: "bg-gray-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground mt-2">Detailed insights into your portfolio performance</p>
        </div>

        {/* Time Range Selector */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-card rounded-2xl p-6 border border-border shadow-lg mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {["1D", "1W", "1M", "3M", "1Y", "All"].map((range) => (
              <button
                key={range}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  timeRange === range
                    ? "bg-gradient-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
                onClick={() => setTimeRange(range)}
              >
                {range}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Performance Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-card rounded-2xl p-6 border border-border shadow-lg mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">Portfolio Performance</h2>
            <BarChart3 className="h-6 w-6 text-primary" />
          </div>
          <div className="h-80 flex items-end space-x-2">
            {performanceData.map((data, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div className="text-xs text-muted-foreground mb-2">{data.date}</div>
                <div
                  className="w-full bg-gradient-primary rounded-t-lg transition-all hover:opacity-80"
                  style={{ height: `${(data.value / 150000) * 100}%` }}
                ></div>
                <div className="text-xs text-muted-foreground mt-2">
                  ${(data.value / 1000).toFixed(0)}K
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sector Allocation and Risk Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sector Allocation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-card rounded-2xl p-6 border border-border shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Sector Allocation</h2>
              <PieChart className="h-6 w-6 text-primary" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {sectorData.map((sector) => (
                  <div key={sector.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-foreground">{sector.name}</span>
                      <span className="text-foreground">{sector.value}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div 
                        className={`${sector.color} h-2.5 rounded-full`} 
                        style={{ width: `${sector.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <PieChart className="w-full h-full text-secondary" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">65%</p>
                      <p className="text-muted-foreground">Technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Risk Analysis */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-card rounded-2xl p-6 border border-border shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Risk Analysis</h2>
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground">Volatility</span>
                  <span className="text-foreground">Moderate</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div className="bg-gradient-primary h-2.5 rounded-full w-2/3"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground">Sharpe Ratio</span>
                  <span className="text-foreground">1.25</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div className="bg-gradient-primary h-2.5 rounded-full w-3/4"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground">Max Drawdown</span>
                  <span className="text-foreground">-8.5%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div className="bg-gradient-primary h-2.5 rounded-full w-1/4"></div>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-medium text-foreground mb-2">Recommendations</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Diversify into healthcare sector</li>
                  <li>• Reduce exposure to high-volatility stocks</li>
                  <li>• Consider adding bonds for stability</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Metrics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="bg-gradient-card rounded-2xl p-6 border border-border shadow-lg">
            <h3 className="text-lg font-medium text-foreground mb-2">ROI</h3>
            <p className="text-3xl font-bold text-foreground">+11.2%</p>
            <p className="text-green-500">Annualized</p>
          </div>
          <div className="bg-gradient-card rounded-2xl p-6 border border-border shadow-lg">
            <h3 className="text-lg font-medium text-foreground mb-2">Alpha</h3>
            <p className="text-3xl font-bold text-foreground">+2.3%</p>
            <p className="text-green-500">Above benchmark</p>
          </div>
          <div className="bg-gradient-card rounded-2xl p-6 border border-border shadow-lg">
            <h3 className="text-lg font-medium text-foreground mb-2">Beta</h3>
            <p className="text-3xl font-bold text-foreground">0.85</p>
            <p className="text-muted-foreground">Market sensitivity</p>
          </div>
          <div className="bg-gradient-card rounded-2xl p-6 border border-border shadow-lg">
            <h3 className="text-lg font-medium text-foreground mb-2">CAGR</h3>
            <p className="text-3xl font-bold text-foreground">+9.7%</p>
            <p className="text-green-500">Compound annual growth</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
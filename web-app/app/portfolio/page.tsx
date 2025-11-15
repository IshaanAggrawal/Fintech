"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Plus, PieChart } from "lucide-react";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for demonstration
  const portfolioSummary = {
    totalValue: "$125,430.75",
    totalGain: "+$12,430.75",
    totalGainPercent: "+11.2%",
    isPositive: true
  };

  const holdings = [
    { symbol: "AAPL", name: "Apple Inc.", shares: 15, avgPrice: "$150.00", currentPrice: "$182.52", value: "$2,737.80", gain: "+$487.80", gainPercent: "+21.7%", isPositive: true },
    { symbol: "MSFT", name: "Microsoft Corp.", shares: 10, avgPrice: "$380.00", currentPrice: "$425.67", value: "$4,256.70", gain: "+$456.70", gainPercent: "+12.0%", isPositive: true },
    { symbol: "GOOGL", name: "Alphabet Inc.", shares: 5, avgPrice: "$140.00", currentPrice: "$175.75", value: "$878.75", gain: "-$71.25", gainPercent: "-5.1%", isPositive: false },
    { symbol: "AMZN", name: "Amazon.com Inc.", shares: 8, avgPrice: "$180.00", currentPrice: "$190.89", value: "$1,527.12", gain: "+$87.12", gainPercent: "+4.8%", isPositive: true },
  ];

  const allocation = [
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
          <h1 className="text-3xl font-bold text-foreground">Portfolio</h1>
          <p className="text-muted-foreground mt-2">Manage your investments and track performance</p>
        </div>

        {/* Portfolio Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-gradient-card rounded-2xl p-6 border border-border shadow-lg">
            <h3 className="text-lg font-medium text-foreground mb-2">Total Portfolio Value</h3>
            <p className="text-3xl font-bold text-foreground">{portfolioSummary.totalValue}</p>
            <div className="flex items-center mt-1">
              {portfolioSummary.isPositive ? (
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
              )}
              <span className={portfolioSummary.isPositive ? "text-green-500" : "text-red-500"}>
                {portfolioSummary.totalGain} ({portfolioSummary.totalGainPercent})
              </span>
            </div>
          </div>

          <div className="bg-gradient-card rounded-2xl p-6 border border-border shadow-lg">
            <h3 className="text-lg font-medium text-foreground mb-2">Today's Performance</h3>
            <p className="text-3xl font-bold text-foreground">+$2,845.20</p>
            <div className="flex items-center mt-1">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500">+2.3%</span>
            </div>
          </div>

          <div className="bg-gradient-card rounded-2xl p-6 border border-border shadow-lg">
            <h3 className="text-lg font-medium text-foreground mb-2">Holdings</h3>
            <p className="text-3xl font-bold text-foreground">24</p>
            <p className="text-muted-foreground">Stocks and ETFs</p>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-card rounded-2xl p-6 border border-border shadow-lg mb-8"
        >
          <div className="flex border-b border-border">
            <button
              className={`px-4 py-2 font-medium ${activeTab === "overview" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === "allocation" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"}`}
              onClick={() => setActiveTab("allocation")}
            >
              Allocation
            </button>
          </div>

          {/* Holdings Table */}
          {activeTab === "overview" && (
            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Symbol</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Shares</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Avg Price</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Current Price</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Value</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Gain/Loss</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {holdings.map((holding, index) => (
                    <motion.tr 
                      key={holding.symbol}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-foreground">{holding.symbol}</div>
                        <div className="text-sm text-muted-foreground">{holding.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground">{holding.shares}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-foreground">{holding.avgPrice}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-foreground">{holding.currentPrice}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right font-medium text-foreground">{holding.value}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className={holding.isPositive ? "text-green-500" : "text-red-500"}>
                          {holding.gain} ({holding.gainPercent})
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Allocation Chart */}
          {activeTab === "allocation" && (
            <div className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-4">Sector Allocation</h3>
                  <div className="space-y-4">
                    {allocation.map((item) => (
                      <div key={item.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-foreground">{item.name}</span>
                          <span className="text-foreground">{item.value}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2.5">
                          <div 
                            className={`${item.color} h-2.5 rounded-full`} 
                            style={{ width: `${item.value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-64 h-64">
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
            </div>
          )}
        </motion.div>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="fixed bottom-8 right-8"
        >
          <button className="bg-gradient-primary text-primary-foreground p-4 rounded-full shadow-lg hover:opacity-90 transition-opacity">
            <Plus className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Activity, BarChart3, ArrowUpRight, ArrowDownRight } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  // Mock data for demonstration
  const portfolioValue = "$125,430.75";
  const dailyChange = "+2.3%";
  const dailyChangeValue = "$2,845.20";
  const isPositive = true;

  const holdings = [
    { symbol: "AAPL", name: "Apple Inc.", shares: 15, value: "$2,450.00", change: "+1.2%" },
    { symbol: "MSFT", name: "Microsoft Corp.", shares: 10, value: "$3,200.00", change: "+0.8%" },
    { symbol: "GOOGL", name: "Alphabet Inc.", shares: 5, value: "$7,100.00", change: "-0.5%" },
    { symbol: "AMZN", name: "Amazon.com Inc.", shares: 8, value: "$1,850.00", change: "+2.1%" },
  ];

  const recentActivity = [
    { action: "Bought", symbol: "NVDA", amount: "10 shares", time: "2 hours ago", value: "$1,250.00" },
    { action: "Sold", symbol: "TSLA", amount: "5 shares", time: "1 day ago", value: "$1,125.00" },
    { action: "Dividend", symbol: "KO", amount: "Received", time: "2 days ago", value: "$32.50" },
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Welcome back! Here's your financial overview.</p>
        </div>

        {/* Portfolio Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-gradient-card rounded-2xl p-6 border border-border shadow-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-foreground">Portfolio Value</h3>
              <div className="p-2 bg-gradient-primary rounded-lg">
                <DollarSign className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold text-foreground">{portfolioValue}</p>
              <div className="flex items-center mt-1">
                {isPositive ? (
                  <ArrowUpRight className="h-4 w-4 text-green-500" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-red-500" />
                )}
                <span className={`ml-1 text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {dailyChange} ({dailyChangeValue})
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-card rounded-2xl p-6 border border-border shadow-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-foreground">Today's Gain</h3>
              <div className="p-2 bg-gradient-primary rounded-lg">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold text-foreground">$2,845.20</p>
              <p className="text-sm text-green-500 mt-1">+2.3% from yesterday</p>
            </div>
          </div>

          <div className="bg-gradient-card rounded-2xl p-6 border border-border shadow-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-foreground">Active Investments</h3>
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Activity className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold text-foreground">24</p>
              <p className="text-sm text-muted-foreground mt-1">Stocks and ETFs</p>
            </div>
          </div>
        </motion.div>

        {/* Holdings and Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Holdings */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-card rounded-2xl p-6 border border-border shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Your Holdings</h2>
              <Link href="/portfolio" className="text-primary hover:text-primary/80 text-sm font-medium">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {holdings.map((holding, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                  <div>
                    <p className="font-medium text-foreground">{holding.symbol}</p>
                    <p className="text-sm text-muted-foreground">{holding.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">{holding.value}</p>
                    <p className={`text-sm ${holding.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {holding.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-card rounded-2xl p-6 border border-border shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Recent Activity</h2>
              <Link href="/activity" className="text-primary hover:text-primary/80 text-sm font-medium">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                  <div>
                    <p className="font-medium text-foreground">{activity.action} {activity.symbol}</p>
                    <p className="text-sm text-muted-foreground">{activity.amount} • {activity.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">{activity.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Market Insights */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 bg-gradient-card rounded-2xl p-6 border border-border shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">Market Insights</h2>
            <Link href="/analytics" className="text-primary hover:text-primary/80 text-sm font-medium">
              View Detailed Analysis
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-secondary rounded-lg">
              <div className="flex items-center">
                <BarChart3 className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium text-foreground">S&P 500</span>
              </div>
              <p className="text-lg font-bold text-foreground mt-2">5,236.78</p>
              <p className="text-sm text-green-500">+0.8%</p>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <div className="flex items-center">
                <BarChart3 className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium text-foreground">NASDAQ</span>
              </div>
              <p className="text-lg font-bold text-foreground mt-2">16,852.42</p>
              <p className="text-sm text-green-500">+1.2%</p>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <div className="flex items-center">
                <BarChart3 className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium text-foreground">DOW JONES</span>
              </div>
              <p className="text-lg font-bold text-foreground mt-2">39,254.67</p>
              <p className="text-sm text-red-500">-0.3%</p>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <div className="flex items-center">
                <BarChart3 className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium text-foreground">VIX</span>
              </div>
              <p className="text-lg font-bold text-foreground mt-2">14.25</p>
              <p className="text-sm text-green-500">-2.1%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
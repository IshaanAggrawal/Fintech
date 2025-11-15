"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Search, Filter } from "lucide-react";

export default function MarketsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock data for demonstration
  const marketData = [
    { symbol: "AAPL", name: "Apple Inc.", price: "$182.52", change: "+1.24%", changeValue: "+$2.23", isPositive: true },
    { symbol: "MSFT", name: "Microsoft Corp.", price: "$425.67", change: "+0.86%", changeValue: "+$3.62", isPositive: true },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: "$175.75", change: "-0.52%", changeValue: "-$0.92", isPositive: false },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: "$190.89", change: "+2.15%", changeValue: "+$3.98", isPositive: true },
    { symbol: "TSLA", name: "Tesla Inc.", price: "$225.36", change: "-1.87%", changeValue: "-$4.31", isPositive: false },
    { symbol: "META", name: "Meta Platforms Inc.", price: "$512.34", change: "+1.45%", changeValue: "+$7.32", isPositive: true },
    { symbol: "NFLX", name: "Netflix Inc.", price: "$665.21", change: "+0.92%", changeValue: "+$6.03", isPositive: true },
    { symbol: "NVDA", name: "NVIDIA Corp.", price: "$125.67", change: "+3.24%", changeValue: "+$3.89", isPositive: true },
  ];

  const filteredData = marketData.filter(stock => 
    stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) || 
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Markets</h1>
          <p className="text-muted-foreground mt-2">Track real-time stock prices and market movements</p>
        </div>

        {/* Search and Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-card rounded-2xl p-6 border border-border shadow-lg mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search stocks..."
                className="pl-10 w-full rounded-lg border border-input bg-gradient-card px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="flex items-center justify-center px-4 py-2 bg-secondary rounded-lg text-foreground hover:bg-secondary/80 transition-colors">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>
        </motion.div>

        {/* Market Data Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-card rounded-2xl border border-border shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-secondary">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Symbol
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Change
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Change %
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredData.map((stock, index) => (
                  <motion.tr 
                    key={stock.symbol}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="hover:bg-secondary/50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-foreground">{stock.symbol}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-foreground">{stock.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-foreground">
                      {stock.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-foreground">
                      {stock.changeValue}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <span className={stock.isPositive ? "text-green-500" : "text-red-500"}>
                        {stock.isPositive ? <TrendingUp className="inline h-4 w-4 mr-1" /> : <TrendingDown className="inline h-4 w-4 mr-1" />}
                        {stock.change}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Market Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-card rounded-2xl p-6 border border-border shadow-lg">
            <h3 className="text-lg font-medium text-foreground mb-4">Market Leaders</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-foreground">Tech Sector</span>
                <span className="text-green-500 font-medium">+2.3%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground">Healthcare</span>
                <span className="text-red-500 font-medium">-0.7%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground">Energy</span>
                <span className="text-green-500 font-medium">+1.8%</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-card rounded-2xl p-6 border border-border shadow-lg">
            <h3 className="text-lg font-medium text-foreground mb-4">Top Gainers</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-foreground">NVDA</span>
                <span className="text-green-500 font-medium">+3.24%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground">AMZN</span>
                <span className="text-green-500 font-medium">+2.15%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground">META</span>
                <span className="text-green-500 font-medium">+1.45%</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-card rounded-2xl p-6 border border-border shadow-lg">
            <h3 className="text-lg font-medium text-foreground mb-4">Top Losers</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-foreground">TSLA</span>
                <span className="text-red-500 font-medium">-1.87%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground">GOOGL</span>
                <span className="text-red-500 font-medium">-0.52%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground">JPM</span>
                <span className="text-red-500 font-medium">-0.95%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
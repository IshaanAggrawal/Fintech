"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Zap, Shield } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "AI-Powered Predictions",
      description: "Advanced algorithms predict market trends with high accuracy"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-Time Analytics",
      description: "Monitor your investments with live data and insights"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Get insights in milliseconds with our optimized platform"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bank-Level Security",
      description: "Your financial data is protected with enterprise-grade security"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gradient-secondary sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl tracking-tight font-extrabold text-foreground sm:text-5xl md:text-6xl"
                >
                  <span className="block">AI-Powered</span>
                  <span className="block text-primary">Financial Insights</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                >
                  Make smarter investment decisions with our advanced machine learning algorithms that analyze market trends and predict future movements.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                >
                  <div className="rounded-md shadow">
                    <Link
                      href="/signup"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-gradient-primary hover:opacity-90 md:py-4 md:text-lg md:px-10 transition-opacity"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/markets"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-gradient-secondary hover:opacity-80 md:py-4 md:text-lg md:px-10 transition-opacity"
                    >
                      View Markets
                    </Link>
                  </div>
                </motion.div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base text-primary font-semibold tracking-wide uppercase"
            >
              Features
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl"
            >
              Everything you need for smart investing
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto"
            >
              Our platform provides all the tools and insights you need to make informed financial decisions.
            </motion.p>
          </div>

          <div className="mt-10">
            <motion.dl 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
            >
              {features.map((feature, index) => (
                <div key={index} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-primary text-primary-foreground">
                      {feature.icon}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-foreground">{feature.title}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-muted-foreground">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </div>
    </div>
  );
}
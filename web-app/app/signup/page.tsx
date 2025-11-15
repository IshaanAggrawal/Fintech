"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, User, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup attempt with:", { name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-secondary px-4 py-12 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-gradient-card rounded-2xl shadow-xl p-8 border border-border">
          <div className="text-center mb-8">
            <div className="mx-auto bg-gradient-primary p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Create Account</h1>
            <p className="text-muted-foreground mt-2">
              Get started with FinPredict today
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 w-full rounded-lg border border-input bg-gradient-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
                  placeholder="John Doe"
                  suppressHydrationWarning
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 w-full rounded-lg border border-input bg-gradient-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
                  placeholder="you@example.com"
                  suppressHydrationWarning
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2 text-foreground">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 w-full rounded-lg border border-input bg-gradient-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
                  placeholder="••••••••"
                  suppressHydrationWarning
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  suppressHydrationWarning
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Eye className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-primary focus:ring-primary border-muted-foreground rounded bg-gradient-card"
                suppressHydrationWarning
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-foreground">
                I agree to the{" "}
                <Link href="/terms" className="font-medium text-primary hover:text-primary/80">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="font-medium text-primary hover:text-primary/80">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-primary text-primary-foreground py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-primary hover:text-primary/80">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
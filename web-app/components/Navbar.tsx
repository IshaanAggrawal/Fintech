"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Markets", href: "/markets" },
    { name: "Analytics", href: "/analytics" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-4 left-1/2 z-50 transition-all duration-300 ${
          isScrolled 
            ? "w-[90%] -translate-x-1/2 backdrop-blur-md bg-gradient-card border border-border/50 rounded-xl py-2 shadow-lg" 
            : "w-[95%] -translate-x-1/2 backdrop-blur-sm bg-gradient-card border border-border/30 rounded-2xl py-4 shadow-xl"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-primary p-1.5 rounded-lg">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">FinPredict</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/login"
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-4 py-4 space-y-4 bg-gradient-card backdrop-blur-lg border-t border-border/50 rounded-b-2xl">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-foreground/80 hover:text-foreground transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-3">
                  <Link
                    href="/login"
                    className="block text-center text-foreground/80 hover:text-foreground transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="block text-center bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-24"></div>
    </>
  );
}
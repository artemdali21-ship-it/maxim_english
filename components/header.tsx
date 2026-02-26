'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary font-space-grotesk">
          Maxim
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="hover:text-accent transition">
            About
          </a>
          <a href="#philosophy" className="hover:text-accent transition">
            Philosophy
          </a>
          <a href="#method" className="hover:text-accent transition">
            Method
          </a>
          <a href="#format" className="hover:text-accent transition">
            Format
          </a>
          <a href="#testimonials" className="hover:text-accent transition">
            Reviews
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-6">
          <nav className="flex flex-col gap-4">
            <a href="#about" className="text-foreground hover:text-accent" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#philosophy" className="text-foreground hover:text-accent" onClick={() => setIsMenuOpen(false)}>
              Philosophy
            </a>
            <a href="#method" className="text-foreground hover:text-accent" onClick={() => setIsMenuOpen(false)}>
              Method
            </a>
            <a href="#format" className="text-foreground hover:text-accent" onClick={() => setIsMenuOpen(false)}>
              Format
            </a>
            <a href="#testimonials" className="text-foreground hover:text-accent" onClick={() => setIsMenuOpen(false)}>
              Reviews
            </a>
            <button className="mt-4 w-full px-6 py-2 bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

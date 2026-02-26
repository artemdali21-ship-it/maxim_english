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
          ? 'bg-background/98 backdrop-blur-xl border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo - Serif luxury brand */}
        <Link href="/" className="group flex items-baseline gap-1">
          <span className="text-lg font-serif font-bold text-primary group-hover:text-accent transition-colors duration-300">
            Maxim Onufriev English
          </span>
        </Link>

        {/* Desktop Navigation - Clean spacing */}
        <nav className="hidden md:flex items-center gap-12">
          <a 
            href="#about" 
            className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-200 relative group"
          >
            О преподавателе
            <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#philosophy" 
            className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-200 relative group"
          >
            Философия
            <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#method" 
            className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-200 relative group"
          >
            Метод
            <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#format" 
            className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-200 relative group"
          >
            Формат
            <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>

        {/* CTA Button - Geometric precision */}
        <div className="hidden md:flex">
          <Link 
            href="https://t.me/Max_Onny"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-7 py-2.5 bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-all duration-200 border border-accent/50 hover:border-accent hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5">
              Записаться
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-8 space-y-6">
          <nav className="flex flex-col gap-6">
            <a href="#about" className="text-foreground hover:text-accent font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
              О преподавателе
            </a>
            <a href="#philosophy" className="text-foreground hover:text-accent font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
              Философия
            </a>
            <a href="#method" className="text-foreground hover:text-accent font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
              Метод
            </a>
            <a href="#format" className="text-foreground hover:text-accent font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
              Формат
            </a>
          </nav>
          <Link 
            href="https://t.me/Max_Onny"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            <button className="w-full px-7 py-3 bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-all border border-accent/50">
              Записаться
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}

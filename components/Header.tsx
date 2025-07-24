
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from './ui/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', href: '/features' },
    { name: 'Industries', href: '/industries' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'backdrop-blur-md bg-white/80 border-b border-white/20 shadow-lg' 
        : 'backdrop-blur-md bg-white/60 border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="text-2xl font-bold text-black transform transition-all duration-300 group-hover:scale-110">
              <span style={{ fontFamily: '"Pacifico", serif' }} className="group-hover:text-gray-700">
                1vans
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-black hover:text-gray-700 transition-all duration-300 relative group transform hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="group hover:scale-105 transition-all duration-300"
            >
              Sign In
              <i className="ri-login-circle-line ml-2 group-hover:rotate-12 transition-transform duration-300"></i>
            </Button>
            <Button 
              size="sm"
              className="group hover:scale-105 transition-all duration-300"
            >
              Get Started
              <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg backdrop-blur-md bg-white/20 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl text-black transition-transform duration-300 ${
              isMenuOpen ? 'rotate-180' : ''
            }`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden backdrop-blur-md bg-white/90 border-b border-white/20 transition-all duration-500 ${
        isMenuOpen 
          ? 'max-h-96 opacity-100 transform translate-y-0' 
          : 'max-h-0 opacity-0 transform -translate-y-4'
      } overflow-hidden`}>
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block text-black hover:text-gray-700 transition-all duration-300 py-2 transform hover:translate-x-2 animate-slide-in-left`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <i className="ri-arrow-right-s-line mr-2 transition-transform duration-300"></i>
                {item.name}
              </div>
            </Link>
          ))}
          <div className="pt-4 border-t border-white/20 space-y-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full group hover:scale-105 transition-all duration-300"
            >
              Sign In
              <i className="ri-login-circle-line ml-2 group-hover:rotate-12 transition-transform duration-300"></i>
            </Button>
            <Button 
              size="sm" 
              className="w-full group hover:scale-105 transition-all duration-300"
            >
              Get Started
              <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

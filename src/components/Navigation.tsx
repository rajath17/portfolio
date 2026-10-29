import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Moon, Sun } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            Rajath K Mohare
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition-colors"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-200 flex items-center space-x-2">
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-900 dark:text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/90 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 p-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
              className="w-full mt-2 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition-colors flex items-center justify-center space-x-2"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
              <span>{isDark ? 'Light mode' : 'Dark mode'}</span>
            </button>
            <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full flex items-center justify-center space-x-2">
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              © 2024 Rajath K Mohare. All rights reserved.
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              Designed & Built with passion for AI/ML innovation
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
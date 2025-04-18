import React, { useState, useEffect, useRef } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Leaf, Menu, X, Globe, ChevronDown } from 'lucide-react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('PT');
  const location = useLocation();
  const menuRef = useRef(null);
  
  const languages = [
    { code: 'PT', label: 'Português' },
    { code: 'EN', label: 'English' },
    { code: 'ES', label: 'Español' }
  ];

  // Close mobile menu on location change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle language change
  const handleLangChange = (langCode) => {
    setCurrentLang(langCode);
    setIsLangMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Header and Navigation - Absolute positioning */}
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 sm:px-6 md:px-16 pt-6 md:pt-8 pb-4 md:pb-6 z-40">
        <div className="flex items-center">
          <div className="relative flex items-center">
            <Leaf className="w-5 h-5 md:w-6 md:h-6 text-green-400 absolute -left-2 md:-left-3 -top-0" />
            <h1 className="text-lg md:text-2xl font-light tracking-widest pl-4">
              <span className="text-green-400 font-medium">PIPE</span>
              <span className="ml-1">AGRO</span>
            </h1>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-sm uppercase tracking-widest transition-all duration-300 px-3 py-1 rounded-md ${
                isActive 
                  ? 'text-white bg-green-600/70 font-semibold' 
                  : 'text-white/90 hover:text-green-400 hover:bg-green-900/30'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/produtos" 
            className={({ isActive }) => 
              `text-sm uppercase tracking-widest transition-all duration-300 px-3 py-1 rounded-md ${
                isActive 
                  ? 'text-white bg-green-600/70 font-semibold' 
                  : 'text-white/90 hover:text-green-400 hover:bg-green-900/30'
              }`
            }
          >
            Produtos
          </NavLink>
          <NavLink 
            to="/servicos" 
            className={({ isActive }) => 
              `text-sm uppercase tracking-widest transition-all duration-300 px-3 py-1 rounded-md ${
                isActive 
                  ? 'text-white bg-green-600/70 font-semibold' 
                  : 'text-white/90 hover:text-green-400 hover:bg-green-900/30'
              }`
            }
          >
            Serviços
          </NavLink>
          <NavLink 
            to="/galeria" 
            className={({ isActive }) => 
              `text-sm uppercase tracking-widest transition-all duration-300 px-3 py-1 rounded-md ${
                isActive 
                  ? 'text-white bg-green-600/70 font-semibold' 
                  : 'text-white/90 hover:text-green-400 hover:bg-green-900/30'
              }`
            }
          >
            Galeria
          </NavLink>
          <NavLink 
            to="/contato" 
            className={({ isActive }) => 
              `text-sm uppercase tracking-widest transition-all duration-300 px-3 py-1 rounded-md ${
                isActive 
                  ? 'text-white bg-green-600/70 font-semibold' 
                  : 'text-white/90 hover:text-green-400 hover:bg-green-900/30'
              }`
            }
          >
            Contato
          </NavLink>
          
          {/* Language Selector (Desktop) */}
          <div className="relative ml-4">
            <button 
              className="flex items-center space-x-1 text-sm uppercase tracking-widest py-1 px-2 border border-white/20 rounded hover:border-green-400/50 hover:bg-black/30 transition-all duration-300"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            >
              <Globe className="w-4 h-4 mr-1" />
              <span>{currentLang}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-1 bg-black/90 border border-green-900/60 rounded-md overflow-hidden backdrop-blur-lg shadow-lg z-50 w-32">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                      currentLang === lang.code 
                        ? 'bg-green-800/50 text-white' 
                        : 'hover:bg-green-900/30 text-white/80 hover:text-white'
                    }`}
                    onClick={() => handleLangChange(lang.code)}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          {/* Language Selector (Mobile) */}
          <button 
            className="flex items-center justify-center text-sm p-1.5 border border-white/20 rounded-full hover:border-green-400/50 hover:bg-black/30 transition-all duration-300"
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
          >
            <Globe className="w-4 h-4" />
          </button>
          
          {/* Menu Toggle */}
          <button 
            className="flex items-center justify-center p-1.5 rounded-full border border-white/20 text-white hover:border-green-400/50 hover:bg-black/30 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>
      
      {/* Overlay for mobile menu */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-45 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      
      {/* Modern Mobile Navigation Drawer */}
      <div 
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gradient-to-b from-black to-green-950/90 shadow-xl z-50 transform transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
            <h2 className="text-xl font-medium text-green-400">Menu</h2>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-1.5 rounded-full hover:bg-black/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
          
          {/* Mobile Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `flex items-center text-base uppercase px-6 py-3.5 border-l-4 ${
                  isActive 
                    ? 'border-green-500 bg-green-900/20 text-white font-medium' 
                    : 'border-transparent hover:border-green-500/50 hover:bg-green-900/10 text-white/80'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/produtos" 
              className={({ isActive }) => 
                `flex items-center text-base uppercase px-6 py-3.5 border-l-4 ${
                  isActive 
                    ? 'border-green-500 bg-green-900/20 text-white font-medium' 
                    : 'border-transparent hover:border-green-500/50 hover:bg-green-900/10 text-white/80'
                }`
              }
            >
              Produtos
            </NavLink>
            <NavLink 
              to="/servicos" 
              className={({ isActive }) => 
                `flex items-center text-base uppercase px-6 py-3.5 border-l-4 ${
                  isActive 
                    ? 'border-green-500 bg-green-900/20 text-white font-medium' 
                    : 'border-transparent hover:border-green-500/50 hover:bg-green-900/10 text-white/80'
                }`
              }
            >
              Serviços
            </NavLink>
            <NavLink 
              to="/galeria" 
              className={({ isActive }) => 
                `flex items-center text-base uppercase px-6 py-3.5 border-l-4 ${
                  isActive 
                    ? 'border-green-500 bg-green-900/20 text-white font-medium' 
                    : 'border-transparent hover:border-green-500/50 hover:bg-green-900/10 text-white/80'
                }`
              }
            >
              Galeria
            </NavLink>
            <NavLink 
              to="/contato" 
              className={({ isActive }) => 
                `flex items-center text-base uppercase px-6 py-3.5 border-l-4 ${
                  isActive 
                    ? 'border-green-500 bg-green-900/20 text-white font-medium' 
                    : 'border-transparent hover:border-green-500/50 hover:bg-green-900/10 text-white/80'
                }`
              }
            >
              Contato
            </NavLink>
          </nav>
          
          {/* Language Options (Mobile) */}
          <div className="px-6 py-5 border-t border-white/10">
            <p className="text-sm text-white/50 uppercase mb-2 tracking-wider">Idioma</p>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`py-2 rounded transition-all duration-200 text-sm ${
                    currentLang === lang.code 
                      ? 'bg-green-600 text-white font-medium shadow-md' 
                      : 'bg-black/40 text-white/70 hover:text-white hover:bg-black/60'
                  }`}
                  onClick={() => handleLangChange(lang.code)}
                >
                  {lang.code}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Language Menu for Mobile */}
      {isLangMenuOpen && (
        <div className="md:hidden fixed top-16 right-4 bg-black/95 border border-green-900/40 rounded-md overflow-hidden backdrop-blur-md shadow-lg z-50 w-40">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`block w-full text-left px-4 py-3 text-sm transition-colors duration-200 ${
                currentLang === lang.code 
                  ? 'bg-green-800/50 text-white' 
                  : 'hover:bg-green-900/30 text-white/80 hover:text-white'
              }`}
              onClick={() => handleLangChange(lang.code)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
      
      {/* Content Area - full height */}
      <main className="h-screen w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
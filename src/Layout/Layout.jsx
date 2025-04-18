import React, { useState, useEffect, useRef } from 'react';
import { Outlet, NavLink, useLocation, Link } from 'react-router-dom';
import { Leaf, Menu, X, Globe, ChevronDown, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter, ArrowRight, ChevronRight } from 'lucide-react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('PT');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const languages = [
    { code: 'PT', label: 'Português' },
    { code: 'EN', label: 'English' },
    { code: 'ES', label: 'Español' }
  ];

  // Check if we're on home route
  const isHomeRoute = location.pathname === '/' || location.pathname === '/home';

  // Correção: shouldUseWhiteText deve considerar tanto a rota quanto o estado de scroll
  // Dessa forma, quando houver scroll na página home, o texto não será mais branco
  const shouldUseWhiteText = isHomeRoute && !scrolled;

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      {/* Header and Navigation - Absolute positioning with dynamic styling */}
      <header className={`fixed top-0 left-0 right-0 flex justify-between items-center px-4 sm:px-6 md:px-16 pt-6 md:pt-8 pb-4 md:pb-6 z-40 transition-all duration-1000 ${scrolled ? 'bg-white text-black shadow-md pt-4 md:pt-4 pb-3 md:pb-3' : ''
        }`}>
        <div className="flex items-center">
          <div className="relative flex items-center">
            <Leaf className={`w-5 h-5 md:w-6 md:h-6 absolute -left-2 md:-left-3 -top-0 transition-colors duration-1000 ${shouldUseWhiteText ? 'text-green-400' : 'text-green-600'
              }`} />
            <h1 className="text-lg md:text-2xl font-light tracking-widest pl-4">
              <span className={`font-medium transition-colors duration-1000 ${shouldUseWhiteText ? 'text-green-400' : 'text-green-600'
                }`}>PIPE</span>
              <span className={`ml-1 transition-colors duration-1000 ${shouldUseWhiteText ? 'text-white' : 'text-black'
                }`}>AGRO</span>
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) => {
              const baseClasses = "text-sm uppercase tracking-widest transition-all duration-1000 px-3 py-1 rounded-md";

              if (isActive) {
                return `${baseClasses} text-white bg-green-600 font-semibold`;
              } else {
                return `${baseClasses} ${shouldUseWhiteText ? 'text-white/90 hover:text-green-400 hover:bg-green-900/30' : 'text-black hover:text-green-600 hover:bg-green-100/30'
                  }`;
              }
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/produtos"
            className={({ isActive }) => {
              const baseClasses = "text-sm uppercase tracking-widest transition-all duration-1000 px-3 py-1 rounded-md";

              if (isActive) {
                return `${baseClasses} text-white bg-green-600 font-semibold`;
              } else {
                return `${baseClasses} ${shouldUseWhiteText ? 'text-white/90 hover:text-green-400 hover:bg-green-900/30' : 'text-black hover:text-green-600 hover:bg-green-100/30'
                  }`;
              }
            }}
          >
            Produtos
          </NavLink>
          <NavLink
            to="/servicos"
            className={({ isActive }) => {
              const baseClasses = "text-sm uppercase tracking-widest transition-all duration-1000 px-3 py-1 rounded-md";

              if (isActive) {
                return `${baseClasses} text-white bg-green-600 font-semibold`;
              } else {
                return `${baseClasses} ${shouldUseWhiteText ? 'text-white/90 hover:text-green-400 hover:bg-green-900/30' : 'text-black hover:text-green-600 hover:bg-green-100/30'
                  }`;
              }
            }}
          >
            Serviços
          </NavLink>
          <NavLink
            to="/galeria"
            className={({ isActive }) => {
              const baseClasses = "text-sm uppercase tracking-widest transition-all duration-1000 px-3 py-1 rounded-md";

              if (isActive) {
                return `${baseClasses} text-white bg-green-600 font-semibold`;
              } else {
                return `${baseClasses} ${shouldUseWhiteText ? 'text-white/90 hover:text-green-400 hover:bg-green-900/30' : 'text-black hover:text-green-600 hover:bg-green-100/30'
                  }`;
              }
            }}
          >
            Galeria
          </NavLink>
          <NavLink
            to="/contato"
            className={({ isActive }) => {
              const baseClasses = "text-sm uppercase tracking-widest transition-all duration-1000 px-3 py-1 rounded-md";

              if (isActive) {
                return `${baseClasses} text-white bg-green-600 font-semibold`;
              } else {
                return `${baseClasses} ${shouldUseWhiteText ? 'text-white/90 hover:text-green-400 hover:bg-green-900/30' : 'text-black hover:text-green-600 hover:bg-green-100/30'
                  }`;
              }
            }}
          >
            Contato
          </NavLink>

          {/* Language Selector (Desktop) */}
          <div className="relative ml-4">
            <button
              className={`flex items-center space-x-1 text-sm uppercase tracking-widest py-1 px-2 rounded transition-all duration-1000 ${shouldUseWhiteText
                ? 'border border-white/20 hover:border-green-400/50 hover:bg-black/30 text-white'
                : 'border border-green-600/20 hover:border-green-600/50 hover:bg-green-50 text-black'
                }`}
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            >
              <Globe className={`w-4 h-4 mr-1 transition-colors duration-1000 ${shouldUseWhiteText ? '' : 'text-green-600'}`} />
              <span className="transition-colors duration-1000">{currentLang}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-1000 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangMenuOpen && (
              <div className={`absolute right-0 mt-1 rounded-md overflow-hidden backdrop-blur-lg shadow-lg z-50 w-32 transition-colors duration-300 ${shouldUseWhiteText
                ? 'bg-black/90 border border-green-900/60'
                : 'bg-white/95 border border-green-200'
                }`}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-300 ${currentLang === lang.code
                      ? shouldUseWhiteText
                        ? 'bg-green-800/50 text-white'
                        : 'bg-green-100 text-green-800 font-medium'
                      : shouldUseWhiteText
                        ? 'hover:bg-green-900/30 text-white/80 hover:text-white'
                        : 'hover:bg-green-50 text-gray-800 hover:text-green-700'
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
            className={`flex items-center justify-center text-sm p-1.5 rounded-full transition-all duration-1000 ${shouldUseWhiteText
              ? 'border border-white/20 hover:border-green-400/50 hover:bg-black/30 text-white'
              : 'border border-green-600/20 hover:border-green-600/50 hover:bg-green-50 text-green-700'
              }`}
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
          >
            <Globe className="w-4 h-4 transition-colors duration-1000" />
          </button>

          {/* Menu Toggle */}
          <button
            className={`flex items-center justify-center p-1.5 rounded-full transition-all duration-1000 ${shouldUseWhiteText
              ? 'border border-white/20 hover:border-green-400/50 hover:bg-black/30 text-white'
              : 'border border-green-600/20 hover:border-green-600/50 hover:bg-green-50 text-green-700'
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 transition-colors duration-1000" />
            ) : (
              <Menu className="w-5 h-5 transition-colors duration-1000" />
            )}
          </button>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-45 transition-opacity duration-1000 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Modern Mobile Navigation Drawer */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gradient-to-b from-black to-green-950/90 shadow-xl z-50 transform transition-transform duration-1000 ease-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
            <h2 className="text-xl font-medium text-green-400">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-1.5 rounded-full hover:bg-black/20 transition-colors duration-300"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center text-base uppercase px-6 py-3.5 border-l-4 transition-all duration-300 ${isActive
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
                `flex items-center text-base uppercase px-6 py-3.5 border-l-4 transition-all duration-300 ${isActive
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
                `flex items-center text-base uppercase px-6 py-3.5 border-l-4 transition-all duration-300 ${isActive
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
                `flex items-center text-base uppercase px-6 py-3.5 border-l-4 transition-all duration-300 ${isActive
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
                `flex items-center text-base uppercase px-6 py-3.5 border-l-4 transition-all duration-300 ${isActive
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
                  className={`py-2 rounded transition-all duration-300 text-sm ${currentLang === lang.code
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
        <div className={`md:hidden fixed top-16 right-4 rounded-md overflow-hidden backdrop-blur-md shadow-lg z-50 w-40 transition-colors duration-300 ${shouldUseWhiteText
          ? 'bg-black/95 border border-green-900/40'
          : 'bg-white/95 border border-green-200'
          }`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`block w-full text-left px-4 py-3 text-sm transition-colors duration-300 ${currentLang === lang.code
                ? shouldUseWhiteText
                  ? 'bg-green-800/50 text-white'
                  : 'bg-green-100 text-green-800'
                : shouldUseWhiteText
                  ? 'hover:bg-green-900/30 text-white/80 hover:text-white'
                  : 'hover:bg-green-50 text-gray-800 hover:text-green-700'
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


        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          {/* Main Footer Content */}
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Column 1 - About */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="relative flex items-center">
                    <Leaf className="w-5 h-5 absolute -left-2 text-green-400" />
                    <h2 className="text-xl font-light tracking-widest pl-4">
                      <span className="font-medium text-green-400">PIPE</span>
                      <span className="ml-1 text-white">AGRO</span>
                    </h2>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">
                  Soluções inovadoras para agricultura sustentável. Contribuindo para o desenvolvimento agrícola de Angola com tecnologia e qualidade.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Avenida Principal, 123, Luanda, Angola</span>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">+244 123 456 789</span>
                  </div>

                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <a href="mailto:contato@pipeagro.com" className="text-gray-300 hover:text-white transition-colors">
                      contato@pipeagro.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Column 2 - Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-green-500/30">Links Rápidos</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/" className="text-gray-300 hover:text-white transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4 text-green-400 mr-2" />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/produtos" className="text-gray-300 hover:text-white transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4 text-green-400 mr-2" />
                      Produtos
                    </Link>
                  </li>
                  <li>
                    <Link to="/servicos" className="text-gray-300 hover:text-white transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4 text-green-400 mr-2" />
                      Serviços
                    </Link>
                  </li>
                  <li>
                    <Link to="/galeria" className="text-gray-300 hover:text-white transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4 text-green-400 mr-2" />
                      Galeria
                    </Link>
                  </li>
                  <li>
                    <Link to="/contato" className="text-gray-300 hover:text-white transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4 text-green-400 mr-2" />
                      Contato
                    </Link>
                  </li>
                  <li>
                    <Link to="/sobre" className="text-gray-300 hover:text-white transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4 text-green-400 mr-2" />
                      Sobre Nós
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3 - Services */}
              <div>
                <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-green-500/30">Nossos Serviços</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/servicos/consultoria" className="text-gray-300 hover:text-white transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4 text-green-400 mr-2" />
                      Consultoria Agrícola
                    </Link>
                  </li>
                  <li>
                    <Link to="/servicos/insumos" className="text-gray-300 hover:text-white transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4 text-green-400 mr-2" />
                      Insumos Agrícolas
                    </Link>
                  </li>
                  <li>
                    <Link to="/servicos/capacitacao" className="text-gray-300 hover:text-white transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4 text-green-400 mr-2" />
                      Capacitação Técnica
                    </Link>
                  </li>
                  <li>
                    <Link to="/servicos/irrigacao" className="text-gray-300 hover:text-white transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4 text-green-400 mr-2" />
                      Sistemas de Irrigação
                    </Link>
                  </li>
                  <li>
                    <Link to="/servicos/maquinario" className="text-gray-300 hover:text-white transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4 text-green-400 mr-2" />
                      Maquinário Agrícola
                    </Link>
                  </li>
                  <li>
                    <Link to="/servicos/assistencia" className="text-gray-300 hover:text-white transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4 text-green-400 mr-2" />
                      Assistência Técnica
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 4 - Newsletter */}
              <div>
                <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-green-500/30">Fique Conectado</h3>
                <p className="text-gray-300 mb-4">
                  Inscreva-se para receber atualizações e novidades sobre nossos produtos e serviços.
                </p>

                {/* Newsletter Form */}
                <form className="mb-6">
                  <div className="flex flex-col sm:flex-row">
                    <input
                      type="email"
                      placeholder="Seu e-mail"
                      className="bg-gray-700 text-gray-200 px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-green-400 w-full sm:w-auto"
                    />
                    <button
                      type="submit"
                      className="bg-green-600 hover:bg-green-500 transition-colors px-4 py-2 rounded-r flex items-center justify-center text-sm font-medium mt-2 sm:mt-0"
                    >
                      <span>Inscrever</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </form>

                {/* Social Media */}
                <h4 className="text-md font-medium mb-4">Redes Sociais</h4>
                <div className="flex space-x-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-600 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-600 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-600 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom / Copyright */}
          <div className="bg-black/30 py-6">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {currentYear} <span className="text-green-400">PIPE Agro</span>. Todos os direitos reservados.
              </div>

              <div className="flex space-x-6">
                <Link to="/privacidade" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Política de Privacidade
                </Link>
                <Link to="/termos" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Termos de Uso
                </Link>
                <Link to="/cookie" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Política de Cookies
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Layout;
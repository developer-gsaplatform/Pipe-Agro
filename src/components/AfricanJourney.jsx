import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Twitter, Instagram, Facebook, MoveRight, Leaf } from 'lucide-react';
import image1 from '../assets/2148761771.jpg';
import image2 from '../assets/2151487426.jpg';
import image3 from '../assets/2151487537.jpg';

const PipeAgro = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  
  const slides = [
    { 
      id: 1, 
      theme: "PIPE Agro 1",
      title: "titulo 1", 
      subtitle: "SUBTITULO 1", 
      description: "Aqui vai apareçer uma descrição mais longa e detalhada sobre o destino, incluindo informações sobre cultura, clima e atividades disponíveis.",
      bgImage: image1 
    },
    { 
      id: 2, 
      theme: "PIPE Agro 2",
      title: "titulo 2", 
      subtitle: "SUBTITULO 2", 
      description: "Aqui vai apareçer uma descrição mais longa e detalhada sobre o destino, incluindo informações sobre cultura, clima e atividades disponíveis.",
      bgImage: image2 
    },
    { 
      id: 3, 
      theme: "PIPE Agro 3",
      title: "titulo 3", 
      subtitle: "SUBTITULO 3", 
      description: "Aqui vai apareçer uma descrição mais longa e detalhada sobre o destino, incluindo informações sobre cultura, clima e atividades disponíveis.",
      bgImage: image3 
    }
  ];
  
  const handleSlideChange = (index) => {
    if (animating || index === activeSlide) return;
    
    setAnimating(true);
    setDirection(index > activeSlide ? 'next' : 'prev');
    setPreviousSlide(activeSlide);
    setActiveSlide(index);
    
    setTimeout(() => setAnimating(false), 1000);
  };
  
  const goToNextSlide = () => {
    handleSlideChange((activeSlide + 1) % slides.length);
  };
  
  const goToPrevSlide = () => {
    handleSlideChange((activeSlide - 1 + slides.length) % slides.length);
  };
  
  useEffect(() => {
    // Auto-rotate slides
    const interval = setInterval(() => {
      if (!animating) {
        goToNextSlide();
      }
    }, 8000);
    
    return () => clearInterval(interval);
  }, [activeSlide, animating]);
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Images com Transições Aprimoradas */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-all duration-1500 ease-in-out bg-cover bg-center ${
            index === activeSlide 
              ? 'opacity-100 scale-100 z-10' 
              : index === previousSlide 
                ? `opacity-0 ${direction === 'next' ? 'scale-110' : 'scale-90'} z-0` 
                : 'opacity-0 scale-100 z-0'
          }`}
          style={{ 
            backgroundImage: `url(${slide.bgImage})`,
            transitionProperty: 'opacity, transform'
          }}
        />
      ))}
      
      {/* Overlay Atmosférico Aprimorado */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-20">
        <div className={`absolute inset-0 transition-opacity duration-1000 bg-black/30 backdrop-blur-sm ${animating ? 'opacity-40' : 'opacity-0'}`}></div>
      </div>
      
      {/* Main Content Container */}
      <div className="relative min-h-screen w-full flex flex-col">
        {/* Header and Navigation */}
        <header className="flex justify-between items-center px-6 md:px-16 pt-8 pb-6 z-30">
          <div className="flex items-center">
            <div className="relative flex items-center">
              <Leaf className="w-6 h-6 text-green-400 absolute -left-3 -top-0" />
              <h1 className="text-xl md:text-2xl font-light tracking-widest pl-4">
                <span className="text-green-400 font-medium">PIPE</span>
                <span className="ml-1">AGRO</span>
              </h1>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-green-400 transition-colors duration-300 border-b border-transparent hover:border-green-400 pb-1">Home</a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-green-400 transition-colors duration-300 border-b border-transparent hover:border-green-400 pb-1">Produtos</a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-green-400 transition-colors duration-300 border-b border-transparent hover:border-green-400 pb-1">Serviços</a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-green-400 transition-colors duration-300 border-b border-transparent hover:border-green-400 pb-1">Galeria</a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-green-400 transition-colors duration-300 border-b border-transparent hover:border-green-400 pb-1">Contato</a>
          </nav>
          
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </header>
        
        {/* Main Content Area */}
        <main className="flex-grow flex flex-col md:flex-row">
          {/* Left Content Panel */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 md:py-0 relative z-30">
            <div className="flex flex-col space-y-8">
              {/* Subtitle with line - Enhanced Animation */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`h-px bg-green-400 transition-all duration-700 ${animating ? 'w-4' : 'w-8'}`}></div>
                <span className={`text-green-400 uppercase tracking-widest text-sm font-medium transition-all duration-700 transform ${animating ? 'opacity-50' : 'opacity-100'}`}>
                  {slides[activeSlide].theme}
                </span>
              </div>
              
              {/* Main Title with Split Effect - Animated Transitions */}
              <div className="relative h-48 md:h-56 mb-10 blue-xl">
                {slides.map((slide, index) => (
                  <div 
                    key={`title-${slide.id}`}
                    className={`h-full transition-all duration-700 
                      ${index === activeSlide 
                        ? 'block opacity-100 transform-none' 
                        : index === previousSlide && animating
                          ? `absolute inset-0 opacity-0 ${direction === 'next' ? '-translate-x-16' : 'translate-x-16'}`
                          : 'hidden opacity-0'
                      }`}
                  >
                    {/* First Word */}
                    <div className="mb-4 md:mb-6">
                      {slide.id === 1 ? (
                        <div className="flex items-baseline overflow-hidden">
                          <span className="text-5xl md:text-7xl font-extrabold tracking-wider text-white/20 transition-transform duration-1000">{slide.title}</span>
                        </div>
                      ) : (
                        <h2 className="text-5xl md:text-7xl font-extrabold tracking-wider text-white/20 transition-transform duration-1000">
                          {slide.title}
                        </h2>
                      )}
                    </div>
                    
                    {/* Second Word */}
                    <h2 className="text-5xl md:text-7xl font-extrabold tracking-wider text-white/20 transition-transform duration-1000 delay-100">
                      {slide.subtitle}
                    </h2>
                  </div>
                ))}
              </div>
              
              {/* Description with Enhanced Animation */}
              <div className="mb-12 min-h-[80px] relative">
                {slides.map((slide, index) => (
                  <p 
                    key={`desc-${slide.id}`}
                    className={`max-w-md text-gray-300 leading-relaxed transition-all duration-700 absolute 
                      ${index === activeSlide 
                        ? 'opacity-100 transform-none' 
                        : index === previousSlide && animating
                          ? `opacity-0 ${direction === 'next' ? 'translate-y-8' : '-translate-y-8'}`
                          : 'opacity-0 hidden'
                      }`}
                  >
                    {slide.description}
                  </p>
                ))}
              </div>
              
              {/* Call to Action with Animation */}
              <div className="pt-6 transition-all duration-500">
                <a 
                  href="#" 
                  className={`inline-flex items-center space-x-2 text-white group transition-all duration-500 ${animating ? 'opacity-70' : 'opacity-100'}`}
                >
                  <span className="uppercase tracking-wider text-sm border-b border-green-400 pb-1 group-hover:text-green-400 transition-colors duration-300">Saiba Mais</span>
                  <MoveRight className={`w-5 h-5 transition-all duration-500 ${animating ? 'translate-x-0' : 'group-hover:translate-x-2'}`} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Panel (Empty for Image) */}
          <div className="w-full md:w-1/2"></div>
        </main>
        
        {/* Slide Navigation Dots - Enhanced Animation */}
        <div className="absolute right-8 md:right-16 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-6 z-30">
          {slides.map((slide, index) => (
            <button
              key={`nav-${slide.id}`}
              onClick={() => handleSlideChange(index)}
              className={`rounded-full transition-all duration-500 ${
                index === activeSlide 
                  ? 'w-2 h-8 bg-green-400' 
                  : 'w-2 h-2 bg-white/50 hover:bg-white/80 hover:scale-150'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
        
        {/* Slide Navigation Arrows - Enhanced */}
        <div className="absolute bottom-8 md:bottom-12 right-6 md:right-16 flex space-x-4 z-30">
          <button 
            onClick={goToPrevSlide}
            className={`w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center border transition-all duration-300 
              ${animating 
                ? 'bg-black/20 border-white/10 scale-95' 
                : 'bg-black/30 border-white/20 hover:bg-green-900/40 hover:border-green-400/40'
              }`}
          >
            <ChevronLeft className={`w-5 h-5 transition-all duration-300 ${animating ? 'text-white/70' : 'text-white'}`} />
          </button>
          <button 
            onClick={goToNextSlide}
            className={`w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center border transition-all duration-300 
              ${animating 
                ? 'bg-black/20 border-white/10 scale-95' 
                : 'bg-black/30 border-white/20 hover:bg-green-900/40 hover:border-green-400/40'
              }`}
          >
            <ChevronRight className={`w-5 h-5 transition-all duration-300 ${animating ? 'text-white/70' : 'text-white'}`} />
          </button>
        </div>
        
        {/* Social Media Links */}
       
      </div>
    </div>
  );
};

export default PipeAgro;
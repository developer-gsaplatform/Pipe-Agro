import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MoveRight, Phone, Mail, MapPin, ShoppingCart, Menu, X, Coffee, DollarSign, Truck, Award } from 'lucide-react';
import image1 from '../assets/Bg1.jpg';
import image2 from '../assets/Bg2.jpg';
import image3 from '../assets/Bg3.jpg';
import sobre from '../assets/sobre.jpg';

const HomePage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const slides = [
    {
      id: 1,
      theme: "PIPE Agro",
      title: "Soluções",
      subtitle: "AGRÍCOLAS",
      description: "Oferecemos soluções completas e sustentáveis para o setor agrícola em Angola, ajudando agricultores e empresas a aumentarem sua produtividade com tecnologia e inovação.",
      bgImage: image1
    },
    {
      id: 2,
      theme: "Produtos de Qualidade",
      title: "Inovação",
      subtitle: "SUSTENTÁVEL",
      description: "Nossa linha de produtos agrícolas de alta performance combina tecnologia e sustentabilidade para potencializar a produção, respeitando o meio ambiente e as comunidades locais.",
      bgImage: image2
    },
    {
      id: 3,
      theme: "Assistência Técnica",
      title: "Suporte",
      subtitle: "ESPECIALIZADO",
      description: "Contamos com uma equipe de especialistas prontos para oferecer o melhor suporte técnico, acompanhando cada etapa do processo produtivo para garantir resultados excepcionais.",
      bgImage: image3
    }
  ];

  // Produtos em destaque
  const featuredProducts = [
    {
      id: 1,
      name: "Fertilizante Premium",
      category: "Insumos",
      price: "19.500 Kz",
      image: image3
    },
    {
      id: 2,
      name: "Sementes Selecionadas",
      category: "Sementes",
      price: "8.200 Kz",
      image: image3
    },
    {
      id: 3,
      name: "Kit de Irrigação",
      category: "Equipamentos",
      price: "45.000 Kz",
      image: image3
    },
    {
      id: 4,
      name: "Defensivo Natural",
      category: "Proteção",
      price: "12.800 Kz",
      image: image3
    }
  ];

  // Seção de depoimentos
  const testimonials = [
    {
      id: 1,
      name: "João Silva",
      role: "Agricultor - Província de Huambo",
      testimonial: "Desde que comecei a usar os produtos da PIPE Agro, minha produtividade aumentou em mais de 40%. O suporte técnico deles fez toda a diferença na minha plantação.",
      image: image2
    },
    {
      id: 2,
      name: "Maria Luísa",
      role: "Cooperativa Agrícola - Lubango",
      testimonial: "Nossa cooperativa transformou seus resultados após a parceria com a PIPE Agro. A qualidade dos produtos e o conhecimento técnico da equipe são incomparáveis.",
      image: image2
    },
    {
      id: 3,
      name: "António Fernandes",
      role: "Empresário Agrícola - Malanje",
      testimonial: "Os produtos da PIPE Agro são confiáveis e de alta qualidade. O melhor investimento que fiz para minha fazenda nos últimos anos.",
      image: image2
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
    <div className="min-h-screen flex flex-col">
      {/* Header/Navbar */}

      <div>
        {/* Background Images com Transições Aprimoradas */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1500 ease-in-out bg-cover bg-center ${index === activeSlide
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
        <main className="flex-grow flex flex-col md:flex-row relative min-h-screen">
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
              className={`rounded-full transition-all duration-500 ${index === activeSlide
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
      </div>

      {/* Destaques de Serviços */}
      <section className="py-16 bg-white" id="servicos">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Nossos Serviços</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas para o agronegócio em Angola, desde insumos de qualidade até assistência técnica especializada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Serviço 1 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Coffee className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Produtos Agrícolas</h3>
              <p className="text-gray-600">
                Oferecemos uma linha completa de sementes, fertilizantes e defensivos de alta qualidade para potencializar sua produção.
              </p>
            </div>

            {/* Serviço 2 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Truck className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Logística e Distribuição</h3>
              <p className="text-gray-600">
                Garantimos entrega eficiente em todo território nacional, com rastreabilidade e segurança em todas as etapas.
              </p>
            </div>

            {/* Serviço 3 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Consultoria Técnica</h3>
              <p className="text-gray-600">
                Nossa equipe de especialistas oferece assessoria técnica para maximizar resultados em todas as fases do cultivo.
              </p>
            </div>

            {/* Serviço 4 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Soluções Financeiras</h3>
              <p className="text-gray-600">
                Facilitamos o acesso a linhas de crédito e financiamento para investimentos em equipamentos e insumos agrícolas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="py-20 bg-gray-50" id="sobre">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre a PIPE Agro</h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-600 mb-4">
                Somos uma empresa especializada em soluções para o agronegócio em Angola, comprometida em trazer inovação e desenvolvimento sustentável para o setor agrícola.
              </p>
              <p className="text-gray-600 mb-4">
                Com anos de experiência no mercado, a PIPE Agro se consolidou como referência em qualidade e confiabilidade, oferecendo produtos e serviços que atendem às necessidades específicas do produtor angolano.
              </p>
              <p className="text-gray-600 mb-6">
                Nossa missão é impulsionar a produtividade agrícola em Angola através de tecnologia, conhecimento técnico e produtos de alta performance, sempre com responsabilidade socioambiental.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-green-600">10+</h3>
                  <p className="text-gray-600">Anos de Experiência</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-green-600">500+</h3>
                  <p className="text-gray-600">Clientes Atendidos</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-green-600">18</h3>
                  <p className="text-gray-600">Províncias Cobertas</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="bg-white p-2 shadow-xl rounded-lg">
                <img
                  src={sobre}
                  alt="PIPE Agro"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-16 bg-white" id="produtos">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-2">Nossa Linha</span>
            <h2 className="text-3xl font-bold text-gray-800">Produtos em Destaque</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Descubra nossos produtos mais populares, selecionados para oferecer os melhores resultados para sua lavoura.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                  <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1">
                    Destaque
                  </div>
                </div>
                <div className="p-5">
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-green-600">{product.price}</span>
                    <button className="text-gray-500 hover:text-green-600 transition-colors">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="/produtos" className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
              Ver Todos os Produtos <MoveRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">O Que Dizem Nossos Clientes</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Conheça a experiência de quem já transformou sua produção agrícola com as soluções da PIPE Agro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">"{item.testimonial}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para transformar sua produção agrícola?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar a potencializar seus resultados.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/produtos"
              className="px-6 py-3 bg-white text-green-600 rounded hover:bg-gray-100 transition-colors font-medium"
            >
              Explorar Produtos
            </a>
            <a
              href="/contato"
              className="px-6 py-3 bg-green-700 text-white rounded hover:bg-green-800 transition-colors font-medium border border-white/20"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default HomePage;
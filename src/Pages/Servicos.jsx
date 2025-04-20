import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Leaf,
  Settings,
  Truck,
  BookOpen,
  Droplet,
  Wrench,
  PhoneCall,
  ArrowRight,
  Check,
  Globe,
  Shield,
  Sprout,
  Users,
  X,
  Calendar,
  MapPin,
  Clipboard
} from 'lucide-react';

import image from '../assets/fazenda.jpg';

const Servicos = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoverCard, setHoverCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Consultoria Agrícola",
      icon: <Settings className="w-6 h-6" />,
      shortDescription: "Soluções personalizadas para maximizar sua produção com técnicas sustentáveis.",
      features: ["Análise de solo completa", "Planejamento de cultivo sazonal", "Gestão integrada da propriedade"],
      color: "bg-green-50 text-green-600",
      fullDescription: "Nossa consultoria agrícola oferece um acompanhamento técnico especializado para todas as etapas da sua produção. Realizamos diagnóstico completo da propriedade, análise de solo detalhada e recomendação de cultivos adequados para sua região. Desenvolvemos planos de gestão integrada que consideram desde o preparo do solo até a comercialização da produção, incluindo cronogramas de plantio, colheita e rotação de culturas.",
      details: [
        { icon: <Calendar className="w-5 h-5" />, text: "Duração: 3-12 meses" },
        { icon: <MapPin className="w-5 h-5" />, text: "Visitas mensais à propriedade" },
        { icon: <Clipboard className="w-5 h-5" />, text: "Relatórios técnicos detalhados" }
      ]
    },
    {
      id: 2,
      title: "Insumos Agrícolas",
      icon: <Leaf className="w-6 h-6" />,
      shortDescription: "Produtos de qualidade comprovada para todas as fases do seu cultivo.",
      features: ["Sementes certificadas", "Fertilizantes orgânicos", "Defensivos eficientes e seguros"],
      color: "bg-green-50 text-green-600",
      fullDescription: "Fornecemos insumos agrícolas de alta qualidade, rigorosamente testados e adaptados às condições de Angola. Nossos produtos incluem sementes certificadas com alto potencial produtivo, fertilizantes orgânicos que melhoram a saúde do solo, e defensivos agrícolas que combinam eficiência e segurança ambiental. Todos os insumos são acompanhados de orientação técnica para aplicação correta.",
      details: [
        { icon: <Calendar className="w-5 h-5" />, text: "Entrega em 5-10 dias úteis" },
        { icon: <Clipboard className="w-5 h-5" />, text: "Orientações técnicas inclusas" }
      ]
    },
    {
      id: 3,
      title: "Capacitação Técnica",
      icon: <BookOpen className="w-6 h-6" />,
      shortDescription: "Treinamentos práticos para modernizar sua produção agrícola.",
      features: ["Técnicas avançadas de cultivo", "Manejo sustentável", "Gestão financeira rural"],
      color: "bg-green-50 text-green-600",
      fullDescription: "Nossos programas de capacitação técnica são desenvolvidos para agricultores e técnicos que desejam se atualizar com as melhores práticas agrícolas. Oferecemos cursos teóricos e práticos sobre técnicas avançadas de cultivo, manejo integrado de pragas, irrigação eficiente, gestão financeira para propriedades rurais e agricultura de precisão. Os treinamentos podem ser realizados em nossas instalações ou in loco.",
      details: [
        { icon: <Calendar className="w-5 h-5" />, text: "Cursos de 1-5 dias" },
        { icon: <MapPin className="w-5 h-5" />, text: "Presencial ou na propriedade" }
      ]
    },
    {
      id: 4,
      title: "Sistemas de Irrigação",
      icon: <Droplet className="w-6 h-6" />,
      shortDescription: "Tecnologia inteligente para otimizar o uso de água na sua propriedade.",
      features: ["Projetos customizados", "Sistemas automatizados", "Gestão hídrica eficiente"],
      color: "bg-green-50 text-green-600",
      fullDescription: "Desenvolvemos e instalamos sistemas de irrigação sob medida para sua propriedade, considerando tipo de solo, cultura, topografia e disponibilidade hídrica. Nossos sistemas incluem irrigação por gotejamento, aspersão convencional, pivô central e sistemas inteligentes com sensores de umidade e controle remoto. Além da instalação, oferecemos treinamento para operação e manutenção do sistema.",
      details: [
        { icon: <Calendar className="w-5 h-5" />, text: "Projeto em 15 dias" },
        { icon: <MapPin className="w-5 h-5" />, text: "Instalação em 2-4 semanas" }
      ]
    },
    {
      id: 5,
      title: "Maquinário Agrícola",
      icon: <Truck className="w-6 h-6" />,
      shortDescription: "Equipamentos modernos para aumentar a eficiência da sua produção.",
      features: ["Tratores e implementos", "Colheitadeiras de última geração", "Pulverizadores precisos"],
      color: "bg-green-50 text-green-600",
      fullDescription: "Oferecemos soluções completas em maquinário agrícola, desde pequenos equipamentos para agricultura familiar até máquinas de grande porte para propriedades extensivas. Nossa linha inclui tratores, colheitadeiras, plantadeiras, pulverizadores e implementos diversos, todos com tecnologia atualizada e adequados às condições de Angola. Disponibilizamos opções de venda, leasing e aluguel, com suporte técnico especializado.",
      details: [
        { icon: <Calendar className="w-5 h-5" />, text: "Disponibilidade imediata" },
        { icon: <Clipboard className="w-5 h-5" />, text: "Treinamento incluso" }
      ]
    },
    {
      id: 6,
      title: "Assistência Técnica",
      icon: <Wrench className="w-6 h-6" />,
      shortDescription: "Suporte especializado para resolver desafios na sua lavoura.",
      features: ["Diagnóstico preciso de problemas", "Soluções rápidas e eficazes", "Acompanhamento contínuo"],
      color: "bg-green-50 text-green-600",
      fullDescription: "Nossa equipe de assistência técnica está disponível para resolver problemas emergenciais ou realizar acompanhamento contínuo da sua produção. Atendemos casos de pragas e doenças, deficiências nutricionais, problemas com irrigação e outros desafios técnicos. Oferecemos plantão 24h para emergências e visitas programadas para monitoramento preventivo, sempre com soluções baseadas em evidências científicas e adaptadas à sua realidade.",
      details: [
        { icon: <Calendar className="w-5 h-5" />, text: "Plantão 24h para emergências" },
        { icon: <MapPin className="w-5 h-5" />, text: "Atendimento em toda Angola" }
      ]
    }
  ];

  const benefits = [
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Tecnologia Global",
      description: "Aplicamos conhecimentos internacionais adaptados à realidade angolana"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Garantia de Qualidade",
      description: "Padrões rigorosos em todos os nossos serviços e produtos"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Equipe Especializada",
      description: "Profissionais com anos de experiência no mercado agrícola"
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Versão melhorada com gradiente e mais espaço */}
      {/* Serviços em Destaque - Cards Modernizados */}
      

      {/* Diferenciais - Com sombras e efeitos de hover */}
      <div className="bg-gray-50 mt-30 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a <span className="text-green-600">PIPE Agro</span>?
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Compromisso com resultados excepcionais e relacionamento transparente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Processo Simplificado - Com timeline e design aprimorado */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Processo <span className="text-green-600">Simplificado</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Da primeira consulta à implementação, garantimos um processo claro e eficiente
            </p>

            <div className="space-y-0 relative">
              {/* Linha vertical conectando os passos */}
              <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-green-200"></div>

              {[
                "Diagnóstico detalhado da sua propriedade",
                "Proposta personalizada e transparente",
                "Implementação por especialistas",
                "Acompanhamento contínuo"
              ].map((item, index) => (
                <div key={index} className="flex items-start relative z-10 py-6">
                  <div className="flex-shrink-0 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-6 shadow-md">
                    {index + 1}
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex-1">
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="relative">
                <img
                  src={image}
                  alt="Processo PIPE Agro"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final - Com gradiente e elementos visuais */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 py-20 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-green-500/20"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-green-500/20"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Pronto para transformar sua produção agrícola?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Nossa equipe está pronta para entender suas necessidades e oferecer a melhor solução
          </p>

          <div className="inline-flex flex-wrap justify-center gap-6">
            <Link
              to="/contato"
              className="px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-green-50 transition-all duration-300 shadow-xl"
            >
              Solicitar Orçamento
            </Link>
            <a
              href="tel:+244123456789"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <span className="flex items-center justify-center">
                <PhoneCall className="w-5 h-5 mr-2" /> Ligar Agora
              </span>
            </a>
          </div>

          {/* Informações adicionais com ícones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex flex-col items-center">
              <MapPin className="w-8 h-8 text-white mb-2" />
              <span className="text-white font-medium">Atendemos em toda Angola</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex flex-col items-center">
              <Calendar className="w-8 h-8 text-white mb-2" />
              <span className="text-white font-medium">Resposta em até 24h</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex flex-col items-center">
              <Shield className="w-8 h-8 text-white mb-2" />
              <span className="text-white font-medium">Garantia de qualidade</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Detalhes do Serviço - Design modernizado */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-gray-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header com gradiente */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-8 relative">
              {/* Botão de fechar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg mr-6">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    {selectedService.icon}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {selectedService.title}
                </h2>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Descrição Completa</h3>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">{selectedService.fullDescription}</p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Principais Benefícios</h3>
                <ul className="space-y-3 mb-6 bg-green-50 p-4 rounded-lg border border-green-100">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Detalhes do Serviço</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {selectedService.details.map((detail, index) => (
                    <div key={index} className="flex items-start bg-gray-50 p-5 rounded-lg border border-gray-100 hover:border-green-200 transition-colors">
                      <div className="text-green-600 mr-4 mt-0.5">
                        {detail.icon}
                      </div>
                      <span className="text-gray-700 font-medium">{detail.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                <a
                  href="tel:+244123456789"
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors flex items-center shadow-md"
                >
                  <PhoneCall className="w-5 h-5 mr-2" /> Agendar Consulta
                </a>
                <Link
                  to="/contato"
                  className="px-6 py-3 bg-white border border-green-600 text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors flex items-center"
                >
                  <Clipboard className="w-5 h-5 mr-2" /> Solicitar Orçamento
                </Link>
                <button
                  onClick={closeModal}
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors ml-auto"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Servicos;
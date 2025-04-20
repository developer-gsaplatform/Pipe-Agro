import React from 'react';
import { Link } from 'react-router-dom';
import {
    BookOpen,
    Users,
    Award,
    Calendar,
    MapPin,
    Target,
    CheckCircle,
    Settings,
    TrendingUp,
    Heart,
    Globe,
    Briefcase,
    Star,
    Coffee,
    Shield,
    BarChart,
    Clock,
    ArrowRight,
    Leaf,
    LeafIcon,
    Droplet,
    Truck,
    Wrench
} from 'lucide-react';

import image from '../assets/fazenda.jpg';

const Sobre = () => {
    // Timeline da empresa com marcos históricos
    const timeline = [
        {
            year: 2005,
            title: "Fundação da PIPE Agro",
            description: "Início das operações em Luanda com foco em consultoria para pequenos produtores.",
            icon: <BookOpen className="w-5 h-5" />
        },
        {
            year: 2008,
            title: "Expansão para Huambo",
            description: "Abertura do primeiro escritório regional e início das operações de fornecimento de insumos.",
            icon: <MapPin className="w-5 h-5" />
        },
        {
            year: 2012,
            title: "Início da Divisão de Maquinário",
            description: "Expansão dos serviços para incluir venda e manutenção de equipamentos agrícolas.",
            icon: <Settings className="w-5 h-5" />
        },
        {
            year: 2015,
            title: "Parceria Internacional",
            description: "Estabelecimento de parcerias com empresas da África do Sul e Brasil para transferência de tecnologia.",
            icon: <Globe className="w-5 h-5" />
        },
        {
            year: 2018,
            title: "Centro de Treinamento",
            description: "Inauguração do Centro de Capacitação Técnica em Benguela para formação de agricultores e técnicos.",
            icon: <Users className="w-5 h-5" />
        },
        {
            year: 2020,
            title: "Prêmio de Sustentabilidade",
            description: "Reconhecimento nacional pelos projetos de agricultura sustentável em comunidades rurais.",
            icon: <Award className="w-5 h-5" />
        },
        {
            year: 2023,
            title: "Expansão Digital",
            description: "Lançamento da plataforma digital de suporte técnico online para agricultores em regiões remotas.",
            icon: <Globe className="w-5 h-5" />
        }
    ];

    // Parceiros principais
    const partners = [
        {
            name: "AgroTech Brasil",
            logo: image, // Substitua por logos reais
            description: "Parceria tecnológica para sistemas de irrigação"
        },
        {
            name: "SeedCorp África do Sul",
            logo: image, // Substitua por logos reais
            description: "Fornecimento de sementes certificadas"
        },
        {
            name: "FarmEquip Portugal",
            logo: image, // Substitua por logos reais
            description: "Importação de maquinário agrícola"
        },
        {
            name: "Universidade Agostinho Neto",
            logo: image, // Substitua por logos reais
            description: "Pesquisa e desenvolvimento"
        },
        {
            name: "Banco de Desenvolvimento de Angola",
            logo: image, // Substitua por logos reais
            description: "Financiamento de projetos agrícolas"
        },
        {
            name: "GreenFarm Consultoria",
            logo: image, // Substitua por logos reais
            description: "Certificação de produção orgânica"
        }
    ];

    // Valores da empresa
    const values = [
        {
            title: "Sustentabilidade",
            description: "Compromisso com práticas agrícolas que respeitam o meio ambiente e preservam recursos naturais.",
            icon: <LeafIcon className="w-10 h-10 text-green-600" />
        },
        {
            title: "Inovação",
            description: "Busca constante por tecnologias e métodos que aumentem a produtividade e reduzam impactos ambientais.",
            icon: <TrendingUp className="w-10 h-10 text-green-600" />
        },
        {
            title: "Qualidade",
            description: "Excelência em todos os serviços e produtos, seguindo os mais altos padrões do mercado.",
            icon: <Award className="w-10 h-10 text-green-600" />
        },
        {
            title: "Responsabilidade Social",
            description: "Desenvolvimento de comunidades rurais através de capacitação e geração de oportunidades.",
            icon: <Heart className="w-10 h-10 text-green-600" />
        }
    ];

    // Estatísticas da empresa
    const stats = [
        { value: "18+", label: "Anos de Experiência" },
        { value: "5000+", label: "Agricultores Atendidos" },
        { value: "12", label: "Províncias com Atuação" },
        { value: "150+", label: "Profissionais Especializados" }
    ];

    // Componente para ícone de folha (não disponível no lucide-react padrão)
    const Leaf = ({ className }) => (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9 22C8.99999 20 8.5 15.5 3 10C3 10 7.5 9.5 12 14C12 14 14.5 11 15.5 9.5C16.5 8 18 5 18 5C18 5 22 7 22 12C22 17 17 22 12 22C11 22 10 21.5 9 21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3 10C3 9 5 5 8 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11 14C8 11 6 9 6 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Versão com fundo branco */}
            <div className="relative bg-white pt-28 pb-32">
                {/* Padrão de folhas no background */}
                <div className="absolute inset-0 overflow-hidden opacity-10">
                    <div className="absolute -top-20 -left-20 w-80 h-80">
                        <Leaf className="w-full h-full text-green-600" />
                    </div>
                    <div className="absolute top-20 right-20 w-64 h-64">
                        <Leaf className="w-full h-full text-green-600" />
                    </div>
                    <div className="absolute bottom-10 left-1/4 w-40 h-40">
                        <Leaf className="w-full h-full text-green-600" />
                    </div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Sobre a PIPE Agro
                        </h1>
                        <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 font-light">
                            Transformando a agricultura angolana com tecnologia, sustentabilidade e expertise desde 2005.
                        </p>
                    </div>
                </div>
            </div>

            {/* Introdução com Estatísticas */}
            <div className="relative -mt-16 z-20">
                <div className="container mx-auto px-6">
                    <div className="bg-white shadow-xl rounded-xl p-8 md:p-10">
                        <div className="flex flex-col lg:flex-row gap-10 items-center">
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                    Quem Somos
                                </h2>
                                <p className="text-gray-600 mb-4 text-lg">
                                    A PIPE Agro é uma empresa angolana especializada em soluções agrícolas integradas, fundada em 2005 com a missão de impulsionar o desenvolvimento do setor agrícola em Angola através de tecnologia, conhecimento e inovação.
                                </p>
                                <p className="text-gray-600 mb-6 text-lg">
                                    Ao longo de nossa trajetória, temos sido pioneiros na introdução de práticas agrícolas sustentáveis, colaborando com pequenos e médios produtores, bem como grandes empresas, para aumentar a produtividade e qualidade da produção agrícola nacional.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="text-center">
                                            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                                                {stat.value}
                                            </div>
                                            <div className="text-sm text-gray-500">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="relative">
                                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-lg -z-10"></div>
                                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-100 rounded-lg -z-10"></div>
                                    <div className="relative bg-white p-3 border border-gray-200 rounded-lg shadow-lg z-10">
                                        <img
                                            src={image}
                                            alt="Sede da PIPE Agro"
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nossa Missão, Visão e Valores */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Missão, Visão e Valores
                        </h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Princípios que norteiam nosso trabalho e definem nosso compromisso com Angola
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {/* Missão */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-green-200 transition-all duration-300 flex flex-col h-full">
                            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6 mx-auto">
                                <Target className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Nossa Missão</h3>
                            <p className="text-gray-600 flex-grow">
                                Impulsionar o desenvolvimento agrícola de Angola através de soluções inovadoras, sustentáveis e adaptadas à realidade local, contribuindo para a segurança alimentar e o crescimento econômico do país.
                            </p>
                        </div>

                        {/* Visão */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-green-200 transition-all duration-300 flex flex-col h-full">
                            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6 mx-auto">
                                <Globe className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Nossa Visão</h3>
                            <p className="text-gray-600 flex-grow">
                                Ser a empresa de referência no setor agrícola angolano, reconhecida pela excelência dos serviços, compromisso com a sustentabilidade e capacidade de transformar desafios em oportunidades para os produtores rurais.
                            </p>
                        </div>

                        {/* Propósito */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-green-200 transition-all duration-300 flex flex-col h-full">
                            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6 mx-auto">
                                <Heart className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Nosso Propósito</h3>
                            <p className="text-gray-600 flex-grow">
                                Transformar a agricultura angolana em um setor moderno, produtivo e resiliente, gerando prosperidade para as comunidades rurais e contribuindo para um futuro sustentável para as próximas gerações.
                            </p>
                        </div>
                    </div>

                    {/* Valores */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-green-200 transition-all duration-300 hover:shadow-md"
                            >
                                <div className="mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Nossa História */}
            {/* Nossa História - Design Moderno e Minimalista */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Nossa Trajetória
                        </h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Conheça os principais marcos da nossa história e evolução
                        </p>
                    </div>

                    <div className="flex flex-col max-w-4xl mx-auto">
                        {timeline.map((event, index) => (
                            <div key={index} className="mb-16 last:mb-0">
                                <div className="flex items-start">
                                    {/* Ano e ícone */}
                                    <div className="mr-6 flex-shrink-0">
                                        <div className="bg-green-50 text-green-700 text-xl font-bold rounded-full w-20 h-20 flex flex-col items-center justify-center border-4 border-white shadow-lg">
                                            <span>{event.year}</span>
                                        </div>
                                    </div>

                                    {/* Conteúdo */}
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-grow">
                                        <div className="flex items-center mb-3">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3">
                                                {event.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                                        </div>
                                        <p className="text-gray-600">{event.description}</p>
                                    </div>
                                </div>

                                {/* Linha conectora, exceto no último item */}
                                {index < timeline.length - 1 && (
                                    <div className="w-0.5 h-12 bg-green-200 ml-10 mt-2"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Nossos Parceiros */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Nossos Parceiros
                        </h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Trabalhamos com os melhores para oferecer soluções de excelência
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col"
                            >
                                <div className="h-40 bg-gray-100 relative overflow-hidden">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-green-600/50">
                                        <h3 className="text-2xl font-bold text-white">{partner.name}</h3>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="text-gray-600">{partner.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Nossa Equipe de Liderança */}
            <div className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Nossa Equipe de Liderança
                        </h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Profissionais experientes que guiam nossa empresa
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Carlos Silva",
                                position: "Diretor Executivo",
                                bio: "Mais de 20 anos de experiência no setor agrícola africano, com especialização em gestão estratégica e desenvolvimento sustentável.",
                                image: image
                            },
                            {
                                name: "Maria Joaquina",
                                position: "Diretora de Operações",
                                bio: "Engenheira agrônoma com vasta experiência em sistemas de produção e otimização de recursos em contextos africanos.",
                                image: image
                            },
                            {
                                name: "João Baptista",
                                position: "Diretor Técnico",
                                bio: "Especialista em tecnologias agrícolas inovadoras, com foco em soluções adaptadas às condições climáticas de Angola.",
                                image: image
                            },
                            {
                                name: "Ana Luísa",
                                position: "Diretora Financeira",
                                bio: "Experiência em gestão financeira para empresas do setor agrícola, com foco em sustentabilidade econômica e investimentos.",
                                image: image
                            },
                            {
                                name: "Pedro Nzinga",
                                position: "Diretor de Inovação",
                                bio: "Responsável pela pesquisa e implementação de novas tecnologias para aumentar a eficiência e sustentabilidade da agricultura.",
                                image: image
                            },
                            {
                                name: "Teresa Luanda",
                                position: "Diretora de Relações Institucionais",
                                bio: "Especialista em parcerias estratégicas e relações governamentais, com ampla rede de contatos no setor agrícola africano.",
                                image: image
                            }
                        ].map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-green-600 font-medium mb-3">{member.position}</p>
                                    <p className="text-gray-600 text-sm">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Nossos Serviços */}
            <div className="py-20 bg-green-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Nossos Serviços
                        </h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Soluções completas para toda a cadeia produtiva agrícola
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Consultoria Agrícola",
                                description: "Análise de solo, planejamento de cultivo, gestão de propriedades rurais e desenvolvimento de projetos personalizados.",
                                icon: <Briefcase className="w-10 h-10 text-green-600" />
                            },
                            {
                                title: "Insumos Agrícolas",
                                description: "Fornecimento de sementes, fertilizantes e defensivos de alta qualidade, adaptados às condições locais.",
                                icon: <Leaf className="w-10 h-10 text-green-600" />
                            },
                            {
                                title: "Capacitação Técnica",
                                description: "Treinamentos e cursos para agricultores e técnicos, compartilhando conhecimentos e melhores práticas.",
                                icon: <Users className="w-10 h-10 text-green-600" />
                            },
                            {
                                title: "Sistemas de Irrigação",
                                description: "Desenvolvimento e instalação de sistemas eficientes para otimização do uso da água no campo.",
                                icon: <Droplet className="w-10 h-10 text-green-600" />
                            },
                            {
                                title: "Maquinário Agrícola",
                                description: "Comercialização, manutenção e aluguel de equipamentos modernos para todas as etapas da produção.",
                                icon: <Truck className="w-10 h-10 text-green-600" />
                            },
                            {
                                title: "Assistência Técnica",
                                description: "Suporte contínuo para resolver problemas e maximizar a produtividade no campo.",
                                icon: <Wrench className="w-10 h-10 text-green-600" />
                            }
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-green-200 transition-all duration-300 hover:shadow-md"
                            >
                                <div className="bg-green-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <Link
                                    to="/servicos"
                                    className="inline-flex items-center text-green-600 font-medium hover:text-green-800 transition-colors"
                                >
                                    Saiba mais <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Depoimentos */}
            <div className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            O Que Nossos Clientes Dizem
                        </h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Histórias de sucesso que comprovam nossa excelência
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "A PIPE Agro transformou nossa fazenda familiar. Com a consultoria deles, aumentamos nossa produção em 40% no primeiro ano.",
                                author: "João Mabulo",
                                position: "Produtor rural, Huambo",
                                image: image
                            },
                            {
                                quote: "O sistema de irrigação instalado pela equipe técnica foi um divisor de águas para nossa produção, mesmo em períodos de estiagem.",
                                author: "Maria Francisca",
                                position: "Cooperativa Agrícola, Benguela",
                                image: image
                            },
                            {
                                quote: "Os treinamentos oferecidos pela PIPE Agro capacitaram nossa equipe com técnicas modernas que fizeram toda a diferença na produtividade.",
                                author: "António Silva",
                                position: "Fazenda Nova Aurora, Malanje",
                                image: image
                            }
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative"
                            >
                                <div className="absolute top-6 right-6">
                                    <svg className="w-12 h-12 text-green-50" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10,8.5c-4.5,0-8,3.7-8,8.3s3.5,8.3,8,8.3c0.7,0,1.3-0.1,1.9-0.2c-2.1,1.7-4.6,2.7-7.4,2.7c-0.8,0-1.5,0.7-1.5,1.5
                      c0,0.8,0.7,1.5,1.5,1.5c4.5,0,8.5-1.9,11.1-5c1.2-1.5,1.9-3.3,1.9-5.5C17.5,12.2,14.2,8.5,10,8.5z M28,8.5c-4.5,0-8,3.7-8,8.3
                      s3.5,8.3,8,8.3c0.7,0,1.3-0.1,1.9-0.2c-2.1,1.7-4.6,2.7-7.4,2.7c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5
                      c4.5,0,8.5-1.9,11.1-5c1.2-1.5,1.9-3.3,1.9-5.5C35.5,12.2,32.2,8.5,28,8.5z"></path>
                                    </svg>
                                </div>

                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 text-yellow-400 fill-yellow-400"
                                        />
                                    ))}
                                </div>

                                <p className="text-gray-700 mb-6 italic relative z-10">
                                    "{testimonial.quote}"
                                </p>

                                <div className="flex items-center mt-6 pt-6 border-t border-gray-100">
                                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                                        <p className="text-gray-500 text-sm">{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Áreas de Atuação */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Áreas de Atuação
                        </h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Presente nas principais regiões agrícolas de Angola
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="relative bg-green-50 rounded-xl p-6">
                                    {/* Esta seria uma imagem do mapa de Angola com destaque para áreas de atuação */}
                                    <img
                                        src={image}
                                        alt="Mapa de atuação PIPE Agro"
                                        className="w-full h-auto rounded-lg"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent rounded-xl"></div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Presença Nacional</h3>
                                <p className="text-gray-600 mb-6">
                                    A PIPE Agro está presente em 12 das 18 províncias angolanas, com foco nas principais regiões produtoras agrícolas do país. Nossa expansão estratégica nos permite atender produtores de diversas culturas e portes.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        "Luanda", "Huambo", "Benguela", "Bié",
                                        "Huíla", "Cuanza Sul", "Malanje", "Uíge",
                                        "Cunene", "Cabinda", "Lunda Norte", "Namibe"
                                    ].map((province, index) => (
                                        <div key={index} className="flex items-center">
                                            <MapPin className="w-5 h-5 text-green-500 mr-2" />
                                            <span className="text-gray-700">{province}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8">
                                    <h4 className="font-bold text-gray-800 mb-2">Escritórios centrais:</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-start">
                                            <MapPin className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-gray-700">Sede - Luanda</p>
                                                <p className="text-gray-600 text-sm">Avenida 4 de Fevereiro, 123 - Luanda</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <MapPin className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-gray-700">Centro Técnico - Huambo</p>
                                                <p className="text-gray-600 text-sm">Estrada Nacional 250, Km 15 - Huambo</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <MapPin className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-gray-700">Centro de Treinamento - Benguela</p>
                                                <p className="text-gray-600 text-sm">Zona Rural de Benguela, Estrada de Catumbela</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Principais Culturas Atendidas */}
            <div className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Culturas Atendidas
                        </h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Soluções específicas para cada tipo de cultivo
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Milho", icon: <Coffee className="w-6 h-6 text-green-600" /> },
                            { name: "Café", icon: <Coffee className="w-6 h-6 text-green-600" /> },
                            { name: "Arroz", icon: <Leaf className="w-6 h-6 text-green-600" /> },
                            { name: "Feijão", icon: <Leaf className="w-6 h-6 text-green-600" /> },
                            { name: "Mandioca", icon: <Leaf className="w-6 h-6 text-green-600" /> },
                            { name: "Banana", icon: <Leaf className="w-6 h-6 text-green-600" /> },
                            { name: "Algodão", icon: <Leaf className="w-6 h-6 text-green-600" /> },
                            { name: "Soja", icon: <Leaf className="w-6 h-6 text-green-600" /> }
                        ].map((crop, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-green-200 transition-all duration-300 flex items-center"
                            >
                                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mr-4">
                                    {crop.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">{crop.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Responsabilidade Social */}
            <div className="py-20 bg-green-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Responsabilidade Social
                        </h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Compromisso com o desenvolvimento sustentável das comunidades
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossos Projetos Sociais</h3>
                                <p className="text-gray-600 mb-6">
                                    Além de nossa atuação comercial, mantemos diversos projetos que visam o desenvolvimento social e ambiental das comunidades onde estamos presentes.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                                            <Users className="w-5 h-5 text-green-600" />
                                        </div>
                                        <span className="text-gray-700 font-medium">12 comunidades atendidas</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                                            <Award className="w-5 h-5 text-green-600" />
                                        </div>
                                        <span className="text-gray-700 font-medium">3 prêmios de reconhecimento</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                                            <Leaf className="w-5 h-5 text-green-600" />
                                        </div>
                                        <span className="text-gray-700 font-medium">500+ hectares preservados</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <div className="space-y-8">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Escola no Campo</h3>
                                    <p className="text-gray-600 mb-4">
                                        Programa educacional que leva capacitação técnica agrícola para jovens em comunidades rurais, formando a próxima geração de agricultores com conhecimentos em técnicas sustentáveis e gestão rural.
                                    </p>
                                    <div className="flex items-center text-green-600 font-medium">
                                        <CheckCircle className="w-5 h-5 mr-2" />
                                        <span>500+ jovens capacitados desde 2015</span>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Água para Todos</h3>
                                    <p className="text-gray-600 mb-4">
                                        Iniciativa que implementa sistemas de captação e tratamento de água em comunidades rurais, aliando o acesso à água potável com sistemas de irrigação eficientes para pequenos produtores.
                                    </p>
                                    <div className="flex items-center text-green-600 font-medium">
                                        <CheckCircle className="w-5 h-5 mr-2" />
                                        <span>12 comunidades beneficiadas com acesso à água limpa</span>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Reserva Verde</h3>
                                    <p className="text-gray-600 mb-4">
                                        Projeto de preservação ambiental que trabalha na recuperação de áreas degradadas e criação de reservas florestais, aliando conservação com sistemas agroflorestais produtivos.
                                    </p>
                                    <div className="flex items-center text-green-600 font-medium">
                                        <CheckCircle className="w-5 h-5 mr-2" />
                                        <span>500+ hectares de áreas recuperadas e preservadas</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reconhecimentos e Certificações */}
            <div className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Reconhecimentos e Certificações
                        </h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Nossa excelência reconhecida por instituições renomadas
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <Award className="w-6 h-6 text-green-600 mr-2" />
                                Prêmios e Reconhecimentos
                            </h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        year: 2023,
                                        title: "Prêmio Inovação Agrícola",
                                        description: "Reconhecimento pela implementação de tecnologias inovadoras no setor agrícola angolano."
                                    },
                                    {
                                        year: 2020,
                                        title: "Prêmio Sustentabilidade Rural",
                                        description: "Destaque por práticas agrícolas sustentáveis e impacto positivo em comunidades rurais."
                                    },
                                    {
                                        year: 2018,
                                        title: "Melhor Empresa Agrícola",
                                        description: "Eleita a melhor empresa do setor agrícola pela Câmara de Comércio de Angola."
                                    },
                                    {
                                        year: 2015,
                                        title: "Prêmio Responsabilidade Social",
                                        description: "Reconhecimento pelos projetos sociais desenvolvidos em comunidades rurais."
                                    }
                                ].map((award, index) => (
                                    <div key={index} className="flex">
                                        <div className="mr-4">
                                            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-bold">
                                                {award.year}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">{award.title}</h4>
                                            <p className="text-gray-600 text-sm">{award.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <Shield className="w-6 h-6 text-green-600 mr-2" />
                                Certificações
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    {
                                        name: "ISO 9001",
                                        description: "Certificação internacional de qualidade em processos e gestão."
                                    },
                                    {
                                        name: "ISO 14001",
                                        description: "Certificação de gestão ambiental e práticas sustentáveis."
                                    },
                                    {
                                        name: "GLOBAL G.A.P.",
                                        description: "Boas práticas agrícolas reconhecidas internacionalmente."
                                    },
                                    {
                                        name: "Certificação Orgânica",
                                        description: "Processos de produção orgânica verificados e certificados."
                                    },
                                    {
                                        name: "Fair Trade",
                                        description: "Comércio justo e condições éticas de trabalho."
                                    },
                                    {
                                        name: "Certificação Agro-Angola",
                                        description: "Reconhecimento nacional de qualidade e boas práticas agrícolas."
                                    }
                                ].map((certification, index) => (
                                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                        <h4 className="font-semibold text-gray-800 mb-1 flex items-center">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                            {certification.name}
                                        </h4>
                                        <p className="text-gray-600 text-sm">{certification.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chamada para Ação */}
            <div className="bg-gradient-to-r from-green-700 to-green-600 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Junte-se a nós nessa jornada
                    </h2>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        Conheça nossos serviços e descubra como podemos ajudar a transformar sua produção agrícola
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            to="/servicos"
                            className="px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-green-50 transition-all duration-300 shadow-xl"
                        >
                            Nossos Serviços
                        </Link>
                        <Link
                            to="/contato"
                            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
                        >
                            Entre em Contato
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sobre;
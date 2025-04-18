import React, { useState, useEffect } from 'react';
import { Search, Filter, Camera, MapPin, Leaf, X, Grid, Layers, Instagram, Download } from 'lucide-react';
import image from '../assets/fazenda.jpg';

// Simulação de dados de galeria para uma empresa de agricultura em Angola
const galleryData = [
    {
        id: 1,
        category: 'fazendas',
        location: 'Huambo',
        title: 'Plantação de Milho',
        description: 'Extensa plantação de milho na província de Huambo, uma das maiores produções de Angola.',
        image: image,
        featured: true
    },
    {
        id: 2,
        category: 'produtos',
        location: 'Benguela',
        title: 'Café Arábica',
        description: 'Nossa produção de café arábica de alta qualidade cultivado nas montanhas angolanas.',
        image: image,
        featured: false
    },
    {
        id: 3,
        category: 'fazendas',
        location: 'Luanda',
        title: 'Fazenda Modelo',
        description: 'Centro de inovação agrícola com tecnologias de irrigação sustentável.',
        image: image,
        featured: true
    },
    {
        id: 4,
        category: 'produtos',
        location: 'Huíla',
        title: 'Algodão Orgânico',
        description: 'Produção sustentável de algodão orgânico certificado para mercados internacionais.',
        image: image,
        featured: false
    },
    {
        id: 5,
        category: 'tecnologia',
        location: 'Malanje',
        title: 'Sistema de Irrigação',
        description: 'Tecnologia de irrigação por gotejamento para economizar água e aumentar a produtividade.',
        image: image,
        featured: true
    },
    {
        id: 6,
        category: 'fazendas',
        location: 'Huambo',
        title: 'Produção de Mandioca',
        description: 'Cultivo de mandioca usando técnicas tradicionais combinadas com práticas modernas.',
        image: image,
        featured: false
    },
    {
        id: 7,
        category: 'produtos',
        location: 'Bié',
        title: 'Arroz de Terras Altas',
        description: 'Variedade especial de arroz adaptada para o clima das terras altas de Angola.',
        image: image,
        featured: false
    },
    {
        id: 8,
        category: 'tecnologia',
        location: 'Luanda',
        title: 'Centro de Pesquisa',
        description: 'Laboratório moderno para pesquisa e desenvolvimento de sementes melhoradas.',
        image: image,
        featured: false
    },
];

const Galeria = () => {
    const [filter, setFilter] = useState('todos');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState(galleryData);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' ou 'masonry'

    // Agrupar categorias únicas
    const categories = ['todos', ...new Set(galleryData.map(item => item.category))];

    // Filtrar os itens com base nos filtros e na busca
    useEffect(() => {
        const filtered = galleryData.filter(item => {
            const matchesFilter = filter === 'todos' || item.category === filter;
            const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.location.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesFilter && matchesSearch;
        });

        setFilteredItems(filtered);
    }, [filter, searchTerm]);

    // Abrir modal com detalhes do item
    const openModal = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    // Fechar modal
    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    // Organizar itens para o layout masonry
    const organizeItemsForMasonry = () => {
        const columns = {
            col1: [],
            col2: [],
            col3: []
        };

        filteredItems.forEach((item, index) => {
            if (index % 3 === 0) columns.col1.push(item);
            else if (index % 3 === 1) columns.col2.push(item);
            else columns.col3.push(item);
        });

        return columns;
    };

    const masonryColumns = organizeItemsForMasonry();

    return (
        <div className="pt-24 md:pt-28 pb-16 px-4 md:px-8 lg:px-16 min-h-screen bg-gradient-to-b from-white to-green-50">
            {/* Título da seção com decoração */}
            <div className="mb-12 text-center relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 text-green-100 opacity-30">
                    <Leaf className="w-32 h-32" />
                </div>

                <span className="inline-block mb-3 text-green-500 font-medium px-4 py-1 rounded-full bg-green-50 border border-green-100">
                    Nossas Iniciativas
                </span>

                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 relative">
                    Galeria PIPE Agro
                </h1>

                <div className="w-24 h-1 bg-gradient-to-r from-green-300 to-green-500 mx-auto mb-6 rounded-full"></div>

                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Explore nossas fazendas, produtos e iniciativas agrícolas por toda Angola,
                    demonstrando nosso compromisso com a agricultura sustentável.
                </p>
            </div>

            {/* Filtros e busca - Redesenhados */}
            <div className="mb-10 bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
                {/* Filtros por categoria */}
                <div className="flex items-center gap-4 overflow-x-auto py-2 md:py-0 w-full md:w-auto">
                    <div className="flex items-center px-3 py-1.5 bg-green-50 rounded-lg text-green-700">
                        <Filter className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Filtros:</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-3 py-1.5 rounded-md text-sm transition-all whitespace-nowrap ${filter === category
                                    ? 'bg-green-500 text-white font-medium shadow-sm ring-1 ring-green-300'
                                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-green-600'
                                    }`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    {/* Visualização Toggle */}
                    <div className="flex rounded-lg overflow-hidden border border-gray-200">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 ${viewMode === 'grid'
                                ? 'bg-green-500 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <Grid className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setViewMode('masonry')}
                            className={`p-2 ${viewMode === 'masonry'
                                ? 'bg-green-500 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <Layers className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Campo de busca */}
                    <div className="relative flex-1 md:w-64">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 w-full bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-300 text-gray-700 text-sm placeholder-gray-400"
                        />
                        <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                    </div>
                </div>
            </div>

            {/* Grid de galeria - Modo de visualização responsivo */}
            {filteredItems.length > 0 ? (
                <>
                    {/* Modo Grid */}
                    {viewMode === 'grid' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredItems.map(item => (
                                <div
                                    key={item.id}
                                    className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                                    onClick={() => openModal(item)}
                                >
                                    <div className="relative h-56 sm:h-64 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Badges */}
                                        <div className="absolute top-3 left-3 z-20">
                                            <span className="bg-white/90 text-green-600 text-xs font-medium px-2.5 py-1 rounded shadow-sm backdrop-blur-sm">
                                                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <div className="flex items-center text-xs text-gray-500 mb-2">
                                            <MapPin className="w-3.5 h-3.5 mr-1 text-gray-400" />
                                            <span>{item.location}, Angola</span>
                                        </div>

                                        <h3 className="text-gray-800 font-semibold text-lg mb-2 group-hover:text-green-600 transition-colors">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm line-clamp-2">
                                            {item.description}
                                        </p>

                                        <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
                                            <span className="text-xs text-gray-500">PIPE Agro</span>
                                            <div className="flex items-center text-green-500 text-sm font-medium group-hover:translate-x-1 transition-transform">
                                                <span className="mr-1">Ver detalhes</span>
                                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Modo Masonry */}
                    {viewMode === 'masonry' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            <div className="flex flex-col space-y-5">
                                {masonryColumns.col1.map(item => (
                                    <div
                                        key={item.id}
                                        className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                                        onClick={() => openModal(item)}
                                    >
                                        <div className="relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            <div className="absolute top-3 right-3 z-20">
                                                <div className="bg-white/90 text-green-600 w-8 h-8 rounded-full flex items-center justify-center shadow-sm backdrop-blur-sm">
                                                    <Instagram className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4">
                                            <h3 className="text-gray-800 font-semibold text-lg mb-1 group-hover:text-green-600 transition-colors">
                                                {item.title}
                                            </h3>
                                            <div className="flex items-center text-xs text-gray-500 mb-2">
                                                <MapPin className="w-3.5 h-3.5 mr-1 text-gray-400" />
                                                <span>{item.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col space-y-5">
                                {masonryColumns.col2.map(item => (
                                    <div
                                        key={item.id}
                                        className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                                        onClick={() => openModal(item)}
                                    >
                                        <div className="relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            <div className="absolute top-3 right-3 z-20">
                                                <div className="bg-white/90 text-green-600 w-8 h-8 rounded-full flex items-center justify-center shadow-sm backdrop-blur-sm">
                                                    <Instagram className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4">
                                            <h3 className="text-gray-800 font-semibold text-lg mb-1 group-hover:text-green-600 transition-colors">
                                                {item.title}
                                            </h3>
                                            <div className="flex items-center text-xs text-gray-500 mb-2">
                                                <MapPin className="w-3.5 h-3.5 mr-1 text-gray-400" />
                                                <span>{item.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col space-y-5 md:block lg:flex">
                                {masonryColumns.col3.map(item => (
                                    <div
                                        key={item.id}
                                        className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer mb-5 md:mb-5 lg:mb-0"
                                        onClick={() => openModal(item)}
                                    >
                                        <div className="relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            <div className="absolute top-3 right-3 z-20">
                                                <div className="bg-white/90 text-green-600 w-8 h-8 rounded-full flex items-center justify-center shadow-sm backdrop-blur-sm">
                                                    <Instagram className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4">
                                            <h3 className="text-gray-800 font-semibold text-lg mb-1 group-hover:text-green-600 transition-colors">
                                                {item.title}
                                            </h3>
                                            <div className="flex items-center text-xs text-gray-500 mb-2">
                                                <MapPin className="w-3.5 h-3.5 mr-1 text-gray-400" />
                                                <span>{item.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className="py-16 bg-white rounded-xl shadow-sm text-center">
                    <Leaf className="w-16 h-16 text-green-200 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-700">Nenhum resultado encontrado</h3>
                    <p className="text-gray-500 mt-2">Tente ajustar seus filtros ou termos de busca</p>
                    <button
                        onClick={() => { setFilter('todos'); setSearchTerm(''); }}
                        className="mt-6 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors shadow-sm"
                    >
                        Limpar filtros
                    </button>
                </div>
            )}

            {/* Modal de visualização detalhada - Redesenhado com estilo light */}
            {isModalOpen && selectedItem && (
                <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div
                        className="relative bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botão de fechar */}
                        <button
                            onClick={closeModal}
                            className="absolute right-4 top-4 z-10 p-1.5 rounded-full bg-white/90 text-gray-800 hover:bg-gray-100 transition-colors shadow-md"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Imagem */}
                        <div className="md:w-3/5 h-64 md:h-auto relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-50 z-10"></div>
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm py-1 px-3 rounded-full text-xs font-medium text-green-700 shadow-sm">
                                {selectedItem.category.charAt(0).toUpperCase() + selectedItem.category.slice(1)}
                            </div>
                        </div>

                        {/* Detalhes */}
                        <div className="md:w-2/5 p-6 overflow-y-auto flex flex-col">
                            <div className="flex items-center text-xs text-gray-500 mb-2">
                                <MapPin className="w-4 h-4 mr-1.5 text-green-500" />
                                <span>{selectedItem.location}, Angola</span>
                            </div>

                            <h2 className="text-gray-800 font-bold text-2xl">{selectedItem.title}</h2>

                            <div className="mt-6 text-gray-700 space-y-4">
                                <p className="leading-relaxed">{selectedItem.description}</p>
                                <p className="leading-relaxed">
                                    Na PIPE Agro, estamos comprometidos com o desenvolvimento sustentável
                                    da agricultura em Angola, utilizando técnicas modernas enquanto respeitamos
                                    as tradições locais e o meio ambiente.
                                </p>

                                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mt-6">
                                    <h4 className="font-medium text-green-800 mb-1">Nosso compromisso</h4>
                                    <p className="text-green-700 text-sm">
                                        Promovemos práticas agrícolas sustentáveis que beneficiam tanto o meio ambiente
                                        quanto as comunidades locais, garantindo qualidade e responsabilidade social.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center mt-6 pt-4 border-t border-gray-200">
                                <Camera className="w-5 h-5 text-green-500 mr-2" />
                                <span className="text-gray-500 text-sm">Galeria PIPE Agro - Agricultura Sustentável</span>
                            </div>

                            <div className="mt-auto pt-4 flex justify-end gap-3">
                                <button
                                    onClick={closeModal}
                                    className="py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                                >
                                    Fechar
                                </button>
                                <button
                                    className="py-2 px-5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors shadow-sm"
                                >
                                    Saiba mais
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            <div className="bg-green-900 py-16 mb-16 mt-16 rounded-2xl">
                <div className="container mx-auto px-4">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 relative overflow-hidden">
                        {/* Decoração de fundo */}
                        <div className="absolute -right-10 -bottom-10 opacity-10">
                            <Leaf className="w-40 h-40" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <span className="text-green-400 font-medium text-sm uppercase tracking-wider">Compartilhe Conosco</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Você tem um projeto agrícola?</h2>
                                <p className="text-green-100/80 text-lg mb-6">
                                    Convidamos você a compartilhar seus projetos agrícolas e experiências conosco.
                                    Juntos, podemos construir uma comunidade mais forte e sustentável.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all font-medium">
                                        Submeter Projeto
                                    </button>
                                    <button className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-lg transition-all">
                                        Saber Mais
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white/10 rounded-xl p-6 md:p-8">
                                <h3 className="text-xl font-semibold text-white mb-4">Critérios para Submissão</h3>
                                <ul className="space-y-3 text-green-100/90">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Projetos relacionados a agricultura sustentável</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Foco em inovação e tecnologias agrícolas</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Impacto positivo nas comunidades locais</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Documentação com fotos e vídeos de qualidade</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testemunhos - Novo */}
            <div className="container mx-auto px-4 mb-20">
                <div className="text-center mb-12">
                    <span className="inline-block mb-2 text-green-500 font-medium px-4 py-1 rounded-full bg-green-50 border border-green-100">
                        Depoimentos
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                        O que dizem nossos parceiros
                    </h2>

                    <div className="w-16 h-1 bg-gradient-to-r from-green-300 to-green-500 mx-auto mb-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Depoimento 1 */}
                    <div className="bg-white rounded-xl shadow-md p-6 relative">
                        <div className="absolute -top-4 -right-4 text-green-100">
                            <svg className="w-12 h-12" viewBox="0 0 48 48" fill="currentColor">
                                <path d="M14,24H6c-1.1,0-2-0.9-2-2V12c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2v10C16,23.1,15.1,24,14,24z" />
                                <path d="M42,24h-8c-1.1,0-2-0.9-2-2V12c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2v10C44,23.1,43.1,24,42,24z" />
                            </svg>
                        </div>

                        <p className="text-gray-600 italic mb-6">
                            "A parceria com a PIPE Agro transformou nossa fazenda familiar. Com as novas técnicas de
                            irrigação, conseguimos aumentar nossa produção em 40% no último ano."
                        </p>

                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                <span className="text-green-600 font-bold">JM</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">João Mabulo</h4>
                                <p className="text-gray-500 text-sm">Produtor de Milho, Huambo</p>
                            </div>
                        </div>
                    </div>

                    {/* Depoimento 2 */}
                    <div className="bg-white rounded-xl shadow-md p-6 relative">
                        <div className="absolute -top-4 -right-4 text-green-100">
                            <svg className="w-12 h-12" viewBox="0 0 48 48" fill="currentColor">
                                <path d="M14,24H6c-1.1,0-2-0.9-2-2V12c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2v10C16,23.1,15.1,24,14,24z" />
                                <path d="M42,24h-8c-1.1,0-2-0.9-2-2V12c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2v10C44,23.1,43.1,24,42,24z" />
                            </svg>
                        </div>

                        <p className="text-gray-600 italic mb-6">
                            "A formação que recebemos da equipe PIPE Agro nos permitiu implementar técnicas agrícolas
                            sustentáveis que beneficiam todo o ecossistema da nossa região."
                        </p>

                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                <span className="text-green-600 font-bold">LS</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">Luísa Santos</h4>
                                <p className="text-gray-500 text-sm">Cooperativa Agrícola, Bié</p>
                            </div>
                        </div>
                    </div>

                    {/* Depoimento 3 */}
                    <div className="bg-white rounded-xl shadow-md p-6 relative">
                        <div className="absolute -top-4 -right-4 text-green-100">
                            <svg className="w-12 h-12" viewBox="0 0 48 48" fill="currentColor">
                                <path d="M14,24H6c-1.1,0-2-0.9-2-2V12c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2v10C16,23.1,15.1,24,14,24z" />
                                <path d="M42,24h-8c-1.1,0-2-0.9-2-2V12c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2v10C44,23.1,43.1,24,42,24z" />
                            </svg>
                        </div>

                        <p className="text-gray-600 italic mb-6">
                            "Como exportador, valorizo a consistência e qualidade dos produtos da PIPE Agro. Seus
                            sistemas de rastreabilidade garantem a confiança dos mercados internacionais."
                        </p>

                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                <span className="text-green-600 font-bold">CM</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">Carlos Manuel</h4>
                                <p className="text-gray-500 text-sm">Exportador, Luanda</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de visualização detalhada - Redesenhado com estilo light */}
            {isModalOpen && selectedItem && (
                <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div
                        className="relative bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botão de fechar */}
                        <button
                            onClick={closeModal}
                            className="absolute right-4 top-4 z-10 p-1.5 rounded-full bg-white/90 text-gray-800 hover:bg-gray-100 transition-colors shadow-md"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Imagem */}
                        <div className="md:w-3/5 h-64 md:h-auto relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-50 z-10"></div>
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm py-1 px-3 rounded-full text-xs font-medium text-green-700 shadow-sm">
                                {selectedItem.category.charAt(0).toUpperCase() + selectedItem.category.slice(1)}
                            </div>

                            {/* Data em badge */}
                            <div className="absolute bottom-4 right-4 z-20">
                                <span className="bg-black/30 text-white text-xs px-2.5 py-1 rounded shadow-sm backdrop-blur-sm">
                                    {(selectedItem.date)}
                                </span>
                            </div>
                        </div>

                        {/* Detalhes */}
                        <div className="md:w-2/5 p-6 overflow-y-auto flex flex-col">
                            <div className="flex items-center text-xs text-gray-500 mb-2">
                                <MapPin className="w-4 h-4 mr-1.5 text-green-500" />
                                <span>{selectedItem.location}, Angola</span>
                            </div>

                            <h2 className="text-gray-800 font-bold text-2xl">{selectedItem.title}</h2>

                            <div className="mt-6 text-gray-700 space-y-4">
                                <p className="leading-relaxed">{selectedItem.description}</p>
                                <p className="leading-relaxed">
                                    Na PIPE Agro, estamos comprometidos com o desenvolvimento sustentável
                                    da agricultura em Angola, utilizando técnicas modernas enquanto respeitamos
                                    as tradições locais e o meio ambiente.
                                </p>

                                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mt-6">
                                    <h4 className="font-medium text-green-800 mb-1">Nosso compromisso</h4>
                                    <p className="text-green-700 text-sm">
                                        Promovemos práticas agrícolas sustentáveis que beneficiam tanto o meio ambiente
                                        quanto as comunidades locais, garantindo qualidade e responsabilidade social.
                                    </p>
                                </div>
                            </div>

                            {/* Ações na parte inferior */}
                            <div className="flex items-center mt-6 pt-4 border-t border-gray-200">
                                <Camera className="w-5 h-5 text-green-500 mr-2" />
                                <span className="text-gray-500 text-sm">Galeria PIPE Agro - Agricultura Sustentável</span>
                            </div>

                            <div className="mt-auto pt-4 flex justify-end gap-3">
                                <button
                                    onClick={closeModal}
                                    className="py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                                >
                                    Fechar
                                </button>
                                <button
                                    className="py-2 px-5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors shadow-sm flex items-center"
                                >
                                    <Download className="w-4 h-4 mr-2" />
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer/CTA da galeria - Novo */}
            <div className="bg-green-50 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Descubra mais sobre nossos projetos</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Quer conhecer mais sobre nossas iniciativas agrícolas e como estamos
                        transformando a agricultura em Angola? Entre em contato conosco.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all shadow-md">
                            Solicitar Visita
                        </button>
                        <button className="px-6 py-3 bg-white hover:bg-gray-50 text-green-700 border border-green-200 rounded-lg font-medium transition-all">
                            Ver Nossos Serviços
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Galeria;
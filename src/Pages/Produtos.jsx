import React, { useState, useEffect } from 'react';
import { Search, Filter, ShoppingCart, Star, Leaf, X, Grid, Layers, MapPin, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import image from '../assets/fazenda.jpg';

// Simulação de dados de produtos agrícolas
const productsData = [
    {
        id: 1,
        name: 'Café Arábica Premium',
        category: 'grãos',
        price: 2500, // em Kz
        unit: 'kg',
        location: 'Huambo',
        description: 'Café arábica de alta qualidade cultivado nas montanhas do Huambo, com notas de chocolate e frutas vermelhas.',
        image: image,
        stock: 150,
        organic: true,
        featured: true,
        rating: 4.8
    },
    {
        id: 2,
        name: 'Milho Amarelo',
        category: 'cereais',
        price: 800,
        unit: 'kg',
        location: 'Benguela',
        description: 'Milho amarelo de alto rendimento, ideal para alimentação animal e consumo humano.',
        image: image,
        stock: 500,
        organic: false,
        featured: false,
        rating: 4.2
    },
    {
        id: 3,
        name: 'Feijão Vermelho',
        category: 'leguminosas',
        price: 1200,
        unit: 'kg',
        location: 'Huíla',
        description: 'Feijão vermelho rico em proteínas, cultivado de forma tradicional nas terras altas da Huíla.',
        image: image,
        stock: 300,
        organic: true,
        featured: true,
        rating: 4.5
    },
    {
        id: 4,
        name: 'Banana Prata',
        category: 'frutas',
        price: 500,
        unit: 'cacho',
        location: 'Cuanza Norte',
        description: 'Banana prata doce e nutritiva, cultivada sem pesticidas sintéticos.',
        image: image,
        stock: 80,
        organic: true,
        featured: false,
        rating: 4.3
    },
    {
        id: 5,
        name: 'Mandioca',
        category: 'tubérculos',
        price: 400,
        unit: 'kg',
        location: 'Malanje',
        description: 'Mandioca fresca, base da alimentação angolana, rica em carboidratos.',
        image: image,
        stock: 600,
        organic: false,
        featured: false,
        rating: 4.0
    },
    {
        id: 6,
        name: 'Algodão Orgânico',
        category: 'fibras',
        price: 1800,
        unit: 'kg',
        location: 'Bié',
        description: 'Algodão cultivado sem agrotóxicos, ideal para produção têxtil sustentável.',
        image: image,
        stock: 200,
        organic: true,
        featured: true,
        rating: 4.7
    },
    {
        id: 7,
        name: 'Gergelim',
        category: 'oleaginosas',
        price: 2000,
        unit: 'kg',
        location: 'Namibe',
        description: 'Gergelim rico em óleos essenciais, utilizado na culinária e indústria cosmética.',
        image: image,
        stock: 150,
        organic: true,
        featured: false,
        rating: 4.4
    },
    {
        id: 8,
        name: 'Abacaxi Pérola',
        category: 'frutas',
        price: 350,
        unit: 'unidade',
        location: 'Cabinda',
        description: 'Abacaxi doce e suculento, cultivado em pequenas propriedades familiares.',
        image: image,
        stock: 120,
        organic: false,
        featured: false,
        rating: 4.2
    },
    {
        id: 9,
        name: 'Batata Doce Roxa',
        category: 'tubérculos',
        price: 550,
        unit: 'kg',
        location: 'Cuando Cubango',
        description: 'Batata doce roxa cultivada organicamente, rica em antioxidantes e vitaminas.',
        image: image,
        stock: 180,
        organic: true,
        featured: false,
        rating: 4.6
    },
    {
        id: 10,
        name: 'Soja',
        category: 'leguminosas',
        price: 1600,
        unit: 'kg',
        location: 'Moxico',
        description: 'Soja de alta qualidade para produção de óleo, farelo e alimentos diversos.',
        image: image,
        stock: 250,
        organic: false,
        featured: false,
        rating: 4.1
    },
    {
        id: 11,
        name: 'Mel de Eucalipto',
        category: 'mel',
        price: 3500,
        unit: 'litro',
        location: 'Huambo',
        description: 'Mel puro de eucalipto, coletado em áreas de preservação e apicultura sustentável.',
        image: image,
        stock: 65,
        organic: true,
        featured: true,
        rating: 4.9
    },
    {
        id: 12,
        name: 'Arroz de Terras Altas',
        category: 'cereais',
        price: 1800,
        unit: 'kg',
        location: 'Huíla',
        description: 'Arroz cultivado em terras altas, sem irrigação intensiva, preservando recursos hídricos.',
        image: image,
        stock: 220,
        organic: false,
        featured: false,
        rating: 4.2
    },
    {
        id: 13,
        name: 'Castanha de Caju',
        category: 'oleaginosas',
        price: 4500,
        unit: 'kg',
        location: 'Uíge',
        description: 'Castanha de caju processada manualmente, mantendo toda a qualidade e sabor natural.',
        image: image,
        stock: 90,
        organic: true,
        featured: true,
        rating: 4.8
    },
    {
        id: 14,
        name: 'Cana-de-Açúcar',
        category: 'açúcares',
        price: 200,
        unit: 'feixe',
        location: 'Malanje',
        description: 'Cana-de-açúcar fresca para consumo in natura ou produção artesanal de rapadura.',
        image: image,
        stock: 300,
        organic: false,
        featured: false,
        rating: 4.0
    },
    {
        id: 15,
        name: 'Cacau Especial',
        category: 'grãos',
        price: 3800,
        unit: 'kg',
        location: 'Cabinda',
        description: 'Cacau fermentado e seco com técnicas tradicionais, ideal para chocolates finos.',
        image: image,
        stock: 110,
        organic: true,
        featured: true,
        rating: 4.9
    }
];

const Produtos = () => {
    const [filter, setFilter] = useState('todos');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(productsData);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewMode, setViewMode] = useState('grid');
    const [sortOption, setSortOption] = useState('relevance');
    
    // Estados para paginação
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [totalPages, setTotalPages] = useState(1);

    // Agrupar categorias únicas
    const categories = ['todos', ...new Set(productsData.map(product => product.category))];

    // Filtrar e ordenar os produtos
    useEffect(() => {
        let filtered = [...productsData];
        
        // Aplicar filtro de categoria
        if (filter !== 'todos') {
            filtered = filtered.filter(product => product.category === filter);
        }
        
        // Aplicar busca
        if (searchTerm) {
            filtered = filtered.filter(product => 
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.location.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        // Aplicar ordenação
        switch(sortOption) {
            case 'price-asc':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'name':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                // Ordem padrão (destaques primeiro)
                filtered.sort((a, b) => b.featured - a.featured);
        }
        
        setFilteredProducts(filtered);
        
        // Calcular total de páginas quando os filtros mudam
        setTotalPages(Math.ceil(filtered.length / itemsPerPage));
        
        // Voltar para a primeira página quando os filtros mudam
        setCurrentPage(1);
    }, [filter, searchTerm, sortOption, itemsPerPage]);

    // Abrir modal de detalhes do produto
    const openProductModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    // Fechar modal
    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    // Formatar preço em Kz
    const formatPrice = (price) => {
        return new Intl.NumberFormat('pt-AO', { style: 'currency', currency: 'AOA' }).format(price);
    };
    
    // Mudar a página
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Rolagem para o topo da galeria
        window.scrollTo({ top: document.getElementById('produtos-top').offsetTop - 100, behavior: 'smooth' });
    };

    // Ir para a página anterior
    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
            window.scrollTo({ top: document.getElementById('produtos-top').offsetTop - 100, behavior: 'smooth' });
        }
    };

    // Ir para a próxima página
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
            window.scrollTo({ top: document.getElementById('produtos-top').offsetTop - 100, behavior: 'smooth' });
        }
    };
    
    // Obter os produtos atuais com base na página
    const getCurrentProducts = () => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        return filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
    };
    
    const currentProducts = getCurrentProducts();
    
    // Gerar estrelas de avaliação
    const renderRatingStars = (rating) => {
        const stars = [];
        
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                );
            } else if (i - 0.5 <= rating) {
                stars.push(
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                );
            } else {
                stars.push(
                    <Star key={i} className="w-4 h-4 text-gray-300" />
                );
            }
        }
        
        return stars;
    };
    
    // Gerar botões de paginação
    const renderPaginationButtons = () => {
        const buttons = [];
        const maxButtonsToShow = 5; // Número máximo de botões de página para mostrar
        
        // Cálculo para decidir quais botões mostrar
        let startPage, endPage;
        
        if (totalPages <= maxButtonsToShow) {
            // Se temos menos páginas que o máximo de botões, mostramos todas
            startPage = 1;
            endPage = totalPages;
        } else {
            // Calculamos um intervalo centralizado na página atual
            const halfWay = Math.floor(maxButtonsToShow / 2);
            
            if (currentPage <= halfWay + 1) {
                startPage = 1;
                endPage = maxButtonsToShow;
            } else if (currentPage >= totalPages - halfWay) {
                startPage = totalPages - maxButtonsToShow + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - halfWay;
                endPage = currentPage + halfWay;
            }
        }
        
        // Adiciona botão para a primeira página se não estiver no intervalo
        if (startPage > 1) {
            buttons.push(
                <button 
                    key={1}
                    onClick={() => handlePageChange(1)}
                    className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors border ${currentPage === 1 ? 'bg-green-500 text-white border-green-500' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
                >
                    1
                </button>
            );
            
            // Adiciona reticências se necessário
            if (startPage > 2) {
                buttons.push(
                    <span key="ellipsis1" className="w-10 h-10 flex items-center justify-center">
                        ...
                    </span>
                );
            }
        }
        
        // Adiciona os botões numerados
        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <button 
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors border ${currentPage === i ? 'bg-green-500 text-white border-green-500' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
                >
                    {i}
                </button>
            );
        }
        
        // Adiciona reticências e último botão se necessário
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                buttons.push(
                    <span key="ellipsis2" className="w-10 h-10 flex items-center justify-center">
                        ...
                    </span>
                );
            }
            
            buttons.push(
                <button 
                    key={totalPages}
                    onClick={() => handlePageChange(totalPages)}
                    className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors border ${currentPage === totalPages ? 'bg-green-500 text-white border-green-500' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
                >
                    {totalPages}
                </button>
            );
        }
        
        return buttons;
    };

    return (
        <div id="produtos-top" className="pt-24 md:pt-28 pb-16 px-4 md:px-8 lg:px-16 min-h-screen bg-gradient-to-b from-white to-green-50">
            {/* Cabeçalho da seção */}
            <div className="mb-12 text-center relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 text-green-100 opacity-30">
                    <Leaf className="w-32 h-32" />
                </div>

                <span className="inline-block mb-3 text-green-500 font-medium px-4 py-1 rounded-full bg-green-50 border border-green-100">
                    Nossos Produtos
                </span>

                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 relative">
                    Produtos Agrícolas
                </h1>

                <div className="w-24 h-1 bg-gradient-to-r from-green-300 to-green-500 mx-auto mb-6 rounded-full"></div>

                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Descubra nossa seleção de produtos agrícolas cultivados com técnicas sustentáveis em diversas regiões de Angola.
                </p>
            </div>

            {/* Filtros, busca e ordenação - Versão Responsiva */}
            <div className="mb-10 bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col gap-4">
                {/* Linha 1: Filtros por categoria */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-green-700" />
                        <span className="text-sm font-medium text-green-700">Filtros:</span>
                    </div>
                    
                    <div className="flex overflow-x-auto pb-2 gap-2">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-3 py-1.5 rounded-md text-sm transition-all whitespace-nowrap ${
                                    filter === category
                                    ? 'bg-green-500 text-white font-medium shadow-sm ring-1 ring-green-300'
                                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-green-600'
                                }`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Linha 2: Busca e controles */}
                <div className="flex flex-col md:flex-row gap-3 w-full">
                    {/* Campo de busca - ocupa toda a largura em mobile */}
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Buscar produtos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 w-full bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-300 text-gray-700 text-sm placeholder-gray-400"
                        />
                        <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                    </div>

                    {/* Controles - empilhados em mobile, em linha em desktop */}
                    <div className="flex gap-3">
                        {/* Ordenação */}
                        <div className="relative flex-1 min-w-[150px]">
                            <select
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                                className="appearance-none pl-3 pr-8 py-2 w-full bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-300 text-gray-700 text-sm"
                            >
                                <option value="relevance">Ordenar por</option>
                                <option value="price-asc">Preço: menor primeiro</option>
                                <option value="price-desc">Preço: maior primeiro</option>
                                <option value="rating">Melhor avaliados</option>
                                <option value="name">Nome (A-Z)</option>
                            </select>
                            <div className="absolute right-2 top-2.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>

                        {/* Visualização Toggle */}
                        <div className="flex rounded-lg overflow-hidden border border-gray-200">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 ${
                                    viewMode === 'grid'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                                <Grid className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('masonry')}
                                className={`p-2 ${
                                    viewMode === 'masonry'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                                <Layers className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Contador de resultados e seletor de itens por página */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div className="text-gray-600 mb-4 sm:mb-0">
                    Mostrando <span className="font-medium">{Math.min(filteredProducts.length, currentProducts.length)}</span> de <span className="font-medium">{filteredProducts.length}</span> produtos
                </div>
                
                <div className="flex items-center">
                    <label htmlFor="itemsPerPage" className="text-gray-600 mr-3 text-sm">Produtos por página:</label>
                    <select
                        id="itemsPerPage"
                        value={itemsPerPage}
                        onChange={(e) => setItemsPerPage(Number(e.target.value))}
                        className="bg-white border border-gray-200 text-gray-700 py-1 px-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
                    >
                        <option value={4}>4</option>
                        <option value={8}>8</option>
                        <option value={12}>12</option>
                        <option value={16}>16</option>
                    </select>
                </div>
            </div>

            {/* Lista de produtos */}
            {filteredProducts.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                        {currentProducts.map(product => (
                            <div
                                key={product.id}
                                className={`group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${product.featured ? 'shadow-md' : ''}`}
                                onClick={() => openProductModal(product)}
                            >
                                {product.featured && (
                                    <div className="absolute top-3 left-3 z-20 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                                        Destaque
                                    </div>
                                )}
                                {product.organic && (
                                    <div className="absolute top-3 right-3 z-20 bg-white/90 text-green-600 text-xs font-medium px-2 py-1 rounded shadow-sm backdrop-blur-sm flex items-center">
                                        <Leaf className="w-3 h-3 mr-1" />
                                        Orgânico
                                    </div>
                                )}

                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                <div className="p-4">
                                    <div className="flex items-center text-xs text-gray-500 mb-1">
                                        <MapPin className="w-3.5 h-3.5 mr-1 text-gray-400" />
                                        <span>{product.location}, Angola</span>
                                    </div>

                                    <h3 className="text-gray-800 font-semibold text-lg mb-2 group-hover:text-green-600 transition-colors">
                                        {product.name}
                                    </h3>
                                    
                                    {/* Avaliação em estrelas */}
                                    <div className="flex items-center mb-3">
                                        <div className="flex mr-1">
                                            {renderRatingStars(product.rating)}
                                        </div>
                                        <span className="text-xs text-gray-500">({product.rating})</span>
                                    </div>

                                    <div className="flex justify-between items-center mt-4">
                                        <div>
                                            <span className="text-green-600 font-bold text-lg">
                                                {formatPrice(product.price)}
                                            </span>
                                            <span className="text-gray-500 text-sm"> /{product.unit}</span>
                                        </div>

                                        <div className="text-xs text-gray-500">
                                            {product.stock > 0 ? (
                                                <span className="text-green-500">Disponível ({product.stock})</span>
                                            ) : (
                                                <span className="text-red-500">Esgotado</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Overlay com botão de detalhes */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-20">
                                    <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        Ver Detalhes
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Sistema de Paginação */}
                    {totalPages > 1 && (
                        <div className="mt-10 flex justify-center">
                            <div className="flex items-center gap-2">
                                {/* Botão Anterior */}
                                <button 
                                    onClick={goToPreviousPage}
                                    className={`w-10 h-10 rounded-md flex items-center justify-center border ${currentPage === 1 ? 'text-gray-300 border-gray-200 cursor-not-allowed' : 'text-gray-600 border-gray-200 hover:bg-gray-50'}`}
                                    disabled={currentPage === 1}
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                
                                {/* Números das Páginas */}
                                {renderPaginationButtons()}
                                
                                {/* Botão Próximo */}
                                <button 
                                    onClick={goToNextPage}
                                    className={`w-10 h-10 rounded-md flex items-center justify-center border ${currentPage === totalPages ? 'text-gray-300 border-gray-200 cursor-not-allowed' : 'text-gray-600 border-gray-200 hover:bg-gray-50'}`}
                                    disabled={currentPage === totalPages}
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className="py-16 bg-white rounded-xl shadow-sm text-center">
                    <Leaf className="w-16 h-16 text-green-200 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-700">Nenhum produto encontrado</h3>
                    <p className="text-gray-500 mt-2">Tente ajustar seus filtros ou termos de busca</p>
                    <button
                        onClick={() => { setFilter('todos'); setSearchTerm(''); }}
                        className="mt-6 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors shadow-sm"
                    >
                        Limpar filtros
                    </button>
                </div>
            )}

            {/* Modal de detalhes do produto */}
            {isModalOpen && selectedProduct && (
                <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div
                        className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botão de fechar */}
                        <button
                            onClick={closeModal}
                            className="absolute right-4 top-4 z-10 p-1.5 rounded-full bg-white/90 text-gray-800 hover:bg-gray-100 transition-colors shadow-md"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                            {/* Imagem do produto */}
                            <div className="h-64 md:h-full relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-50 z-10"></div>
                                <img
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    className="w-full h-full object-cover"
                                />

                                {/* Badges */}
                                <div className="absolute top-3 left-3 z-20 space-y-2">
                                    {selectedProduct.featured && (
                                        <span className="bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm">
                                            Destaque
                                        </span>
                                    )}
                                    {selectedProduct.organic && (
                                        <span className="bg-white/90 text-green-600 text-xs font-medium px-2.5 py-1 rounded shadow-sm backdrop-blur-sm flex items-center">
                                            <Leaf className="w-3 h-3 mr-1" />
                                            Orgânico
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Detalhes do produto */}
                            <div className="p-6 md:p-8">
                                <div className="flex items-center text-sm text-gray-500 mb-2">
                                    <MapPin className="w-4 h-4 mr-1.5 text-green-500" />
                                    <span>{selectedProduct.location}, Angola</span>
                                </div>

                                <h2 className="text-gray-800 font-bold text-2xl mb-2">{selectedProduct.name}</h2>

                                {/* Rating */}
                                <div className="flex items-center mb-4">
                                    <div className="flex mr-2">
                                        {renderRatingStars(selectedProduct.rating)}
                                    </div>
                                    <span className="text-sm text-gray-600">({selectedProduct.rating} de 5)</span>
                                </div>

                                <div className="mb-6">
                                    <span className="text-green-600 font-bold text-3xl">
                                        {formatPrice(selectedProduct.price)}
                                    </span>
                                    <span className="text-gray-500"> /{selectedProduct.unit}</span>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-800 mb-2">Disponibilidade</h4>
                                    {selectedProduct.stock > 0 ? (
                                        <span className="text-green-500 font-medium">
                                            Em estoque ({selectedProduct.stock} {selectedProduct.unit})
                                        </span>
                                    ) : (
                                        <span className="text-red-500 font-medium">Produto esgotado</span>
                                    )}
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-800 mb-2">Descrição</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        {selectedProduct.description}
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mt-2">
                                        Cultivado com técnicas sustentáveis que respeitam o meio ambiente e promovem
                                        o desenvolvimento das comunidades locais.
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-800 mb-2">Categoria</h4>
                                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                                        {selectedProduct.category.charAt(0).toUpperCase() + selectedProduct.category.slice(1)}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                                    <button className="flex-1 flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all">
                                        <ShoppingCart className="w-5 h-5 mr-2" />
                                        Solicitar Cotação
                                    </button>
                                </div>

                                <div className="mt-4 text-center">
                                    <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center justify-center mx-auto">
                                        <Download className="w-4 h-4 mr-1" />
                                        Baixar ficha técnica do produto
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Seção de benefícios dos produtos */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform hover:transform hover:scale-105">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Qualidade Garantida</h3>
                    <p className="text-gray-600">
                        Todos os nossos produtos passam por rigorosos controles de qualidade 
                        para garantir o melhor para nossos clientes.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform hover:transform hover:scale-105">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Entrega Rápida</h3>
                    <p className="text-gray-600">
                        Contamos com uma logística eficiente para entregar seus produtos 
                        no menor tempo possível, mantendo a qualidade.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform hover:transform hover:scale-105">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Suporte Técnico</h3>
                    <p className="text-gray-600">
                        Nossa equipe de especialistas está sempre disponível para orientar
                        sobre as melhores práticas de cultivo e utilização.
                    </p>
                </div>
            </div>

            {/* Seção de informações adicionais */}
            <div className="mt-16 bg-green-50 rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            Qualidade e Sustentabilidade
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Todos os nossos produtos são cultivados com técnicas que respeitam o meio ambiente e promovem
                            o desenvolvimento sustentável das comunidades rurais de Angola.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Certificação de qualidade</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Rastreabilidade desde a origem</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Comércio justo com produtores locais</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Como comprar nossos produtos</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                                    1
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-800">Selecione os produtos</h4>
                                    <p className="text-gray-600 text-sm">Navegue pelo nosso catálogo e adicione os itens ao carrinho.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                                    2
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-800">Finalize o pedido</h4>
                                    <p className="text-gray-600 text-sm">Escolha a forma de pagamento e envie seu pedido.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                                    3
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-800">Receba seus produtos</h4>
                                    <p className="text-gray-600 text-sm">Entregamos em todo o país ou você pode retirar em nossos centros.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Produtos em destaque */}
            <div className="mt-16">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Produtos em Destaque</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Conheça alguns dos nossos produtos mais populares, cultivados com cuidado e dedicação para garantir a mais alta qualidade.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {productsData
                        .filter(product => product.featured)
                        .slice(0, 4)
                        .map(product => (
                            <div
                                key={product.id}
                                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                                onClick={() => openProductModal(product)}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {product.organic && (
                                        <div className="absolute top-3 right-3 z-20 bg-white/90 text-green-600 text-xs font-medium px-2 py-1 rounded shadow-sm backdrop-blur-sm flex items-center">
                                            <Leaf className="w-3 h-3 mr-1" />
                                            Orgânico
                                        </div>
                                    )}
                                </div>

                                <div className="p-4">
                                    <h3 className="text-gray-800 font-semibold text-lg mb-2 group-hover:text-green-600 transition-colors">
                                        {product.name}
                                    </h3>
                                    <div className="flex justify-between items-center">
                                        <span className="text-green-600 font-bold">
                                            {formatPrice(product.price)}
                                        </span>
                                        <button className="text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded-lg text-sm transition-colors">
                                            Ver
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            {/* CTA final */}
            <div className="mt-20 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Interessado em nossos produtos?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    Entre em contato conosco para obter mais informações sobre preços por atacado, condições especiais
                    ou para solicitar uma visita às nossas instalações.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all shadow-md">
                        Solicitar Orçamento
                    </button>
                    <button className="px-6 py-3 bg-white hover:bg-gray-50 text-green-700 border border-green-200 rounded-lg font-medium transition-all">
                        Fale Conosco
                    </button>
                </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-20 bg-green-900 rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Receba nossas novidades
                        </h2>
                        <p className="text-green-100 mb-6">
                            Cadastre-se para receber atualizações sobre novos produtos, 
                            safras especiais e dicas de agricultura sustentável.
                        </p>
                    </div>
                    <div>
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input 
                                type="email" 
                                placeholder="Seu email" 
                                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                            <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all shadow-md">
                                Inscrever-se
                            </button>
                        </form>
                        <p className="text-green-200 text-sm mt-3">
                            Ao se inscrever, você concorda com nossa política de privacidade.
                            </p>
                    </div>
                </div>
            </div>
            
            {/* FAQ - Perguntas Frequentes */}
            <div className="mt-20">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Perguntas Frequentes</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Encontre respostas para as dúvidas mais comuns sobre nossos produtos agrícolas e processos de compra.
                    </p>
                </div>
                
                <div className="max-w-3xl mx-auto space-y-4">
                    {/* Pergunta 1 */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                        <button className="w-full flex justify-between items-center p-4 text-left">
                            <span className="font-medium text-gray-800">Como posso realizar uma compra?</span>
                            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className="px-4 pb-4">
                            <p className="text-gray-600">
                                Para realizar uma compra, basta navegar pelo nosso catálogo de produtos, selecionar os itens 
                                desejados e solicitar um orçamento através do botão correspondente. Nossa equipe comercial 
                                entrará em contato para finalizar sua compra.
                            </p>
                        </div>
                    </div>
                    
                    {/* Pergunta 2 */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                        <button className="w-full flex justify-between items-center p-4 text-left">
                            <span className="font-medium text-gray-800">Qual a quantidade mínima para compra?</span>
                            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className="px-4 pb-4">
                            <p className="text-gray-600">
                                A quantidade mínima varia de acordo com o produto. Para compras no atacado, oferecemos 
                                condições especiais. Entre em contato com nossa equipe para mais detalhes sobre quantidades 
                                mínimas e preços para grandes volumes.
                            </p>
                        </div>
                    </div>
                    
                    {/* Pergunta 3 */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                        <button className="w-full flex justify-between items-center p-4 text-left">
                            <span className="font-medium text-gray-800">Como funciona o processo de entrega?</span>
                            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className="px-4 pb-4">
                            <p className="text-gray-600">
                                Realizamos entregas em todo o território angolano. O prazo de entrega depende da sua 
                                localização e da disponibilidade dos produtos. Também oferecemos a opção de retirada 
                                em nossos centros de distribuição em Luanda, Huambo e Benguela.
                            </p>
                        </div>
                    </div>
                    
                    {/* Pergunta 4 */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                        <button className="w-full flex justify-between items-center p-4 text-left">
                            <span className="font-medium text-gray-800">Os produtos são certificados?</span>
                            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className="px-4 pb-4">
                            <p className="text-gray-600">
                                Sim, todos os nossos produtos passam por rigorosos controles de qualidade e possuem 
                                as certificações necessárias para comercialização. Nossos produtos orgânicos são 
                                certificados por órgãos competentes que atestam nossas práticas sustentáveis.
                            </p>
                        </div>
                    </div>
                    
                    {/* Pergunta 5 */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                        <button className="w-full flex justify-between items-center p-4 text-left">
                            <span className="font-medium text-gray-800">Vocês oferecem suporte técnico?</span>
                            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className="px-4 pb-4">
                            <p className="text-gray-600">
                                Sim, oferecemos suporte técnico especializado para nossos clientes. Nossa equipe de 
                                agrônomos e técnicos pode fornecer orientações sobre o melhor uso dos produtos, 
                                técnicas de plantio e manejo adequado das culturas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Parceiros */}
            <div className="mt-20">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Nossos Parceiros</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Trabalhamos com os melhores parceiros para garantir a qualidade dos nossos produtos e serviços.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-5 gap-6">
                    {/* Logotipos dos parceiros */}
                    {[1, 2, 3, 4, 5].map((partner) => (
                        <div key={partner} className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="h-16 w-full bg-gray-200 rounded flex items-center justify-center">
                                <span className="text-gray-500 font-medium">Logo Parceiro</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Depoimentos de clientes */}
            <div className="mt-20">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">O que dizem nossos clientes</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Veja o que nossos clientes falam sobre a qualidade dos nossos produtos e serviços.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Depoimento 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm relative">
                        <div className="absolute -top-4 -right-4 text-green-100">
                            <svg className="w-12 h-12" viewBox="0 0 48 48" fill="currentColor">
                                <path d="M14,24H6c-1.1,0-2-0.9-2-2V12c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2v10C16,23.1,15.1,24,14,24z" />
                                <path d="M42,24h-8c-1.1,0-2-0.9-2-2V12c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2v10C44,23.1,43.1,24,42,24z" />
                            </svg>
                        </div>
                        
                        <div className="flex mb-4">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        </div>
                        
                        <p className="text-gray-600 italic mb-6">
                            "Os produtos da PIPE Agro são de excelente qualidade. Compramos o café arábica 
                            e o gergelim para nossa indústria e temos recebido muitos elogios pelo sabor 
                            e qualidade final dos nossos produtos."
                        </p>
                        
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                <span className="text-green-600 font-bold">JC</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">João Carlos</h4>
                                <p className="text-gray-500 text-sm">Indústria Alimentícia, Luanda</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Depoimento 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm relative">
                        <div className="absolute -top-4 -right-4 text-green-100">
                            <svg className="w-12 h-12" viewBox="0 0 48 48" fill="currentColor">
                                <path d="M14,24H6c-1.1,0-2-0.9-2-2V12c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2v10C16,23.1,15.1,24,14,24z" />
                                <path d="M42,24h-8c-1.1,0-2-0.9-2-2V12c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2v10C44,23.1,43.1,24,42,24z" />
                            </svg>
                        </div>
                        
                        <div className="flex mb-4">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <Star className="w-4 h-4 text-gray-300" />
                        </div>
                        
                        <p className="text-gray-600 italic mb-6">
                            "O algodão orgânico da PIPE Agro é de alta qualidade e atende perfeitamente 
                            às necessidades da nossa indústria têxtil. Além disso, o suporte técnico 
                            fornecido pela equipe é excelente."
                        </p>
                        
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                <span className="text-green-600 font-bold">MF</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">Maria Francisca</h4>
                                <p className="text-gray-500 text-sm">Indústria Têxtil, Benguela</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Depoimento 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm relative">
                        <div className="absolute -top-4 -right-4 text-green-100">
                            <svg className="w-12 h-12" viewBox="0 0 48 48" fill="currentColor">
                                <path d="M14,24H6c-1.1,0-2-0.9-2-2V12c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2v10C16,23.1,15.1,24,14,24z" />
                                <path d="M42,24h-8c-1.1,0-2-0.9-2-2V12c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2v10C44,23.1,43.1,24,42,24z" />
                            </svg>
                        </div>
                        
                        <div className="flex mb-4">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        </div>
                        
                        <p className="text-gray-600 italic mb-6">
                            "Compramos regularmente os produtos agrícolas da PIPE Agro para nosso 
                            restaurante. A qualidade é sempre consistente e os produtos orgânicos 
                            fazem toda a diferença no sabor final dos nossos pratos."
                        </p>
                        
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                <span className="text-green-600 font-bold">PM</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">Paulo Mateus</h4>
                                <p className="text-gray-500 text-sm">Restaurante, Huambo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Banner final com call-to-action */}
            <div className="mt-20 bg-green-600 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Decoração de fundo */}
                <div className="absolute -right-20 -bottom-20 opacity-10">
                    <Leaf className="w-64 h-64" />
                </div>
                
                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                        Produtos agrícolas de qualidade para o seu negócio
                    </h2>
                    <p className="text-green-100 mb-8 text-lg">
                        Somos o parceiro ideal para fornecer os melhores produtos agrícolas 
                        cultivados com técnicas sustentáveis em Angola.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-8 py-3 bg-white hover:bg-gray-50 text-green-700 rounded-lg font-medium transition-all shadow-md">
                            Ver Catálogo Completo
                        </button>
                        <button className="px-8 py-3 bg-transparent hover:bg-green-700 text-white border border-white rounded-lg font-medium transition-all">
                            Fale com um Consultor
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Produtos;
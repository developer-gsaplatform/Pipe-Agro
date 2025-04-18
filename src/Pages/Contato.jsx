import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Leaf, CheckCircle, AlertCircle } from 'lucide-react';

const Contato = () => {
    const [formState, setFormState] = useState({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: '',
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        success: false,
        message: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formState.nome.trim()) newErrors.nome = 'Nome é obrigatório';
        if (!formState.email.trim()) {
            newErrors.email = 'Email é obrigatório';
        } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
            newErrors.email = 'Email inválido';
        }
        if (!formState.assunto.trim()) newErrors.assunto = 'Assunto é obrigatório';
        if (!formState.mensagem.trim()) newErrors.mensagem = 'Mensagem é obrigatória';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            [name]: value
        }));

        // Limpar erro quando o usuário começa a digitar
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Simulação de envio de formulário
            setFormStatus({
                submitted: true,
                loading: true,
                message: 'Enviando sua mensagem...'
            });

            // Simular resposta do servidor após 1.5 segundos
            setTimeout(() => {
                setFormStatus({
                    submitted: true,
                    success: true,
                    message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
                });

                // Limpar formulário
                setFormState({
                    nome: '',
                    email: '',
                    telefone: '',
                    assunto: '',
                    mensagem: '',
                });
            }, 1500);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Branca */}
            <div className="relative bg-white text-gray-800 py-20 md:py-28 border-b border-gray-100">
                <div className="absolute inset-0 overflow-hidden opacity-5">
                    <div className="absolute -right-10 top-10">
                        <Leaf className="w-64 h-64 text-green-500" />
                    </div>
                    <div className="absolute -left-10 bottom-10">
                        <Leaf className="w-64 h-64 text-green-500" />
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-green-50 text-green-600 text-sm font-medium mb-4">
                            Entre em Contato
                        </span>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                            Estamos Aqui Para Ajudar
                        </h1>

                        <div className="w-16 h-1 bg-green-100 mx-auto mb-6"></div>

                        <p className="text-xl text-gray-600 mb-8">
                            Tem dúvidas sobre nossos produtos, serviços ou deseja iniciar uma parceria?
                            Nossa equipe está pronta para atendê-lo.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3">
                            <a href="#form" className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors shadow-md">
                                Enviar Mensagem
                            </a>
                            <a href="#info" className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors border border-gray-200">
                                Informações de Contato
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Info Cards */}
            <div id="info" className="container mx-auto px-4 py-16 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 - Endereço */}
                    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
                        <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                            <MapPin className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Endereço</h3>
                        <p className="text-gray-600 mb-2">Avenida Principal, 123</p>
                        <p className="text-gray-600">Luanda, Angola</p>
                    </div>

                    {/* Card 2 - Telefone */}
                    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
                        <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                            <Phone className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefone</h3>
                        <p className="text-gray-600 mb-2">+244 123 456 789</p>
                        <p className="text-gray-600">+244 987 654 321</p>
                    </div>

                    {/* Card 3 - Email */}
                    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
                        <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                            <Mail className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-600 mb-2">contato@empresa.com</p>
                        <p className="text-gray-600">suporte@empresa.com</p>
                    </div>

                    {/* Card 4 - Horário */}
                    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
                        <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                            <Clock className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Horário</h3>
                        <p className="text-gray-600 mb-2">Seg - Sex: 8h às 17h</p>
                        <p className="text-gray-600">Sábado: 8h às 12h</p>
                    </div>
                </div>
            </div>

            {/* Seção de Contato - Formulário + Mapa */}
            <div id="form" className="container mx-auto px-4 py-12 mb-16">
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Formulário */}
                        <div className="p-6 md:p-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                                Envie-nos uma mensagem
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                            </p>

                            {formStatus.submitted && (
                                <div className={`mb-6 p-4 rounded-lg ${formStatus.success ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>
                                    <div className="flex items-center">
                                        {formStatus.success ? (
                                            <CheckCircle className="w-5 h-5 mr-2" />
                                        ) : (
                                            <AlertCircle className="w-5 h-5 mr-2" />
                                        )}
                                        <p>{formStatus.message}</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                                    <div>
                                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo*</label>
                                        <input
                                            type="text"
                                            id="nome"
                                            name="nome"
                                            value={formState.nome}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.nome ? 'border-red-300 bg-red-50' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors`}
                                            placeholder="Seu nome"
                                        />
                                        {errors.nome && <p className="mt-1 text-sm text-red-600">{errors.nome}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors`}
                                            placeholder="seu.email@exemplo.com"
                                        />
                                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                                    <div>
                                        <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                                        <input
                                            type="tel"
                                            id="telefone"
                                            name="telefone"
                                            value={formState.telefone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                                            placeholder="+244 XXX XXX XXX"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1">Assunto*</label>
                                        <input
                                            type="text"
                                            id="assunto"
                                            name="assunto"
                                            value={formState.assunto}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.assunto ? 'border-red-300 bg-red-50' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors`}
                                            placeholder="Assunto da mensagem"
                                        />
                                        {errors.assunto && <p className="mt-1 text-sm text-red-600">{errors.assunto}</p>}
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">Mensagem*</label>
                                    <textarea
                                        id="mensagem"
                                        name="mensagem"
                                        value={formState.mensagem}
                                        onChange={handleChange}
                                        rows="5"
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.mensagem ? 'border-red-300 bg-red-50' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors`}
                                        placeholder="Descreva como podemos ajudar..."
                                    ></textarea>
                                    {errors.mensagem && <p className="mt-1 text-sm text-red-600">{errors.mensagem}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors shadow-sm flex items-center justify-center"
                                >
                                    <Send className="w-4 h-4 mr-2" />
                                    Enviar Mensagem
                                </button>
                            </form>
                        </div>

                        {/* Mapa */}
                        <div className="bg-gray-50 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <iframe
                                    title="Mapa da localização"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125029.78887986533!2d13.150370687769355!3d-8.838788651546352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc8d2c7d%3A0x850c1c5c5ecc5a92!2sLuanda%2C%20Angola!5e0!3m2!1spt-BR!2sbr!4v1713463963122!5m2!1spt-BR!2sbr"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 py-16 mb-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="inline-block mb-2 text-green-600 font-medium px-4 py-1 rounded-full bg-green-50 border border-green-100">
                            Perguntas Frequentes
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                            Como podemos ajudar?
                        </h2>

                        <div className="w-16 h-1 bg-gradient-to-r from-green-300 to-green-600 mx-auto mb-6 rounded-full"></div>

                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Encontre respostas para as perguntas mais comuns sobre nossos produtos e serviços.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* FAQ Item 1 */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Como posso adquirir seus produtos?
                            </h3>
                            <p className="text-gray-600">
                                Nossos produtos podem ser adquiridos diretamente em nossos pontos de distribuição
                                em várias províncias ou através de contato direto com nossa equipe de vendas.
                                Entre em contato por telefone ou email para mais informações.
                            </p>
                        </div>

                        {/* FAQ Item 2 */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Vocês oferecem consultoria técnica?
                            </h3>
                            <p className="text-gray-600">
                                Sim, oferecemos consultoria técnica especializada para produtores.
                                Nossa equipe pode auxiliar desde o planejamento da produção até técnicas
                                de manejo e colheita. Agende uma visita técnica através do formulário de contato.
                            </p>
                        </div>

                        {/* FAQ Item 3 */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Como funcionam as parcerias com cooperativas?
                            </h3>
                            <p className="text-gray-600">
                                Trabalhamos com cooperativas em modelo de parceria, oferecendo suporte técnico,
                                acesso a mercados e capacitação. Cada parceria é personalizada de acordo com
                                as necessidades da cooperativa. Entre em contato para discutir possibilidades.
                            </p>
                        </div>

                        {/* FAQ Item 4 */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Vocês atendem em todo o país?
                            </h3>
                            <p className="text-gray-600">
                                Sim, nossa empresa atende clientes em todo o território nacional.
                                Temos representantes em várias províncias e nossa equipe está preparada
                                para oferecer suporte remoto quando necessário.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <p className="text-gray-600 mb-4">Não encontrou o que procurava?</p>
                        <a href="#form" className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors shadow-sm">
                            Envie sua pergunta
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contato;
// ======================
// DATA & STATE MANAGEMENT
// ======================

const categories = [
    {
        title: 'Gaming',
        description: 'Equipamentos para gamers profissionais e entusiastas',
        image: 'https://images.unsplash.com/photo-1623243747526-d1a0413e45c6?w=400'
    },
    {
        title: 'Home Office',
        description: 'Soluções completas para trabalho remoto',
        image: 'https://images.unsplash.com/photo-1666249245520-eb1f564dc421?w=400'
    },
    {
        title: 'Uso Profissional',
        description: 'Hardware de alta performance para profissionais',
        image: 'https://images.unsplash.com/photo-1672165407773-20262ff6ab13?w=400'
    },
    {
        title: 'Acessórios',
        description: 'Periféricos e acessórios premium',
        image: 'https://images.unsplash.com/photo-1641169707717-5704974b69dd?w=400'
    }
];

const products = [
    // Gaming
    { id: 1, name: 'Placa de Vídeo RTX 4080 Gaming Elite', description: 'GPU de última geração para gaming em 4K com ray tracing avançado', price: 4999.99, originalPrice: 5499.99, rating: 4.8, image: '2018383_625.jpeg', category: 'Gaming', inStock: true },
    { id: 7, name: 'Processador AMD Ryzen 9 7900X', description: 'CPU de alto desempenho com 12 núcleos e 24 threads para gaming extremo', price: 2899.99, originalPrice: 3299.99, rating: 4.9, image: 'D_NQ_NP_975245-MLU70537297427_072023-O.webp', category: 'Gaming', inStock: true },
    { id: 8, name: 'Memória RAM DDR5 32GB RGB Gaming', description: 'Kit de memória DDR5 5600MHz com iluminação RGB sincronizável', price: 1299.99, rating: 4.7, image: '61Lo0Ab5tFL._UF1000,1000_QL80_.jpg', category: 'Gaming', inStock: true },
    { id: 9, name: 'Placa-Mãe Gaming RGB Z790', description: 'Motherboard premium com RGB, Wi-Fi 6E e suporte para overclock', price: 1799.99, rating: 4.6, image: 'placa1.jpg', category: 'Gaming', inStock: true },
    { id: 10, name: 'SSD NVMe 2TB Gaming Pro', description: 'Armazenamento ultra-rápido PCIe 4.0 para jogos e aplicações', price: 899.99, originalPrice: 1099.99, rating: 4.8, image: 'ssd1.jpg', category: 'Gaming', inStock: true },
    { id: 5, name: 'Setup Gaming Completo RGB', description: 'Setup completo com PC, monitor, teclado, mouse e headset para gamers', price: 8999.99, originalPrice: 10499.99, rating: 4.9, image: 'https://images.unsplash.com/photo-1623243747526-d1a0413e45c6?w=400', category: 'Gaming', inStock: false },
    
    // Home Office
    { id: 3, name: 'Monitor Ultrawide 34" 144Hz', description: 'Monitor curvo ultrawide com alta taxa de atualização para produtividade e gaming', price: 2799.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1659297396001-fa8d15dcad1a?w=400', category: 'Home Office', inStock: true },
    { id: 6, name: 'Estação de Trabalho Home Office', description: 'Mesa ergonômica com suporte para monitor e organização de cabos', price: 1599.99, rating: 4.4, image: 'https://images.unsplash.com/photo-1666249245520-eb1f564dc421?w=400', category: 'Home Office', inStock: true },
    { id: 15, name: 'Cadeira Ergonômica Premium', description: 'Cadeira de escritório com apoio lombar ajustável e certificação ergonômica', price: 1299.99, originalPrice: 1599.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1688578735427-994ecdea3ea4?w=400', category: 'Home Office', inStock: true },
    { id: 16, name: 'Laptop Workstation i7 32GB', description: 'Notebook profissional com processador Intel i7, 32GB RAM e SSD 1TB', price: 5999.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1758876017929-416c85bb985d?w=400', category: 'Home Office', inStock: true },
    
    // Uso Profissional
    { id: 20, name: 'Workstation Intel Xeon W', description: 'Estação de trabalho profissional com processador Xeon e 64GB RAM', price: 12999.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1672165407773-20262ff6ab13?w=400', category: 'Uso Profissional', inStock: true },
    { id: 21, name: 'Placa de Vídeo Quadro RTX 5000', description: 'GPU profissional para renderização 3D e inteligência artificial', price: 15999.99, rating: 4.9, image: 'https://images.unsplash.com/photo-1555618254-84e2cf498b01?w=400', category: 'Uso Profissional', inStock: false },
    
    // Acessórios
    { id: 2, name: 'Teclado Mecânico Gaming RGB Pro', description: 'Teclado mecânico com switches Cherry MX e iluminação RGB customizável', price: 899.99, originalPrice: 1199.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1656711081969-9d16ebc2d210?w=400', category: 'Acessórios', inStock: true },
    { id: 4, name: 'Mousepad Gaming RGB XL', description: 'Mousepad extra grande com base antiderrapante e RGB sincronizável', price: 299.99, originalPrice: 399.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1703052399541-34d3bfa12e9c?w=400', category: 'Acessórios', inStock: true },
    { id: 24, name: 'Headset Gaming 7.1 Surround', description: 'Fone de ouvido gamer com som surround 7.1 e microfone destacável', price: 599.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1641169707717-5704974b69dd?w=400', category: 'Acessórios', inStock: true },
    { id: 25, name: 'Mouse Gaming Wireless 25K DPI', description: 'Mouse gamer sem fio com sensor de 25.000 DPI e bateria de longa duração', price: 449.99, originalPrice: 549.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?w=400', category: 'Acessórios', inStock: true }
];

// ======================
// APPLICATION STATE
// ======================

const appState = {
    cart: [],
    isLoggedIn: false,
    userName: '',
    currentView: 'home',
    currentCategory: null,
    checkoutStep: 'address',
    
    addToCart(product) {
        const existingItem = this.cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity++;
            showToast(`Quantidade de ${product.name} atualizada no carrinho!`, 'success');
        } else {
            this.cart.push({ ...product, quantity: 1 });
            showToast(`${product.name} adicionado ao carrinho!`, 'success');
        }
        this.updateCart();
    },
    
    updateQuantity(id, quantity) {
        if (quantity === 0) {
            this.removeFromCart(id);
            return;
        }
        const item = this.cart.find(item => item.id === id);
        if (item) {
            item.quantity = quantity;
            this.updateCart();
        }
    },
    
    removeFromCart(id) {
        this.cart = this.cart.filter(item => item.id !== id);
        showToast('Item removido do carrinho', 'info');
        this.updateCart();
    },
    
    updateCart() {
        updateCartBadge();
        if (document.getElementById('cart-sidebar')?.classList.contains('active')) {
            renderCartContent();
        }
    },
    
    getCartTotal() {
        return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    
    getCartItemsCount() {
        return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    },
    
    openCart() {
        document.getElementById('cart-sidebar').classList.add('active');
        renderCartContent();
    },
    
    closeCart() {
        document.getElementById('cart-sidebar').classList.remove('active');
    },
    
    openLogin() {
        document.getElementById('login-modal').classList.add('active');
    },
    
    closeLogin() {
        document.getElementById('login-modal').classList.remove('active');
    },
    
    openSearch() {
        document.getElementById('search-modal').classList.add('active');
        renderSearchResults();
    },
    
    closeSearch() {
        document.getElementById('search-modal').classList.remove('active');
        document.getElementById('search-input').value = '';
    },
    
    openCheckout() {
        if (this.cart.length === 0) {
            showToast('Seu carrinho está vazio', 'error');
            return;
        }
        this.closeCart();
        this.checkoutStep = 'address';
        document.getElementById('checkout-modal').classList.add('active');
        renderCheckoutContent();
    },
    
    closeCheckout() {
        document.getElementById('checkout-modal').classList.remove('active');
    },
    
    openOffers() {
        document.getElementById('offers-modal').classList.add('active');
        renderOffersContent();
    },
    
    closeOffers() {
        document.getElementById('offers-modal').classList.remove('active');
    },
    
    navigateToHome() {
        this.currentView = 'home';
        document.getElementById('home-view').style.display = 'block';
        document.getElementById('category-view').style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    
    navigateToCategory(category) {
        this.currentView = 'category';
        this.currentCategory = category;
        document.getElementById('home-view').style.display = 'none';
        document.getElementById('category-view').style.display = 'block';
        renderCategoryView(category);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showToast(`Navegando para categoria: ${category}`, 'success');
    },
    
    navigateToSection(section) {
        if (this.currentView !== 'home') {
            this.navigateToHome();
            setTimeout(() => {
                const element = document.getElementById(section);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(section);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
            else window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },
    
    login(name) {
        this.isLoggedIn = true;
        this.userName = name;
        updateLoginButton();
        this.closeLogin();
        showToast(`Bem-vindo, ${name}!`, 'success');
    },
    
    logout() {
        this.isLoggedIn = false;
        this.userName = '';
        updateLoginButton();
        showToast('Você saiu da sua conta', 'info');
    }
};

// ======================
// UTILITIES
// ======================

function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
}

// A partir daqui, posso continuar e organizar todo o resto do código (renderização, eventos, checkout, carrinho)  
// mantendo o mesmo padrão.  


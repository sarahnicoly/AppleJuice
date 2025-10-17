{ id: 25, name: 'Mouse Gaming Wireless 25K DPI', description: 'Mouse gamer sem fio com sensor de 25.000 DPI e bateria de longa duração', price: 449.99, originalPrice: 549.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?w=400', category: 'Acessórios', inStock: true }
];

// Application State
// ======================
// APPLICATION STATE
// ======================

const appState = {
    cart: [],
    isLoggedIn: false,
@@ -60,7 +63,6 @@ const appState = {
    currentCategory: null,
    checkoutStep: 'address',

    // Cart Methods
    addToCart(product) {
        const existingItem = this.cart.find(item => item.id === product.id);
        if (existingItem) {
@@ -93,7 +95,7 @@ const appState = {

    updateCart() {
        updateCartBadge();
        if (document.getElementById('cart-sidebar').classList.contains('active')) {
        if (document.getElementById('cart-sidebar')?.classList.contains('active')) {
            renderCartContent();
        }
    },
@@ -106,7 +108,6 @@ const appState = {
        return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    },

    // Modal & Sidebar Methods
    openCart() {
        document.getElementById('cart-sidebar').classList.add('active');
        renderCartContent();
@@ -158,7 +159,6 @@ const appState = {
        document.getElementById('offers-modal').classList.remove('active');
    },

    // Navigation Methods
    navigateToHome() {
        this.currentView = 'home';
        document.getElementById('home-view').style.display = 'block';
@@ -181,21 +181,15 @@ const appState = {
            this.navigateToHome();
            setTimeout(() => {
                const element = document.getElementById(section);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            if (element) element.scrollIntoView({ behavior: 'smooth' });
            else window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },

    // Auth Methods
    login(name) {
        this.isLoggedIn = true;
        this.userName = name;
@@ -213,559 +207,13 @@ const appState = {
};

// ======================
// UI RENDERING FUNCTIONS
// ======================

function renderCategories() {
    const grid = document.getElementById('categories-grid');
    grid.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="appState.navigateToCategory('${cat.title}')">
            <img src="${cat.image}" alt="${cat.title}" onerror="this.src='https://via.placeholder.com/400x200?text=${cat.title}'">
            <div class="category-card-content">
                <h3>${cat.title}</h3>
                <p>${cat.description}</p>
            </div>
        </div>
    `).join('');
}

function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = products.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    const stars = '<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating));
    const hasDiscount = product.originalPrice && product.originalPrice > product.price;
    
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/400x300?text=${encodeURIComponent(product.name)}'">
            <div class="product-content">
                <div class="product-header">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-rating">
                        <span class="stars">${stars}</span>
                        <span>(${product.rating})</span>
                    </div>
                    <span class="product-badge">${product.category}</span>
                    ${!product.inStock ? '<span class="product-badge out-of-stock">Sem Estoque</span>' : ''}
                </div>
                <div class="product-footer">
    <div class="product-prices">
        <div class="product-price">R$ ${formatPrice(product.price)}</div>
        ${hasDiscount ? `<div class="product-original-price">R$ ${formatPrice(product.originalPrice)}</div>` : ''}
    </div>
    <div class="product-buttons">
        <button class="btn-view-details" onclick='openProductDetails(${JSON.stringify(product)})'>
            Ver Detalhes
        </button>
        <button class="btn-add-cart" onclick='addProductToCart(${JSON.stringify(product)})' ${!product.inStock ? 'disabled' : ''}>
            ${product.inStock ? 'Adicionar' : 'Indisponível'}
        </button>
    </div>
</div>

            </div>
        </div>
    `;
}

function renderCartContent() {
    const container = document.getElementById('cart-content');
    const count = appState.getCartItemsCount();
    
    document.getElementById('cart-count').textContent = count;
    document.getElementById('cart-items-label').textContent = count === 1 ? 'item' : 'itens';
    
    if (appState.cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <p>Seu carrinho está vazio</p>
                <p class="text-secondary">Adicione alguns produtos incríveis!</p>
            </div>
        `;
        return;
    }
    
    const total = appState.getCartTotal();
    
    container.innerHTML = `
        <div class="cart-items">
            ${appState.cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/64'">
                    <div class="cart-item-content">
                        <div class="cart-item-title">${item.name}</div>
                        <span class="product-badge">${item.category}</span>
                        <div class="cart-item-price">R$ ${formatPrice(item.price)}</div>
                        <div class="cart-item-quantity">
                            <button class="qty-btn" onclick="appState.updateQuantity(${item.id}, ${item.quantity - 1})">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span class="qty-value">${item.quantity}</span>
                            <button class="qty-btn" onclick="appState.updateQuantity(${item.id}, ${item.quantity + 1})">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <button class="cart-item-remove" onclick="appState.removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('')}
        </div>
        
        <div class="cart-footer">
            <div class="cart-totals">
                <div class="cart-total-row">
                    <span>Subtotal:</span>
                    <span>R$ ${formatPrice(total)}</span>
                </div>
                <div class="cart-total-row">
                    <span>Frete:</span>
                    <span class="free">Grátis</span>
                </div>
                <div class="cart-total-row final">
                    <span>Total:</span>
                    <span class="amount">R$ ${formatPrice(total)}</span>
                </div>
            </div>
            
            ${!appState.isLoggedIn ? `
                <div class="login-required">
                    <div class="login-required-content">
                        <i class="fas fa-sign-in-alt login-required-icon"></i>
                        <div>
                            <h4>Login Necessário</h4>
                            <p>Para finalizar sua compra, você precisa estar logado em sua conta.</p>
                        </div>
                    </div>
                    <button class="btn-primary" onclick="appState.closeCart(); appState.openLogin();">
                        <i class="fas fa-sign-in-alt"></i> Fazer Login
                    </button>
                </div>
            ` : `
                <button class="btn-primary" onclick="appState.openCheckout()">
                    Finalizar Compra
                </button>
            `}
            
            <button class="btn-outline" onclick="appState.closeCart()">
                Continuar Comprando
            </button>
        </div>
    `;
}

function renderSearchResults(query = '') {
    const resultsBody = document.getElementById('search-results-body');
    const resultsHeader = document.getElementById('search-results-header');
    
    let filtered = products;
    
    if (query) {
        filtered = products.filter(p => 
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase())
        );
    }
    
    resultsHeader.innerHTML = `<p>${filtered.length} produto${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}</p>`;
    
    if (filtered.length === 0) {
        resultsBody.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-search"></i>
                <p>Nenhum produto encontrado</p>
                <p class="text-secondary">Tente ajustar os filtros de busca</p>
            </div>
        `;
        return;
    }
    
    resultsBody.innerHTML = filtered.map(product => {
        const hasDiscount = product.originalPrice && product.originalPrice > product.price;
        return `
            <div class="search-result-item">
                <img src="${product.image}" alt="${product.name}" class="search-result-image" onerror="this.src='https://via.placeholder.com/64'">
                <div class="search-result-content">
                    <div class="search-result-title">${product.name}</div>
                    <div class="search-result-description">${product.description}</div>
                    <span class="product-badge mt-1">${product.category}</span>
                    ${!product.inStock ? '<span class="product-badge out-of-stock mt-1">Sem Estoque</span>' : ''}
                </div>
                <div class="search-result-footer">
                    <div>
                        <div class="search-result-price">R$ ${formatPrice(product.price)}</div>
                        ${hasDiscount ? `<div class="search-result-original">R$ ${formatPrice(product.originalPrice)}</div>` : ''}
                    </div>
                    <button class="btn-add-sm" onclick='addProductToCart(${JSON.stringify(product)}); appState.closeSearch();' ${!product.inStock ? 'disabled' : ''}>
                        ${product.inStock ? 'Adicionar' : 'Indisponível'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function renderCheckoutContent() {
    const content = document.getElementById('checkout-content');
    const total = appState.getCartTotal();
    
    content.innerHTML = `
        <div class="checkout-steps">
            <div class="step-circle ${appState.checkoutStep === 'address' ? 'active' : ''}">1</div>
            <div class="step-line ${appState.checkoutStep !== 'address' ? 'active' : ''}"></div>
            <div class="step-circle ${appState.checkoutStep === 'payment' || appState.checkoutStep === 'summary' ? 'active' : ''}">2</div>
            <div class="step-line ${appState.checkoutStep === 'summary' ? 'active' : ''}"></div>
            <div class="step-circle ${appState.checkoutStep === 'summary' ? 'active' : ''}">3</div>
        </div>
        
        <!-- Address Step -->
        <div class="checkout-section ${appState.checkoutStep === 'address' ? 'active' : ''}">
            <h3 class="section-title"><i class="fas fa-map-marker-alt"></i> Dados de Entrega</h3>
            <form id="address-form">
                <div class="form-row">
                    <div class="form-group">
                        <label>Nome completo *</label>
                        <input type="text" required>
                    </div>
                    <div class="form-group">
                        <label>Telefone *</label>
                        <input type="tel" required placeholder="(11) 99999-9999">
                    </div>
                </div>
                <div class="form-group">
                    <label>E-mail *</label>
                    <input type="email" required>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>CEP *</label>
                        <input type="text" required placeholder="00000-000">
                    </div>
                    <div class="form-group" style="grid-column: span 2;">
                        <label>Endereço *</label>
                        <input type="text" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Número *</label>
                        <input type="text" required>
                    </div>
                    <div class="form-group" style="grid-column: span 2;">
                        <label>Complemento</label>
                        <input type="text">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Bairro *</label>
                        <input type="text" required>
                    </div>
                    <div class="form-group">
                        <label>Cidade *</label>
                        <input type="text" required>
                    </div>
                    <div class="form-group">
                        <label>Estado *</label>
                        <input type="text" required maxlength="2">
                    </div>
                </div>
                <button type="submit" class="btn-primary">Continuar para Pagamento</button>
            </form>
        </div>
        
        <!-- Payment Step -->
        <div class="checkout-section ${appState.checkoutStep === 'payment' ? 'active' : ''}">
            <h3 class="section-title"><i class="fas fa-credit-card"></i> Forma de Pagamento</h3>
            <form id="payment-form">
                <div class="tabs-header">
                    <button type="button" class="tab-btn active">Cartão</button>
                    <button type="button" class="tab-btn">PIX</button>
                    <button type="button" class="tab-btn">Boleto</button>
                </div>
                
                <div class="form-group">
                    <label>Número do Cartão</label>
                    <input type="text" placeholder="0000 0000 0000 0000">
                </div>
                <div class="form-group">
                    <label>Nome no Cartão</label>
                    <input type="text" placeholder="Como está no cartão">
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Validade</label>
                        <input type="text" placeholder="MM/AA">
                    </div>
                    <div class="form-group">
                        <label>CVV</label>
                        <input type="text" placeholder="000">
                    </div>
                </div>
                
                <div class="btn-group">
                    <button type="button" class="btn-outline" onclick="appState.checkoutStep = 'address'; renderCheckoutContent();">Voltar</button>
                    <button type="submit" class="btn-primary">Revisar Pedido</button>
                </div>
            </form>
        </div>
        
        <!-- Summary Step -->
        <div class="checkout-section ${appState.checkoutStep === 'summary' ? 'active' : ''}">
            <h3 class="section-title"><i class="fas fa-truck"></i> Resumo do Pedido</h3>
            
            <div class="summary-box">
                <h4>Entrega</h4>
                <p>Informações salvas com sucesso</p>
            </div>
            
            <div class="summary-box">
                <h4>Itens (${appState.cart.length})</h4>
                ${appState.cart.map(item => `
                    <p>${item.name} - Qtd: ${item.quantity} - R$ ${formatPrice(item.price * item.quantity)}</p>
                `).join('')}
            </div>
            
            <div class="cart-totals">
                <div class="cart-total-row">
                    <span>Subtotal:</span>
                    <span>R$ ${formatPrice(total)}</span>
                </div>
                <div class="cart-total-row">
                    <span>Frete:</span>
                    <span class="free">Grátis</span>
                </div>
                <div class="cart-total-row final">
                    <span>Total:</span>
                    <span class="amount">R$ ${formatPrice(total)}</span>
                </div>
            </div>
            
            <div class="btn-group">
                <button class="btn-outline" onclick="appState.checkoutStep = 'payment'; renderCheckoutContent();">Voltar</button>
                <button class="btn-primary" onclick="finalizeOrder()">Finalizar Pedido</button>
            </div>
        </div>
    `;
    
    // Add form handlers
    const addressForm = document.getElementById('address-form');
    if (addressForm) {
        addressForm.onsubmit = (e) => {
            e.preventDefault();
            appState.checkoutStep = 'payment';
            renderCheckoutContent();
            showToast('Endereço salvo com sucesso!', 'success');
        };
    }
    
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.onsubmit = (e) => {
            e.preventDefault();
            appState.checkoutStep = 'summary';
            renderCheckoutContent();
            showToast('Dados de pagamento salvos!', 'success');
        };
    }
}

function renderOffersContent() {
    const content = document.getElementById('offers-content');
    const offerProducts = products.filter(p => p.originalPrice && p.originalPrice > p.price);
    
    content.innerHTML = `
        <div class="section-header">
            <h2><i class="fas fa-fire" style="color: #991b1b;"></i> Flash Deals</h2>
            <p>Ofertas por tempo limitado com descontos especiais</p>
        </div>
        <div class="products-grid">
            ${offerProducts.map(product => createProductCard(product)).join('')}
        </div>
    `;
}

function renderCategoryView(category) {
    const view = document.getElementById('category-view');
    const categoryProducts = products.filter(p => p.category === category);
    
    view.innerHTML = `
        <div class="category-header">
            <div class="category-header-content">
                <button class="btn-back" onclick="appState.navigateToHome()">
                    <i class="fas fa-arrow-left"></i> Voltar
                </button>
                <h1 class="category-title">${category}</h1>
            </div>
        </div>
        
        <div class="container">
            <div class="products-grid">
                ${categoryProducts.map(product => createProductCard(product)).join('')}
            </div>
        </div>
    `;
}

// ======================
// UTILITY FUNCTIONS
// UTILITIES
// ======================

function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
}

function updateCartBadge() {
    const badge = document.getElementById('cart-count'); // <--- alterado aqui
    badge.textContent = appState.getCartItemsCount();
}

function updateLoginButton() {
    const btn = document.getElementById('login-btn');
    const text = document.getElementById('login-text');
    
    if (appState.isLoggedIn) {
        text.textContent = appState.userName;
        btn.onclick = () => {
            if (confirm('Deseja sair da sua conta?')) {
                appState.logout();
            }
        };
    } else {
        text.textContent = 'Login';
        btn.onclick = () => appState.openLogin();
    }
}

function addProductToCart(product) {
    appState.addToCart(product);
}

function handleSearch() {
    const query = document.getElementById('search-input').value;
    const clearBtn = document.getElementById('clear-search');
    
    if (query) {
        clearBtn.style.display = 'flex';
    } else {
        clearBtn.style.display = 'none';
    }
    
    renderSearchResults(query);
}

function clearSearch() {
    document.getElementById('search-input').value = '';
    document.getElementById('clear-search').style.display = 'none';
    renderSearchResults();
}

function finalizeOrder() {
    showToast('Pedido realizado com sucesso! Você receberá um e-mail de confirmação.', 'success');
    appState.cart = [];
    appState.updateCart();
    setTimeout(() => {
        appState.closeCheckout();
    }, 2000);
}

// Toast Notification System
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle'
    };
    
    toast.innerHTML = `
        <i class="fas ${icons[type]}"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'fadeIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ======================
// EVENT LISTENERS
// ======================

// Newsletter Form
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    if (email) {
        showToast('Inscrição realizada com sucesso! Você receberá nossas novidades em breve.', 'success');
        document.getElementById('newsletter-email').value = '';
    }
});

// Login/Register Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        if (!tab) return;
        
        // Update tab buttons
        btn.parentElement.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${tab}-tab`).classList.add('active');
    });
});

// Login Form
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const name = email.split('@')[0];
    appState.login(name.charAt(0).toUpperCase() + name.slice(1));
});

// Register Form
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    appState.login(name);
});

// Close modals on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        appState.closeCart();
        appState.closeLogin();
        appState.closeSearch();
        appState.closeCheckout();
        appState.closeOffers();
    }
});

// ======================
// INITIALIZATION
// ======================
// A partir daqui, posso continuar e organizar todo o resto do código (renderização, eventos, checkout, carrinho)  
// mantendo o mesmo padrão.  

document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts();
    updateCartBadge();
    console.log('Apple Juice E-commerce initialized!');
});
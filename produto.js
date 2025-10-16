document.addEventListener('DOMContentLoaded', () => {
    // Simulate fetching product data based on a URL parameter or other logic
    // For demo, we'll use a sample product object
    const product = {
        id: 1,
        name: 'Placa de Vídeo RTX 4080 Gaming Elite',
        images: [
            '2018383_625.jpeg',
            '61Lo0Ab5tFL._UF1000,1000_QL80_.jpg',
            'D_NQ_NP_975245-MLU70537297427_072023-O.webp'
        ],
        title: 'Placa de Vídeo RTX 4080 Gaming Elite - 16GB GDDR6X',
        price: 4999.99,
        originalPrice: 5499.99,
        installments: '10x de R$ 499,99 sem juros',
        rating: 4.8,
        reviewCount: 255,
        stock: 15,
        variants: [
            { name: 'Modelo', options: ['Padrão', 'OC Edition'] },
            { name: 'Cor', options: ['Preto', 'Branco'] }
        ],
        seller: {
            name: 'Apple Juice Oficial',
            avatar: 'https://via.placeholder.com/40',
            rating: 4.9
        },
        specifications: [
            { key: 'Memória', value: '16GB GDDR6X' },
            { key: 'Interface', value: 'PCI Express 4.0' },
            { key: 'Clock', value: '2.51 GHz' },
            { key: 'Conectores', value: '3x DisplayPort, 1x HDMI' }
        ]
    };

    populateProductDetails(product);
});

function populateProductDetails(product) {
    document.getElementById('main-product-image').src = product.images[0];
    
    const thumbnailsContainer = document.getElementById('thumbnail-images');
    thumbnailsContainer.innerHTML = product.images.map((img, index) => 
        `<img src="${img}" class="${index === 0 ? 'active' : ''}" onclick="changeImage('${img}', this)">`
    ).join('');

    document.getElementById('product-title-detail').textContent = product.title;
    document.getElementById('product-price-detail').textContent = `R$ ${product.price.toFixed(2)}`;
    document.getElementById('product-original-price-detail').textContent = `R$ ${product.originalPrice.toFixed(2)}`;
    document.getElementById('product-discount-detail').textContent = `${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF`;
    document.getElementById('product-installments-detail').textContent = product.installments;
    
    // Rating stars
    const ratingStars = document.getElementById('product-rating-detail');
    ratingStars.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        ratingStars.innerHTML += i < Math.floor(product.rating) ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
    }
    ratingStars.innerHTML += `<span> ${product.rating}</span>`;
    document.getElementById('product-review-count-detail').textContent = `(${product.reviewCount} avaliações)`;

    document.getElementById('product-stock-detail').textContent = `(${product.stock} disponíveis)`;

    // Specifications
    const specsTable = document.getElementById('product-specs-table-detail');
    specsTable.innerHTML = product.specifications.map(spec => 
        `<tr><td>${spec.key}</td><td>${spec.value}</td></tr>`
    ).join('');

    // Add to cart button event listener
    document.getElementById('add-to-cart-btn-detail').addEventListener('click', () => {
        // This should integrate with your existing cart logic (appState)
        console.log(`Product added to cart: ${product.name}`);
        // appState.addToCart(product);
    });
}

function changeImage(src, element) {
    document.getElementById('main-product-image').src = src;
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    element.classList.add('active');
}

function updateQuantityDetail(amount) {
    const quantityInput = document.getElementById('product-quantity-detail');
    let currentValue = parseInt(quantityInput.value);
    currentValue += amount;
    if (currentValue < 1) {
        currentValue = 1;
    }
    quantityInput.value = currentValue;
}

function showTab(tabName) {
    const tabs = document.querySelectorAll('.product-details-tabs .tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(`${tabName}-tab`).classList.add('active');

    const tabButtons = document.querySelectorAll('.product-details-tabs .tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.product-details-tabs .tab-btn[onclick="showTab('${tabName}')"]`).classList.add('active');
}

function openImageModal(src) {
    // Optional: Implement a full-screen image modal
    console.log(`Opening image: ${src}`);
}

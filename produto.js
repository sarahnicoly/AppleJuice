// ======================
// Simulação de Dados
// ======================
const products = JSON.parse(localStorage.getItem('products')) || [
  {
    id: 1,
    name: "Placa de Vídeo RTX 4080 Gaming Elite",
    description: "GPU de última geração com ray tracing e 4K",
    price: 4999.99,
    originalPrice: 5499.99,
    rating: 4.8,
    image: "2018383_625.jpeg",
    category: "Gaming"
  },
  {
    id: 2,
    name: "Teclado Mecânico RGB Pro",
    description: "Switches Cherry MX e iluminação RGB",
    price: 899.99,
    originalPrice: 1199.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1656711081969-9d16ebc2d210?w=400",
    category: "Acessórios"
  },
];

// ======================
// Carregar Produto Selecionado
// ======================
function getProductFromURL() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  return products.find((p) => p.id === id);
}

// ======================
// Renderizar Detalhes do Produto
// ======================
function renderProductDetails() {
  const product = getProductFromURL();
  if (!product) return;

  const container = document.getElementById("product-details");
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  container.innerHTML = `
    <div class="product-images">
      <img id="mainImage" src="${product.image}" alt="${product.name}">
      <div class="thumbnail-row">
        <img src="${product.image}" class="thumbnail active" alt="Thumb 1">
        <img src="https://images.unsplash.com/photo-1612831455546-1b8c0f1b7a06?w=400" class="thumbnail" alt="Thumb 2">
        <img src="https://images.unsplash.com/photo-1616627987213-f8f46ef1aaf9?w=400" class="thumbnail" alt="Thumb 3">
      </div>
    </div>

    <div class="product-info">
      <h1 class="product-title">${product.name}</h1>
      <div class="rating"><i class="fas fa-star"></i> ${product.rating} / 5</div>
      <p>${product.description}</p>
      <div class="product-price">
        R$ ${product.price.toFixed(2).replace('.', ',')}
        ${hasDiscount ? `<span class="product-original-price">R$ ${product.originalPrice.toFixed(2).replace('.', ',')}</span>` : ''}
      </div>

      <div class="variation-group">
        <label>Cor:</label>
        <div class="variation-options">
          <button class="active">Preto</button>
          <button>Branco</button>
          <button>Rosa</button>
        </div>
      </div>

      <div class="btn-group">
        <button class="btn-add" onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        <button class="btn-buy" onclick="buyNow(${product.id})">Comprar Agora</button>
      </div>
    </div>
  `;

  // Miniaturas clicáveis
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      thumbnails.forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
      mainImage.src = thumb.src;
    });
  });

  // Botões de variação
  const variationButtons = document.querySelectorAll(".variation-options button");
  variationButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const group = btn.parentNode;
      group.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  renderRelatedProducts(product.category, product.id);
}

// ======================
// Produtos Relacionados
// ======================
function renderRelatedProducts(category, excludeId) {
  const related = products.filter((p) => p.category === category && p.id !== excludeId);
  const container = document.getElementById("related-grid");

  container.innerHTML = related
    .map(
      (p) => `
      <div class="related-product" onclick="openProduct(${p.id})">
        <img src="${p.image}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p>R$ ${p.price.toFixed(2).replace('.', ',')}</p>
      </div>
    `
    )
    .join("");
}

// ======================
// Funções do Carrinho
// ======================
function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find((p) => p.id === id);
  const existing = cart.find((item) => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${product.name} adicionado ao carrinho!`);
}

function buyNow(id) {
  addToCart(id);
  window.location.href = "checkout.html";
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").textContent = count;
}

function goToCart() {
  window.location.href = "carrinho.html";
}

function openProduct(id) {
  window.location.href = `produto.html?id=${id}`;
}

// ======================
// Inicialização
// ======================
document.addEventListener("DOMContentLoaded", () => {
  renderProductDetails();
  updateCartCount();
});

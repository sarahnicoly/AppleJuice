// Troca de imagem principal
// ====================== Troca de Imagem Principal ======================
const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    // Remove a classe 'active' de todas as miniaturas
    thumbnails.forEach((t) => t.classList.remove("active"));
    
    // Adiciona a classe 'active' na miniatura clicada
    thumb.classList.add("active");
    
    // Atualiza a imagem principal
    mainImage.src = thumb.src;
  });
});

// Seleção de variações (cor e tamanho)
// ====================== Seleção de Variações (Cor e Tamanho) ======================
const variationButtons = document.querySelectorAll(".variation-options button");

variationButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const group = btn.parentNode;
    const group = btn.parentNode; // Seleciona o grupo da variação
    
    // Remove a classe 'active' de todos os botões do grupo
    group.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
    
    // Adiciona a classe 'active' no botão clicado
    btn.classList.add("active");
  });
});
});
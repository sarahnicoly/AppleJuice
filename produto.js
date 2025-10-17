// Troca de imagem principal
const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    thumbnails.forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
    mainImage.src = thumb.src;
  });
});

// Seleção de variações (cor e tamanho)
const variationButtons = document.querySelectorAll(".variation-options button");

variationButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const group = btn.parentNode;
    group.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

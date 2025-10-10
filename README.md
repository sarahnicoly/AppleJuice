# 🍎 Apple Juice - E-commerce HTML/CSS/JS

Versão estática HTML/CSS/JavaScript do e-commerce Apple Juice, totalmente funcional e pronta para deploy no GitHub Pages ou qualquer servidor web.

## 📁 Estrutura de Arquivos

```
/static-site/
├── index.html       # Estrutura HTML completa
├── styles.css       # Todos os estilos CSS
├── script.js        # Toda a lógica JavaScript
└── README.md        # Este arquivo
```

## ✨ Funcionalidades Implementadas

### 🛒 Sistema de Carrinho
- ✅ Adicionar produtos ao carrinho
- ✅ Atualizar quantidade de itens
- ✅ Remover itens do carrinho
- ✅ Cálculo automático de totais
- ✅ Frete grátis
- ✅ Carrinho lateral (sidebar) responsivo
- ✅ Validação de estoque

### 👤 Sistema de Login
- ✅ Modal de login/cadastro
- ✅ Tabs entre login e registro
- ✅ Validação de campos
- ✅ Exibição do nome do usuário no header
- ✅ Logout com confirmação
- ✅ Proteção do checkout (requer login)

### 🔍 Sistema de Busca
- ✅ Modal de busca com filtros
- ✅ Busca em tempo real
- ✅ Filtro por nome, descrição e categoria
- ✅ Contador de resultados
- ✅ Adicionar ao carrinho direto da busca

### 💳 Sistema de Checkout
- ✅ 3 etapas: Endereço → Pagamento → Resumo
- ✅ Indicador visual de progresso
- ✅ Formulário de endereço completo
- ✅ Múltiplas formas de pagamento (Cartão, PIX, Boleto)
- ✅ Validação de campos obrigatórios
- ✅ Revisão do pedido antes de finalizar
- ✅ Confirmação de pedido

### 🏷️ Sistema de Ofertas
- ✅ Modal com produtos em promoção
- ✅ Flash deals com descontos
- ✅ Badges de desconto
- ✅ Preço original riscado

### 📱 Categorias
- ✅ 4 categorias principais: Gaming, Home Office, Uso Profissional, Acessórios
- ✅ Navegação por categorias
- ✅ Página dedicada para cada categoria
- ✅ Botão de voltar
- ✅ 30 produtos variados

### 🎨 Interface
- ✅ Design moderno e responsivo
- ✅ Navegação suave entre seções
- ✅ Animações e transições
- ✅ Toast notifications (notificações)
- ✅ Modais e sidebars com overlay
- ✅ Ícones Font Awesome
- ✅ Paleta de cores #991b1b (vermelho escuro)

### 📧 Newsletter
- ✅ Formulário de inscrição
- ✅ Validação de e-mail
- ✅ Confirmação de inscrição

### 📄 Footer Completo
- ✅ 4 colunas de informações
- ✅ Links de categorias
- ✅ Links de atendimento
- ✅ Links institucionais
- ✅ Copyright

## 🚀 Como Usar

### Localmente

1. **Clone ou baixe os arquivos**
   ```bash
   # Se estiver em um repositório Git
   git clone [seu-repositorio]
   cd static-site
   ```

2. **Abra o arquivo HTML**
   - Simplesmente abra `index.html` em qualquer navegador moderno
   - Ou use um servidor local:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js com http-server
   npx http-server
   ```

3. **Acesse no navegador**
   ```
   http://localhost:8000
   ```

### Deploy no GitHub Pages

1. **Crie um repositório no GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Apple Juice E-commerce"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/seu-repositorio.git
   git push -u origin main
   ```

2. **Configure GitHub Pages**
   - Vá em Settings → Pages
   - Em "Source", selecione "main" branch
   - Selecione a pasta `/static-site` (ou raiz se os arquivos estiverem na raiz)
   - Clique em "Save"

3. **Acesse seu site**
   ```
   https://seu-usuario.github.io/seu-repositorio/
   ```

### Deploy em Outros Serviços

#### Netlify
1. Arraste a pasta `/static-site` para https://app.netlify.com/drop
2. Pronto! Seu site está no ar

#### Vercel
```bash
npm install -g vercel
cd static-site
vercel
```

#### Surge
```bash
npm install -g surge
cd static-site
surge
```

## 🎯 Estrutura do Código

### HTML (index.html)
- **Header**: Logo, navegação, busca, carrinho, login
- **Hero Section**: Banner principal com CTAs
- **Categories Section**: Grid de 4 categorias
- **Products Section**: Grid com 30 produtos
- **Newsletter Section**: Formulário de inscrição
- **Footer**: Informações e links
- **Modals**: Login, Busca, Checkout, Ofertas
- **Sidebar**: Carrinho

### CSS (styles.css)
- **Reset & Base**: Normalização e variáveis CSS
- **Header**: Navbar sticky com ações
- **Hero**: Banner com gradiente
- **Categories**: Cards com hover effects
- **Products**: Cards responsivos
- **Cart**: Sidebar deslizante
- **Modals**: Sistema de modais overlay
- **Forms**: Inputs estilizados
- **Animations**: Transições suaves
- **Responsive**: Media queries para mobile

### JavaScript (script.js)
- **Data**: Arrays de categorias e produtos
- **State Management**: Objeto `appState` centralizado
- **Cart Logic**: Adicionar, remover, atualizar
- **Rendering**: Funções para renderizar UI
- **Navigation**: Sistema de rotas (SPA-like)
- **Auth**: Login/logout simples
- **Search**: Busca com filtros
- **Checkout**: Fluxo em 3 etapas
- **Utilities**: Formatação, validações
- **Events**: Listeners de formulários e interações
- **Toasts**: Sistema de notificações

## 🎨 Personalização

### Cores
Edite as variáveis CSS em `styles.css`:
```css
:root {
    --primary-color: #991b1b;      /* Cor principal */
    --primary-dark: #7f1d1d;       /* Cor escura */
    --primary-light: #b91c1c;      /* Cor clara */
}
```

### Produtos
Edite o array `products` em `script.js`:
```javascript
const products = [
    {
        id: 1,
        name: 'Nome do Produto',
        description: 'Descrição',
        price: 999.99,
        originalPrice: 1199.99,  // Opcional para desconto
        rating: 4.8,
        image: 'url-da-imagem',
        category: 'Gaming',
        inStock: true
    },
    // ... mais produtos
];
```

### Categorias
Edite o array `categories` em `script.js`:
```javascript
const categories = [
    {
        title: 'Nome da Categoria',
        description: 'Descrição da categoria',
        image: 'url-da-imagem'
    },
    // ... mais categorias
];
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Desktop**: > 768px (layout completo)
- **Tablet**: 768px (ajustes de grid)
- **Mobile**: < 768px (layout mobile-first)
- **Small Mobile**: < 480px (otimizações extras)

## 🔧 Dependências Externas

O site usa apenas uma dependência externa via CDN:
- **Font Awesome 6.4.0**: Para ícones
  ```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  ```

**Sem outras dependências!** Todo o código é vanilla HTML/CSS/JS.

## ⚡ Performance

- **Otimizado**: Zero frameworks, código nativo
- **Leve**: ~20KB HTML + ~30KB CSS + ~25KB JS
- **Rápido**: Carregamento instantâneo
- **SEO-friendly**: HTML semântico
- **Acessível**: ARIA labels e navegação por teclado

## 🛠️ Manutenção

### Adicionar Novo Produto
1. Abra `script.js`
2. Adicione novo objeto no array `products`
3. Salve e recarregue

### Adicionar Nova Categoria
1. Adicione em `categories` array em `script.js`
2. Adicione produtos com essa categoria
3. Opcionalmente, crie subcategorias

### Modificar Estilos
1. Edite variáveis CSS em `:root`
2. Ou modifique classes específicas
3. Use DevTools para testar antes

## 🐛 Troubleshooting

### Imagens não carregam
- Verifique se as URLs do Unsplash estão acessíveis
- O código tem fallback para placeholder automático

### Modal não abre
- Verifique console do navegador
- Confirme que script.js está carregando

### Carrinho não atualiza
- Limpe cache do navegador
- Verifique localStorage (future feature)

## 📋 Checklist de Deploy

- [ ] Teste todos os botões e links
- [ ] Teste responsividade em mobile
- [ ] Teste adicionar/remover produtos do carrinho
- [ ] Teste fluxo de checkout completo
- [ ] Teste busca de produtos
- [ ] Teste login/cadastro
- [ ] Verifique imagens carregando
- [ ] Teste em diferentes navegadores
- [ ] Otimize imagens (se necessário)
- [ ] Configure domínio personalizado (opcional)

## 🚀 Próximas Melhorias (Opcionais)

- [ ] Persistência no localStorage
- [ ] Integração com backend real
- [ ] Pagamento real (Stripe, MercadoPago)
- [ ] Sistema de avaliações
- [ ] Wishlist / Favoritos
- [ ] Comparador de produtos
- [ ] Filtros avançados
- [ ] Ordenação de produtos
- [ ] Paginação
- [ ] Lazy loading de imagens
- [ ] PWA (Progressive Web App)
- [ ] Dark mode

## 📄 Licença

Este projeto é de código aberto para fins educacionais.

## 👨‍💻 Desenvolvido Para

**Apple Juice E-commerce** - Sua loja especializada em peças de PC, gaming, home office e acessórios tech.

---

**Status**: ✅ 100% Funcional  
**Versão**: 1.0.0  
**Última Atualização**: 2025  

**Deploy agora e tenha seu e-commerce online em minutos!** 🚀
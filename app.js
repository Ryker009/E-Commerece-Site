// script.js

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const productsContainer = document.getElementById("productsContainer");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalDisplay = document.getElementById("total");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const themeToggle = document.getElementById("themeToggle");
const clearCartBtn = document.getElementById("clearCart");

function renderProducts(list) {
  productsContainer.innerHTML = "";
  list.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsContainer.appendChild(div);
  });
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price.toFixed(2)}
      <button onclick="removeFromCart(${index})">❌</button>
    `;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartCount.textContent = cart.length;
  totalDisplay.textContent = total.toFixed(2);
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  cart.push(product);
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function filterProducts() {
  const searchText = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  const filtered = products.filter((p) => {
    const matchName = p.name.toLowerCase().includes(searchText);
    const matchCategory = category === "all" || p.category === category;
    return matchName && matchCategory;
  });

  renderProducts(filtered);
}

function setupTheme() {
  const storedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.toggle("dark", storedTheme === "dark");
  themeToggle.textContent = storedTheme === "dark" ? "☀️" : "🌙";

  themeToggle.onclick = () => {
    document.body.classList.toggle("dark");
    const newTheme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙";
  };
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
clearCartBtn.addEventListener("click", () => {
  cart = [];
  updateCart();
});

renderProducts(products);
updateCart();
setupTheme();

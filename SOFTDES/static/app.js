// ---- Data ----
const foods = [
  // Shawarma
  { id: 1, name: "Shawarma Wrap (Buy 1 Take 1)", price: 89, category: "Shawarma", emoji: "🌯" },
  { id: 2, name: "Shawarma Wrap (Solo)", price: 49, category: "Shawarma", emoji: "🌯" },
  { id: 3, name: "Shawarma Wrap (All Meat)", price: 59, category: "Shawarma", emoji: "🌯" },
  { id: 4, name: "Shawarma Rice (Buy 1 Take 1)", price: 129, category: "Shawarma", emoji: "🍛" },
  { id: 5, name: "Shawarma Rice (Solo)", price: 69, category: "Shawarma", emoji: "🍛" },
  { id: 6, name: "Shawarma Fries", price: 59, category: "Shawarma", emoji: "🍟" },

  // Dumplings
  { id: 7, name: "Sharksfin (10pcs)", price: 65, category: "Dumplings", emoji: "🥟" },
  { id: 8, name: "Shanghai Rolls Small (10pcs)", price: 55, category: "Dumplings", emoji: "🥠" },
  { id: 9, name: "Gyoza (10pcs)", price: 65, category: "Dumplings", emoji: "🥟" },
  { id: 10, name: "Mixed Dumpling", price: 65, category: "Dumplings", emoji: "🥟", note: "5 Sharksfin and 5 Gyoza" },
  { id: 11, name: "Steam Big Pork Siomai (6pcs)", price: 65, category: "Dumplings", emoji: "🥟" },
  { id: 12, name: "Fried Big Pork Siomai (6pcs)", price: 65, category: "Dumplings", emoji: "🥟" },

  // Chicken Pastil
  { id: 13, name: "Chicken Pastil (Buy 1 Take 1)", price: 55, category: "Chicken Pastil", emoji: "🍱", note: "Regular or spicy" },
  { id: 14, name: "Chicken Pastil (Solo)", price: 30, category: "Chicken Pastil", emoji: "🍱", note: "Regular or spicy" },
  { id: 15, name: "Chicken Pastil in Tub", price: 129, category: "Chicken Pastil", emoji: "🍱" },

  // Snacks
  { id: 16, name: "French Fries (Regular)", price: 35, category: "Snacks", emoji: "🍟", note: "1 flavor: Cheese, Barbecue, Sour Cream, Salt" },
  { id: 17, name: "French Fries (Large)", price: 60, category: "Snacks", emoji: "🍟", note: "1-2 flavors: Cheese, Barbecue, Sour Cream, Salt" },
  { id: 18, name: "Cheesedog Sandwich (Buy 1 Take 1)", price: 45, category: "Snacks", emoji: "🌭" },
  { id: 19, name: "Cheesedog Sandwich (Solo)", price: 28, category: "Snacks", emoji: "🌭" },
  { id: 20, name: "Cheesestick (6pcs)", price: 35, category: "Snacks", emoji: "🧀", note: "Real cheese" },
  { id: 21, name: "Cheesestick (15pcs)", price: 89, category: "Snacks", emoji: "🧀", note: "Real cheese" },
  { id: 22, name: "Luncheon Meat (3pcs)", price: 55, category: "Snacks", emoji: "🥓" },
  { id: 23, name: "Kingsize Cheesedog (3pcs)", price: 55, category: "Snacks", emoji: "🌭" },

  // Drinks
  { id: 24, name: "Coke Float (Small 12oz)", price: 35, category: "Drinks", emoji: "🥤" },
  { id: 25, name: "Coke Float (Medium 16oz)", price: 45, category: "Drinks", emoji: "🥤" },
  { id: 26, name: "Choco Float (Small 12oz)", price: 35, category: "Drinks", emoji: "🍫" },
  { id: 27, name: "Choco Float (Medium 16oz)", price: 45, category: "Drinks", emoji: "🍫" },
  { id: 28, name: "Coffee Float (Small 12oz)", price: 35, category: "Drinks", emoji: "☕" },
  { id: 29, name: "Coffee Float (Medium 16oz)", price: 45, category: "Drinks", emoji: "☕" },
  { id: 30, name: "Cucumber Lemonade", price: 25, category: "Drinks", emoji: "🍋" },
  { id: 31, name: "Lychee Lemonade", price: 25, category: "Drinks", emoji: "🍋" },
  { id: 32, name: "Blue Lemonade", price: 25, category: "Drinks", emoji: "🧊" },

  // Rice Meals
  { id: 33, name: "Sharksfin Rice", price: 40, category: "Rice Meals", emoji: "🍚" },
  { id: 34, name: "Gyoza Rice", price: 40, category: "Rice Meals", emoji: "🍚" },
  { id: 35, name: "Big Siomai Rice", price: 40, category: "Rice Meals", emoji: "🍚" },
  { id: 36, name: "Luncheon Meat Rice", price: 40, category: "Rice Meals", emoji: "🍚" },
  { id: 37, name: "Shanghai Rice", price: 40, category: "Rice Meals", emoji: "🍚" },
  { id: 38, name: "Kingsize Hotdog Rice", price: 40, category: "Rice Meals", emoji: "🍚" },

  // Platters
  { id: 39, name: "Mixed Dumpling Platter", price: 205, category: "Platters", emoji: "🍽️", note: "15pcs Sharksfin + 15pcs Gyoza (fried or steam), dumpling sauce, spicy sauce" },
  { id: 40, name: "Gyoza Platter", price: 205, category: "Platters", emoji: "🍽️", note: "30pcs Gyoza (fried or steam), dumpling sauce, spicy sauce" },
  { id: 41, name: "Big Siomai Platter", price: 205, category: "Platters", emoji: "🍽️", note: "18pcs Big Siomai (fried or steam), dumpling sauce, spicy sauce" },
  { id: 42, name: "Sharksfin Platter", price: 205, category: "Platters", emoji: "🍽️", note: "30pcs Sharksfin (fried or steam), dumpling sauce, spicy sauce" },
];
let cart = [];
let selectedCategory = "All";
let isRegister = false;

// ---- Menu ----
function renderCategories() {
  const cats = ["All", ...new Set(foods.map(f => f.category))];
  document.getElementById("categories").innerHTML = cats
    .map(c => `<button class="chip ${c === selectedCategory ? "active" : ""}" onclick="setCategory('${c}')">${c}</button>`)
    .join("");
}

function setCategory(c) {
  selectedCategory = c;
  renderCategories();
  renderMenu();
}

function renderMenu() {
  const list = selectedCategory === "All" ? foods : foods.filter(f => f.category === selectedCategory);
  document.getElementById("menu").innerHTML = list.map(f => `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="card h-100 p-3">
        <div class="food-emoji">${f.emoji}</div>
        <h6 class="mt-2">${f.name}</h6>
        ${f.note ? `<small class="text-secondary">${f.note}</small>` : ""}
        <p class="text-secondary mb-2">₱${f.price}</p>
        <button class="btn btn-red btn-sm mt-auto" onclick="addToCart(${f.id})">Add to cart</button>
      </div>
    </div>`).join("");
}

// ---- Cart ----
function addToCart(id) {
  const item = cart.find(i => i.id === id);
  if (item) item.qty++;
  else cart.push({ ...foods.find(f => f.id === id), qty: 1 });
  renderCart();
}

function changeQty(id, change) {
  const item = cart.find(i => i.id === id);
  item.qty += change;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  renderCart();
}

function renderCart() {
  document.getElementById("cartItems").innerHTML = cart.length === 0
    ? "<p class='text-secondary'>Your cart is empty. Add something from the menu.</p>"
    : cart.map(i => `
      <div class="d-flex justify-content-between align-items-center mb-2">
        <span>${i.emoji} ${i.name}</span>
        <span>
          <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${i.id}, -1)">-</button>
          ${i.qty}
          <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${i.id}, 1)">+</button>
        </span>
      </div>`).join("");

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  document.getElementById("cartTotal").textContent = total;
  document.getElementById("cartCount").textContent = cart.reduce((sum, i) => sum + i.qty, 0);
}

document.getElementById("checkoutBtn").onclick = () => {
  if (cart.length === 0) return alert("Your cart is empty.");
  const payment = document.getElementById("payment").value;
  const total = document.getElementById("cartTotal").textContent;
  document.getElementById("confirmText").textContent = `Total ₱${total}, paid with ${payment}.`;
  bootstrap.Offcanvas.getInstance("#cartPanel").hide();
  new bootstrap.Modal("#confirmModal").show();
  cart = [];
  renderCart();
};

// ---- Login / Register / 2FA (front-end only for now) ----
document.getElementById("toggleAuth").onclick = (e) => {
  e.preventDefault();
  isRegister = !isRegister;
  document.getElementById("authTitle").textContent = isRegister ? "Create account" : "Login";
  document.getElementById("authBtn").textContent = isRegister ? "Sign up" : "Login";
  e.target.textContent = isRegister ? "I already have an account" : "Create an account";
};

document.getElementById("forgotLink").onclick = (e) => {
  e.preventDefault();
  alert("Password reset email would be sent here (Firebase later).");
};

document.getElementById("authBtn").onclick = () => {
  bootstrap.Modal.getInstance("#loginModal").hide();
  new bootstrap.Modal("#twoFAModal").show();
};

document.getElementById("verifyBtn").onclick = () => {
  bootstrap.Modal.getInstance("#twoFAModal").hide();
  alert("Logged in!");
};

// ---- Start ----
renderCategories();
renderMenu();
renderCart();

// ---- PWA ----
if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");
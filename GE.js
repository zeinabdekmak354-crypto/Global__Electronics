const products = {
  electronics: [
    {
      name: "Laptop",
      price: 650,
      image: "laptops.jpeg",
      description: "A powerful laptop for studying, work, programming, and online projects.",
      colors: [
        { color: "black", image: "black_.jpeg" },
        { color: "silver", image: "silver.jpeg" },
        { color: "blue", image: "blue.jpeg" }
      ]
    },
    {
      name: "Smartphone",
      price: 450,
      image: "smartphones.jpeg",
      description: "A modern smartphone with a clear camera, fast performance, and long battery life.",
      colors: [
        { color: "black", image: "blach_ph.jpeg" },
        { color: "white", image: "white.jpeg" },
        { color: "purple", image: "purple.jpeg" }
      ]
    },
    {
      name: "Wireless Headphones",
      price: 80,
      image: "wireless.jpeg",
      description: "Comfortable wireless headphones with clear sound and noise reduction.",
      colors: [
        { color: "black", image: "wblack.jpeg" },
        { color: "red", image: "wred.jpeg" },
        { color: "white", image: "wwhite.jpeg" }
      ]
    },
    {
      name: "Tablet",
      price: 300,
      image: "t.jpeg",
      description: "A portable tablet for reading, studying, drawing, and watching videos.",
      colors: [
        { color: "grey", image: "tgrey.jpeg" },
        { color: "silver", image: "tsilver.jpeg" },
        { color: "blue", image: "tblue.jpeg" }
      ]
    }
  ],

  appliances: [
    {
      name: "Refrigerator",
      price: 700,
      image: "f.jpeg",
      description: "A large refrigerator with modern cooling technology and energy saving.",
      colors: [
        { color: "silver", image: "fsilver.jpeg" },
        { color: "black", image: "fblack.jpeg" },
        { color: "white", image: "fwhite.jpeg" }
      ]
    },
    {
      name: "Washing Machine",
      price: 500,
      image: "wa.jpeg",
      description: "A smart washing machine with different washing programs for daily use.",
      colors: [
        { color: "white", image: "wawhite.jpeg" },
        { color: "gray", image: "wagray.jpeg" },
        { color: "silver", image: "wasilver.jpeg" }
      ]
    },
    {
      name: "Microwave",
      price: 120,
      image: "m.jpeg",
      description: "A practical microwave for heating and cooking food quickly.",
      colors: [
        { color: "black", image: "mblack.jpeg" },
        { color: "silver", image: "msilver.jpeg" },
        { color: "white", image: "mwhite.jpeg" }
      ]
    }
  ],

  fitness: [
    {
      name: "Treadmill",
      price: 600,
      image: "tread.jpeg",
      description: "A strong treadmill for home workouts and cardio exercises.",
      colors: [
        { color: "black", image: "treadblack.jpeg" },
        { color: "gray", image: "treadgray.jpeg" },
        { color: "red", image: "treadred.jpeg" }
      ]
    },
    {
      name: "Dumbbells Set",
      price: 90,
      image: "d.jpeg",
      description: "A set of dumbbells for strength training and daily fitness routines.",
      colors: [
        { color: "black", image: "dblack.jpeg" },
        { color: "red", image: "dred.jpeg" },
        { color: "blue", image: "dblue.jpeg" }
      ]
    },
    {
      name: "Smart Watch",
      price: 150,
      image: "s.jpeg",
      description: "A smart watch that tracks steps, heart rate, calories, and workouts.",
      colors: [
        { color: "black", image: "sblack.jpeg" },
        { color: "pink", image: "spink.jpeg" },
        { color: "silver", image: "ssilver.jpeg" }
      ]
    }
  ],

  care: [
    {
      name: "Hair Dryer",
      price: 45,
      image: "h.jpeg",
      description: "A strong hair dryer with fast drying and heat control.",
      colors: [
        { color: "pink", image: "hpink.jpeg" },
        { color: "black", image: "hblack.jpeg" },
        { color: "white", image: "hwhite.jpeg" }
      ]
    },
    {
      name: "Electric Toothbrush",
      price: 35,
      image: "b.jpeg",
      description: "An electric toothbrush for deep cleaning and better oral care.",
      colors: [
        { color: "white", image: "bwhite.jpeg" },
        { color: "blue", image: "bblue.jpeg" },
        { color: "pink", image: "bpink.jpeg" }
      ]
    },
    {
      name: "Skincare Device",
      price: 75,
      image: "sc.jpeg",
      description: "A skincare device that helps clean and refresh the skin.",
      colors: [
        { color: "rosybrown", image: "scrose.jpeg" },
        { color: "white", image: "scwhite.jpeg" },
        { color: "purple", image: "scpurple.jpeg" }
      ]
    }
  ]
};

function loginUser() {
  alert("Login successful! Welcome to Global Electronics.");
  window.location.href = "#mainWebsite";
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function addToCart(name, price) {
  let cart = getCart();

  cart.push({
    name: name,
    price: price
  });

  saveCart(cart);
  alert(name + " added to cart!");
}

function updateCartCount() {
  let cart = getCart();
  let count = document.getElementById("cartCount");

  if (count) {
    count.textContent = cart.length;
  }
}

function openCart() {
  let cartPanel = document.getElementById("cartPanel");
  let cartItems = document.getElementById("cartItems");
  let cartTotal = document.getElementById("cartTotal");

  let cart = getCart();
  let total = 0;

  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach(function(item) {
      total += item.price;

      cartItems.innerHTML += `
        <div class="cart-item">
          <h4>${item.name}</h4>
          <p>$${item.price}</p>
        </div>
      `;
    });
  }

  cartTotal.textContent = total;
  cartPanel.classList.add("active");
}

function closeCart() {
  document.getElementById("cartPanel").classList.remove("active");
}

function clearCart() {
  localStorage.removeItem("cart");
  updateCartCount();
  openCart();
}

function changeProductImage(index, newImage) {
  document.getElementById(`product-img-${index}`).src = newImage;
}

function loadProductsPage() {
  const container = document.getElementById("productContainer");

  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const category = params.get("cat");

  const title = document.getElementById("categoryTitle");

  let categoryNames = {
    electronics: "Premium Electronics",
    appliances: "Home Appliances",
    fitness: "Fitness Equipment",
    care: "Personal Care"
  };

  title.textContent = categoryNames[category] || "Products";

  let selectedProducts = products[category] || [];

  selectedProducts.forEach(function(product, index) {
    let colorHTML = "";

    product.colors.forEach(function(c) {
      colorHTML += `
        <span
          class="color-circle"
          style="background:${c.color}"
          onclick="changeProductImage(${index}, '${c.image}')">
        </span>
      `;
    });

    container.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" id="product-img-${index}">
        <h3>${product.name}</h3>
        <p class="price">$${product.price}</p>
        <p>${product.description}</p>

        <div class="colors-container">
          ${colorHTML}
        </div>

        <button class="add-btn" onclick="addToCart('${product.name}', ${product.price})">
          Add to Cart
        </button>
      </div>
    `;
  });
}

loadProductsPage();
updateCartCount();

let cart = JSON.parse(localStorage.getItem("cart")) || [];
t
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price) {
  let item = cart.find(p => p.name === name);

  if (item) {
    item.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  saveCart();
  alert(name + " added to cart ✅");
}

let buttons = document.querySelectorAll(".box1-btn1");

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let box = btn.closest(".box");

    let name = box.querySelector(".box1-heading1").innerText;
    let priceText = box.querySelector(".box1-span1").innerText;

    let price = parseFloat(priceText.replace("$", ""));

    addToCart(name, price);
  });
}); 
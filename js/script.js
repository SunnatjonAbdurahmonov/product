window.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".product"),
    openBtn = document.querySelector(".open"),
    buttons = document.querySelectorAll("button");

  function createElement() {
    let field = document.createElement("div"),
      cart = document.createElement("div"),
      heading = document.createElement("h2"),
      closeBtn = document.createElement("button");

    field.classList.add("cart-field");
    cart.classList.add("cart");
    closeBtn.classList.add("close");

    heading.textContent = "Your products";
    closeBtn.textContent = "Close";

    document.body.appendChild(cart);
    cart.appendChild(heading);
    cart.appendChild(field);
    cart.appendChild(closeBtn);
  }
  createElement();

  let cart = document.querySelector(".cart");
  closeBtn = document.querySelector(".close");
  field = document.querySelector(".cart-field");

  openBtn.addEventListener("click", function () {
    cart.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    cart.style.display = "none";
  });

  buttons.forEach(function (item, i) {
    item.addEventListener("click", function () {
      let cloneItem = products[i].cloneNode(true);
      btn = cloneItem.querySelector("button");

      btn.remove();
      field.appendChild(cloneItem);
      products[i].remove();
    });
  });
});

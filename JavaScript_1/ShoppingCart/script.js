class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(product) {
      this.items.push(product);
    }
  
    getTotal() {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  
    displayCart() {
      return this.items.map(item => `${item.name} - $${item.price} x ${item.quantity}`).join('<br>');
    }
  }
  
  const cart = new ShoppingCart();
  
  function addToCart() {
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const quantity = parseInt(document.getElementById('product-quantity').value);
  
    if (name && price && quantity) {
      cart.addItem(new Product(name, price, quantity));
      document.getElementById('cart-summary').innerHTML = `
        <strong>Cart Summary:</strong><br>
        ${cart.displayCart()}<br>
        <strong>Total: $${cart.getTotal()}</strong>
      `;
    } else {
      alert('Please fill all fields!');
    }
  }
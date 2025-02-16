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
      return this.items.map(item => `${item.name} - $${item.price} x ${item.quantity}`).join('\n');
    }
  }
  
  const cart = new ShoppingCart();
  cart.addItem(new Product('Laptop', 1000, 1));
  cart.addItem(new Product('Mouse', 20, 2));
  console.log(cart.displayCart());
  console.log(`Total: $${cart.getTotal()}`);
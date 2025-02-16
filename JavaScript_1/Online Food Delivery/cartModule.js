export class Cart {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    calculateTotal() {
      const subtotal = this.items.reduce((total, item) => total + item.price, 0);
      const tax = subtotal * 0.1; // 10% tax
      return subtotal + tax;
    }
  
    displayCart() {
      return this.items
        .map((item) => `${item.name} - $${item.price}`)
        .join('<br>');
    }
  }
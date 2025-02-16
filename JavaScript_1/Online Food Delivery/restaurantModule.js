export class Restaurant {
    constructor(name, menu) {
      this.name = name;
      this.menu = menu;
    }
  
    displayMenu() {
      return this.menu
        .map((item, index) => `${index + 1}. ${item.name} - $${item.price}`)
        .join('<br>');
    }
  }
  
  export const restaurants = [
    new Restaurant('Pizza Hut', [
      { name: 'Margherita Pizza', price: 10 },
      { name: 'Pepperoni Pizza', price: 12 },
    ]),
    new Restaurant('Burger King', [
      { name: 'Whopper', price: 8 },
      { name: 'Cheeseburger', price: 5 },
    ]),
  ];
import { restaurants } from './restaurantModule.js';
import { Cart } from './cartModule.js';

const cart = new Cart();

// Display Restaurants
const restaurantsDiv = document.getElementById('restaurants');
restaurants.forEach((restaurant, index) => {
  restaurantsDiv.innerHTML += `
    <h3>${restaurant.name}</h3>
    <p>${restaurant.displayMenu()}</p>
    <button onclick="addToCart(${index}, 0)">Add ${restaurant.menu[0].name}</button>
    <button onclick="addToCart(${index}, 1)">Add ${restaurant.menu[1].name}</button>
  `;
});

// Add to Cart
window.addToCart = (restaurantIndex, itemIndex) => {
  const { name, price } = restaurants[restaurantIndex].menu[itemIndex];
  cart.addItem({ name, price });
  updateCart();
};

// Update Cart Display
function updateCart() {
  const cartDiv = document.getElementById('cart');
  cartDiv.innerHTML = `
    <h3>Your Cart</h3>
    ${cart.displayCart()}<br>
    <strong>Total (including 10% tax): $${cart.calculateTotal().toFixed(2)}</strong>
  `;
}
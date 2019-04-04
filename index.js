var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
var itemPrice = Math.floor(Math.random() * 100) + 1;
var newItem = {[itemName]: itemPrice};
console.log(`${itemName} has been added to your cart.`);
 cart.push(newItem);
return cart
}

function viewCart() {
  if (cart = 0);
  return ("Your shopping cart is empty.");
  else if (cart = 1) {
    return("In your cart, you have" + ${itemName} + "at" + ${itemPrice});
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

import { CODPaymentStrategy } from "./PaymentStrategy/CODPaymentStrategy";
import { UPIPaymentStrategy } from "./PaymentStrategy/UPIPaymentStrategy";
import { CartItem, ShoppingCart } from "./ShoppingCart";

const item1: CartItem = {
    item_name: 'Laptop',
    item_id: 1,
    item_unit_price: 999.99,
    item_qty: 2,
    item_description: 'High-performance laptop for gaming and work.',
};
  
const item2: CartItem = {
    item_name: 'Smartphone',
    item_id: 2,
    item_unit_price: 499.99,
    item_qty: 3,
    item_description: 'Latest model with advanced camera features.',
};
  
const item3: CartItem = {
    item_name: 'Headphones',
    item_id: 3,
    item_unit_price: 79.99,
    item_qty: 1,
};
  
const item4: CartItem = {
    item_name: 'Mouse',
    item_id: 4,
    item_unit_price: 29.99,
    item_qty: 5,
    item_description: 'Ergonomic design with customizable buttons.',
};


const ShoppingCart1 = new ShoppingCart("123456", new UPIPaymentStrategy("8787887@paytm"));
ShoppingCart1.addItemToCart(item2);
ShoppingCart1.addItemToCart(item3);


const ShoppingCart2 = new ShoppingCart("1234", new CODPaymentStrategy("330 Main Street"));
ShoppingCart2.addItemToCart(item1);

console.log(ShoppingCart1.checkoutCart());
console.log(ShoppingCart2.checkoutCart());
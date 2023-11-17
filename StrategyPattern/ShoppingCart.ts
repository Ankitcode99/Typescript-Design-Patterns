import { AbstractPaymentStrategy } from "./PaymentStrategy/AbstractPaymentStrategy";

export type CartItem = {
    item_name: string;
    item_id: number;
    item_unit_price: number;
    item_qty: number;
    item_description?: string | null;
};


export class ShoppingCart {
    userId: string;
    paymentStrategy: AbstractPaymentStrategy;
    cart: CartItem[];

    constructor(userId:string, paymentStrategy: AbstractPaymentStrategy) {
        this.paymentStrategy = paymentStrategy;
        this.cart = [];
        this.userId = userId;
    }

    addItemToCart(cartItem: CartItem): void {
        this.cart.push(cartItem);
    }

    removeItemFromCart(itemId: number): void {
        let tempCart:CartItem[] = [];
        for (let i = 0; i < this.cart.length; i++) {
            if(this.cart[i].item_id != itemId) {
                tempCart.push(this.cart[i]);
            }
        }

        this.cart = tempCart;
    }

    checkoutCart() : string {
        let totalCartAmount = this.cart.reduce((sum, item)=>{
            return sum + item.item_qty*item.item_unit_price;
        }, 0);

        return this.paymentStrategy.processPayment(totalCartAmount);
    }
}
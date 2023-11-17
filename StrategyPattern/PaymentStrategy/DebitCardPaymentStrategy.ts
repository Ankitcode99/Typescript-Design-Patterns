import { AbstractPaymentStrategy } from "./AbstractPaymentStrategy";

export class DebitCardPaymentStrategy extends AbstractPaymentStrategy {
    
    cardNumber: string;
    cvv: number;
    expiryDate: string;

    constructor(cardNumber: string, cvv: number, expiryDate: string) {
        super();
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expiryDate = expiryDate;
    }

    processPayment(amount: number): string {
        return `Payment of INR ${amount} has to be made by ${this.cardNumber}`
    }
}
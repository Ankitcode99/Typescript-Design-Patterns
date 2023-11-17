import { AbstractPaymentStrategy } from "./AbstractPaymentStrategy";

export class UPIPaymentStrategy extends AbstractPaymentStrategy {

    upiId: string;

    constructor(upiId: string) {
        super();
        this.upiId = upiId;
    }

    processPayment(amount: number): string {
        return `A payment amount of INR ${amount} is requested from ${this.upiId}`
    }
}
import { AbstractPaymentStrategy } from "./AbstractPaymentStrategy";

export class CODPaymentStrategy extends AbstractPaymentStrategy {

    address: string;

    constructor(address: string) {
        super();
        this.address = address;
    }

    processPayment(amount: number): string {
        return `The amount ${amount} has to be collected from ${this.address}`
    }
}
export abstract class AbstractPaymentStrategy {
    abstract processPayment(amount: number): string; 
}
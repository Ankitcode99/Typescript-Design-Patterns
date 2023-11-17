import { AbstractObserver } from "./AbstractObserver";

export class SMSObserver extends AbstractObserver {
    phoneNumber: string;

    constructor(phoneNumber: string){
        super();
        this.phoneNumber = phoneNumber;
    }

    notify(message: string): void {
        console.log(`Observer with Phone Number: ${this.phoneNumber} is notified with message - ${message}`);
    }
    
}
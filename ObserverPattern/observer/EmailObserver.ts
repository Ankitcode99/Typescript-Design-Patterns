import { AbstractObserver } from "./AbstractObserver";

export class EmailObserver extends AbstractObserver {
    emailId: string;

    constructor(emailId: string){
        super();
        this.emailId = emailId;
    }

    notify(message: string): void {
        console.log(`Observer with Email: ${this.emailId} is notified with message - ${message}`);
    }
    
}
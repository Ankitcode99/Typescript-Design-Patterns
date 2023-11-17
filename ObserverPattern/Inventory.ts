import { Item } from "./observable/Item";
import { ObservableImplementation } from "./observable/ObservableImplementation";
import { AbstractObserver } from "./observer/AbstractObserver";
import { EmailObserver } from "./observer/EmailObserver";
import { SMSObserver } from "./observer/SMSObserver";

const apple: Item = new Item({ name: "Apple", qty: 5 });
const mango: Item = new Item({ name: "Mango", qty: 3 });


const observer1: AbstractObserver = new EmailObserver("observer1@example.com")
const observer2: AbstractObserver = new EmailObserver("observer2@example.com")
const observer3: AbstractObserver = new SMSObserver("123456")
const observer4: AbstractObserver = new SMSObserver("456454")

const observable = new ObservableImplementation();


observable.subscribe(apple, observer1);
observable.subscribe(apple, observer2);
observable.subscribe(mango, observer3);

observable.updateItem("remove", apple, 5);

observable.subscribe(mango, observer4);

observable.updateItem("add", apple, 4)

setTimeout(()=> {
    observable.updateItem("remove", mango, 3)
}, 2000)

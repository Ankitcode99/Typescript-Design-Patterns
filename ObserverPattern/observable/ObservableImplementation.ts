import { AbstractObserver } from "../observer/AbstractObserver";
import { Item } from "./Item";
import { ObservableInterface } from "./ObservableInterface";

export class ObservableImplementation implements ObservableInterface {

    itemVsObserverMap = new Map<Item, AbstractObserver[]>();

    subscribe(item: Item, observer: AbstractObserver): string {
        if(this.itemVsObserverMap.has(item)) {
            const currentList = this.itemVsObserverMap.get(item) as AbstractObserver[] | undefined;
            if(Array.isArray(currentList)) {
                this.itemVsObserverMap.set(item, [ ...currentList, observer]);
            }
        } else {
            this.itemVsObserverMap.set(item, [observer]);
        }

        return "Successfully subscribed to " + item.item.name;
    }
    unsubscribe(item: Item, observer: AbstractObserver): string {
        if (this.itemVsObserverMap.has(item)) {
            const currentList = this.itemVsObserverMap.get(item) as AbstractObserver[] | undefined;

            if (Array.isArray(currentList)) {
                // Filter out the observer to create a new array
                const updatedList = currentList.filter((obs) => obs !== observer);

                // Update the map with the new array
                this.itemVsObserverMap.set(item, updatedList);

                return "Successfully unsubscribed from " + item.item.name;
            }
        }

        return "Observer not found for " + item.item.name;
    }
    notifyObservers(item: Item, message: string): void {
        if(this.itemVsObserverMap.has(item)){
            const currentList = this.itemVsObserverMap.get(item) as AbstractObserver[] | undefined;

            if (Array.isArray(currentList)) {
                currentList.forEach(observer => {
                    observer.notify(message);
                })
            }
        }
    }

    updateItem(operation: "add" | "remove", item: Item, qty: number): void {
        const initialQty = item.getQty();

        if(operation == "add"){
            item.addQty(qty);
            if(initialQty == 0){
                const message = `${item.item.name} is available now!`
                this.notifyObservers(item, message);
            } 
        } else {
            item.removeQty(qty);
            if(item.getQty() == 0){
                const message = `${item.item.name} is out of stock!`;
                this.notifyObservers(item, message);
            }
        }
    }   
}
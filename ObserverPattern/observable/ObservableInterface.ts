import { AbstractObserver } from "../observer/AbstractObserver";
import { Item } from "./Item";

type ItemQtyUpdateOperation = 'add' | 'remove';

export interface ObservableInterface {
    subscribe(item: Item, observer: AbstractObserver): string;

    unsubscribe(item: Item, observer: AbstractObserver): string;

    notifyObservers(item: Item, message: string): void;

    updateItem(operation: ItemQtyUpdateOperation, item: Item, qty: number): void;
}
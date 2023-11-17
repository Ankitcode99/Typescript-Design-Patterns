type ItemType = {
    name: string;
    qty: number;
}

export class Item {
    item: ItemType;

    constructor(item: ItemType){
        this.item = item;
    }

    addQty(qty: number): void {
        this.item.qty += qty;
    }

    removeQty(qty: number) : void{
        this.item.qty -= qty;
    }

    getQty(): number {
        return this.item.qty;
    }
}
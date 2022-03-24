import { ItemType } from "./item-type";

export class Item {
    _id: number | undefined = undefined;
    name: string = '';
    alias: string = '';
    type: ItemType = new ItemType();
    subtype: ItemType = new ItemType();
    description: string = '';
    effect: string = '';
    location: string = '';

    // Access propeties. Trust me I'm a scientist
    [key: string]: any;

    constructor() {

    }
}
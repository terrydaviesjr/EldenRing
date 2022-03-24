import { Item } from "./item";

export class Ash extends Item {
    hpCost: number = 0;
    fpCost: number = 0;
    special: boolean = false;
    legendary: boolean = false;

    constructor() {
        super();
    }
}
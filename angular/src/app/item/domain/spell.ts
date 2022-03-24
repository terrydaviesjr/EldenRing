import { Item } from "./item";

export class Spell extends Item {
    fpCost: number = 0;
    slots: number = 0;

    int: number = 0;
    fai: number = 0;
    arc: number = 0;

    constructor() {
        super();
    }
}
import { Item } from "./item";

export class Tool extends Item {
    
    fpCost: number = 0;

    strScaling: string = '';
    dexScaling: string = '';
    intScaling: string = '';
    faiScaling: string = '';
    arcScaling: string = '';

    constructor() {
        super();
    }
}
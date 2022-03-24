import { Item } from "./item";

export class Armor extends Item {
    weight: number = 0;
    
    // Damage Negation
    physical: number = 0;
    strike: number = 0;
    slash: number = 0;
    pierce: number = 0;
    magic: number = 0;
    fire: number = 0;
    lightning: number = 0;
    holy: number = 0;

    // Resistance
    immunity: number = 0;
    robustness: number = 0;
    focus: number = 0;
    vitality: number = 0;
    poise: number = 0;

    constructor() {
        super();
    }
}
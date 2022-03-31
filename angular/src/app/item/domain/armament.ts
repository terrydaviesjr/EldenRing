import { ArmamentSet } from "./armament-set";
import { StatScale } from "./enum/stat-scale";
import { Item } from "./item";

export class Armament extends Item {
    category: string = '';
    damageType: string = '';
    skill: string = '';
    skillFpCost: number = 0;
    weight: number = 0;

    // Requied Attributes
    str: number = 0;
    dex: number = 0;
    int: number = 0;
    fai: number = 0;
    arc: number = 0;
    
    special: boolean = false;
    legendary: boolean = false;

    stats: ArmamentSet = new ArmamentSet();

    constructor() {
        super();
    }
}
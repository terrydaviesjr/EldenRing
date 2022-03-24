import { Item } from "./item";

export class Armament extends Item {
    category: string = '';
    damageType: string = '';
    skill: string = '';
    skillFpCost: number = 0;
    weight: number = 0;

    // Attack Power
    apPhysical: number = 0;
    apMagic: number = 0;
    apFire: number = 0;
    apLightning: number = 0;
    apHoly: number = 0;
    apCritical: number = 0;
    sorcScaling: number = 0;
    incScaling: number = 0;

    // Guarded Damage Negation
    gdPhysical: number = 0;
    gdMagic: number = 0;
    gdFire: number = 0;
    gdLightning: number = 0;
    gdHoly: number = 0;
    guardBoost: number = 0;

    // Scaling
    strScaling: string = '';
    dexScaling: string = '';
    intScaling: string = '';
    faiScaling: string = '';
    arcScaling: string = '';

    // Requied Attributes
    str: number = 0;
    dex: number = 0;
    int: number = 0;
    fai: number = 0;
    arc: number = 0;

    constructor() {
        super();
    }
}
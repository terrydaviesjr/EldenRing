import { StatScale } from "./enum/stat-scale";

export class ArmamentStats {

    // Attack Power
    apPhysical: number = 0;
    apMagic: number = 0;
    apFire: number = 0;
    apLightning: number = 0;
    apHoly: number = 0;
    apCritical: number = 0;
    sorcScaling: number = 0;
    incScaling: number = 0;

    // Scaling
    strScaling: StatScale | null = null;
    dexScaling: StatScale | null = null;
    intScaling: StatScale | null = null;
    faiScaling: StatScale | null = null;
    arcScaling: StatScale | null = null;

    passive: string = '';

    // Guarded Damage Negation
    gdPhysical: number = 0;
    gdMagic: number = 0;
    gdFire: number = 0;
    gdLightning: number = 0;
    gdHoly: number = 0;
    guardBoost: number = 0;
}
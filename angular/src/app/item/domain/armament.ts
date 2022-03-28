import { ArmamentSet } from "./armament-set";
import { ArmamentStats } from "./armament-stats";
import { ArmamentPrefix } from "./enum/armament-prefix";
import { StatScale } from "./enum/stat-scale";
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
    strScaling: StatScale | null = null;
    dexScaling: StatScale | null = null;
    intScaling: StatScale | null = null;
    faiScaling: StatScale | null = null;
    arcScaling: StatScale | null = null;

    // Requied Attributes
    str: number = 0;
    dex: number = 0;
    int: number = 0;
    fai: number = 0;
    arc: number = 0;
    
    special: boolean = false;
    legendary: boolean = false;

    // baseStats: ArmamentStats = new ArmamentStats();

    stats: ArmamentSet = new ArmamentSet();

    constructor() {
        super();
    }

    initStats(): void {
        this.stats = new ArmamentSet(this.special);

        // if (!this.special) {
        //     this.stats = new Map<string, Map<number, ArmamentStats>>();

        //     Object.values(ArmamentPrefix).forEach((prefix, _index) => {
              
        //       let map: Map<number, ArmamentStats> = new Map<number, ArmamentStats>();
        
        //       for (let i = 0; i <= 24; i++) {
        //         map.set(i, new ArmamentStats());
        //       }
        
        //       this.stats.set(prefix, map);
        //     })

        //     console.log(this.stats.get('Standard')?.get(0));
        //     if (this.stats.get('Standard')?.get(0)) {
        //         // @ts-ignore
        //         this.stats.get('Standard').get(0).apCritical = 100;
        //     }
            
        // } else {
        //     console.log('SPECIAL WEAPON');
        // }
    }
}
import { ArmamentStats } from "./armament-stats"

export class ArmamentSet {
    standard: ArmamentStats[] = [];
    heavy: ArmamentStats[] = [];
    keen: ArmamentStats[] = [];
    quality: ArmamentStats[] = [];
    fire: ArmamentStats[] = [];
    flame: ArmamentStats[] = [];
    lightning: ArmamentStats[] = [];
    sacred: ArmamentStats[] = [];
    magic: ArmamentStats[] = [];
    cold: ArmamentStats[] = [];
    poison: ArmamentStats[] = [];
    blood: ArmamentStats[] = [];
    occult: ArmamentStats[] = [];

    constructor(special?: boolean) {
        if (!special) {
            for (let i = 0; i < 25; i++) {
                this.standard.push(new ArmamentStats);
                this.heavy.push(new ArmamentStats);
                this.keen.push(new ArmamentStats);
                this.quality.push(new ArmamentStats);
                this.fire.push(new ArmamentStats);
                this.flame.push(new ArmamentStats);
                this.lightning.push(new ArmamentStats);
                this.sacred.push(new ArmamentStats);
                this.magic.push(new ArmamentStats);
                this.cold.push(new ArmamentStats);
                this.poison.push(new ArmamentStats);
                this.blood.push(new ArmamentStats);
                this.occult.push(new ArmamentStats);
            }
        } else {
            for (let i = 0; i < 10; i++) {
                this.standard.push(new ArmamentStats);
            }
        }

    }
}
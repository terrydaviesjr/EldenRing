import { Item } from "./item";

export class AshOfWar extends Item {
    eligibleTypes: string = '';
    skill: string = '';
    affinity: string = '';

    constructor() {
        super();
        this.effect = 'Grants affinities and skills to an armament.';
    }
}
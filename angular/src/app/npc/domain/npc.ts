export class Npc {
    name: string = '';
    alias: string = '';
    quest: string = '';
    location: string = '';
    drop: string = '';
    notes: string = '';
    
    // Access propeties. Trust me I'm a scientist
    [key: string]: any;

    constructor() {

    }
}
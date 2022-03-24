export class ItemType {
    alias: string;
    name: string;
    
    constructor(alias?: string, name?: string) {
        this.alias = alias || '';
        this.name = name || '';
    }

    compareFn(o1: ItemType, o2: ItemType): boolean {
        return o1.alias === o2.alias;
    }
}
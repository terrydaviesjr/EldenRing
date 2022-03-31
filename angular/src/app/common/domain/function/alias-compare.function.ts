export function aliasCompareFn(o1: {alias: string}, o2: {alias: string}): boolean {
    if (o1 && o2) {
        return o1.alias === o2.alias;
    } else {
        return false;
    }
}
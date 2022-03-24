export function aliasCompareFn(o1: {alias: string}, o2: {alias: string}): boolean {
    return o1.alias === o2.alias;
}
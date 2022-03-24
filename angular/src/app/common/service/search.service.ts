import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  filter(results: any[], expression: any, sortOrders: any[] | undefined = undefined): any[] {
    let filteredResults: any[] = [];

    for (const index in results) {
      const result = results[index];
      let matches: boolean = true;
      const keys: string[] = this.getAllPropertyKeys(expression);

      for (const index in keys) {
        const key = keys[index];

        const testValue = this.getNestedPropertyValue(expression, key);
        const objectValue = this.getNestedPropertyValue(result, key);

        if (!this.matches(testValue, objectValue)) {
            matches = false;
            break;
        }
      }

      if (matches) {
        filteredResults.push(result);
      }

    }

    if (sortOrders && sortOrders.length > 0) {
      filteredResults = this.sort(filteredResults, sortOrders[0].field, sortOrders[0].asc);
    }

    return filteredResults;
  }

  getAllPropertyKeys(expression: any, prefix: string = ''): string[] {
    let keys: string[] = [];

    for (const property in expression) {
        const clause = expression[property];
        const fullKey = prefix ? prefix + '.' + property : property;
        
        if (typeof clause === 'object') {
            keys = keys.concat(this.getAllPropertyKeys(clause, fullKey));
        } else {
            keys.push(fullKey);
        }
    }
    return keys;
  }

  matches(testValue: any, objectValue: any): boolean {
    let matches = true;

    if (typeof testValue === 'boolean') {
        if (testValue !== objectValue) {
            matches = false;
        }
    } else if (testValue) {
      testValue = ('' + testValue).toLowerCase();
      if (('' + objectValue).toLowerCase().indexOf(testValue) == -1) {
          matches = false;
      }
    }

    return matches;
  }

  sort(array: any[], field: string, asc: boolean): any[] {
    if (field) {
        array.sort((obj1: any, obj2: any) => {
            const value1 = this.getNestedPropertyValue(obj1, field);
            const value2 = this.getNestedPropertyValue(obj2, field);

            if (value1 < value2) {
                if (asc) {
                    return -1;
                } else {
                    return 1;
                }
            } else if (value1 > value2) {
                if (asc) {
                    return 1;
                } else {
                    return -1;
                }
            } else {
                return 0;
            }
        });
    }

    return array;
  }

  getNestedPropertyValue(obj: any, nestedProperty: any) {
    const f = function(obj: any, i: number) {
        return obj != null && typeof obj === 'object' ? obj[i] : null;
    };

    return obj && nestedProperty ? nestedProperty.split('.').reduce(f, obj) : null;
  }
}

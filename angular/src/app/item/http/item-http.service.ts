import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../domain/item';

@Injectable({
  providedIn: 'root'
})
export class ItemHttpService {
  readonly apiPath: string = '/api/item';

  constructor(private httpClient: HttpClient) {}

  findItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.apiPath + '/findItems');
  }

  findItem(alias: string): Observable<Item> {
    return this.httpClient.get<Item>(this.apiPath + '/findItem/' + alias);
  }

  saveItem(item: Item): Observable<Item> {
    return this.httpClient.post<Item>(this.apiPath + '/saveItem', item);
  }

  searchItems(filter: string): Observable<Item[]> {
    filter = JSON.parse(filter);
    return this.httpClient.post<Item[]>(this.apiPath + '/searchItems', {filter: filter});
  }
}

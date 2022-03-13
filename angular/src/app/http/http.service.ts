import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../domain/item';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  readonly baseUrl: string = 'erServices';

  constructor(private httpClient: HttpClient) { }

  findItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.baseUrl + '/findItems');
  }

  findItem(alias: string): Observable<Item> {
    return this.httpClient.get<Item>(this.baseUrl + '/findItem/' + alias);
  }

  saveItem(item: Item): Observable<Item> {
    return this.httpClient.post<Item>(this.baseUrl + '/saveItem', item);
  }
}

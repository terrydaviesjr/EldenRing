import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from '../../domain/item';
import { ItemHttpService } from '../../http/item-http.service';

@Injectable({
  providedIn: 'root'
})
export class ItemResolverService implements Resolve<Item> {

  constructor(private httpService: ItemHttpService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item>|Promise<Item>|Item {
    return this.httpService.findItem(route.params['alias']);
  }
}

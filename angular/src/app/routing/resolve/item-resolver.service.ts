import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/domain/item';
import { HttpService } from 'src/app/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ItemResolverService implements Resolve<Item> {

  constructor(private httpService: HttpService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item>|Promise<Item>|Item {
    return this.httpService.findItem(route.params['alias']);
  }
}

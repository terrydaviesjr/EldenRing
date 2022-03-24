import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Npc } from '../../domain/npc';
import { NpcHttpService } from '../../http/npc-http.service';

@Injectable({
  providedIn: 'root'
})
export class NpcsResolverService implements Resolve<Npc[]> {

  constructor(private httpService: NpcHttpService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Npc[]>|Promise<Npc[]>|Npc[] {
    return this.httpService.findNpcs();
  }
}

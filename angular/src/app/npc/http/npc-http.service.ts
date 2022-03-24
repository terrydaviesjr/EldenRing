import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Npc } from '../domain/npc';

@Injectable({
  providedIn: 'root'
})
export class NpcHttpService {

  readonly apiPath: string = '/api/npc';

  constructor(private httpClient: HttpClient) {}

  findNpcs(): Observable<Npc[]> {
    return this.httpClient.get<Npc[]>(this.apiPath + '/findNpcs');
  }

  findNpc(alias: string): Observable<Npc> {
    return this.httpClient.get<Npc>(this.apiPath + '/findNpc/' + alias);
  }

  saveNpc(npc: Npc): Observable<Npc> {
    return this.httpClient.post<Npc>(this.apiPath + '/saveNpc', npc);
  }

  searchNpcs(filter: string): Observable<Npc[]> {
    filter = JSON.parse(filter);
    return this.httpClient.post<Npc[]>(this.apiPath + '/searchNpcs', {filter: filter});
  }
}

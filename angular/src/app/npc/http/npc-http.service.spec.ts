import { TestBed } from '@angular/core/testing';

import { NpcHttpService } from './npc-http.service';

describe('NpcHttpService', () => {
  let service: NpcHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpcHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

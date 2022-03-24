import { TestBed } from '@angular/core/testing';

import { NpcResolverService } from './npc-resolver.service';

describe('NpcResolverService', () => {
  let service: NpcResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpcResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

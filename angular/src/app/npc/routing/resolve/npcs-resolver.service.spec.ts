import { TestBed } from '@angular/core/testing';

import { NpcsResolverService } from './npcs-resolver.service';

describe('NpcsResolverService', () => {
  let service: NpcsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpcsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

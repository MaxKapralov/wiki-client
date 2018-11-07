import { TestBed, inject } from '@angular/core/testing';

import { EntityProxyService } from './entity-proxy.service';

describe('EntityProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntityProxyService]
    });
  });

  it('should be created', inject([EntityProxyService], (service: EntityProxyService) => {
    expect(service).toBeTruthy();
  }));
});

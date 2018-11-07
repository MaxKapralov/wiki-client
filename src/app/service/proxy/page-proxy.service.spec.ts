import { TestBed, inject } from '@angular/core/testing';

import { PageProxyService } from './page-proxy.service';

describe('PageProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageProxyService]
    });
  });

  it('should be created', inject([PageProxyService], (service: PageProxyService) => {
    expect(service).toBeTruthy();
  }));
});

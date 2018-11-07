import { TestBed, inject } from '@angular/core/testing';

import { NewUserProxyService } from './new-user-proxy.service';

describe('NewUserProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewUserProxyService]
    });
  });

  it('should be created', inject([NewUserProxyService], (service: NewUserProxyService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { SystemMessageService } from './system-message.service';

describe('SystemMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemMessageService]
    });
  });

  it('should be created', inject([SystemMessageService], (service: SystemMessageService) => {
    expect(service).toBeTruthy();
  }));
});

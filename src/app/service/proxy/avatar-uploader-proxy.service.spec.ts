import { TestBed, inject } from '@angular/core/testing';

import { AvatarUploaderProxyService } from './avatar-uploader-proxy.service';

describe('AvatarUploaderProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvatarUploaderProxyService]
    });
  });

  it('should be created', inject([AvatarUploaderProxyService], (service: AvatarUploaderProxyService) => {
    expect(service).toBeTruthy();
  }));
});

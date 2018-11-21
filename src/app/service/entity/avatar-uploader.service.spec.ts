import { TestBed, inject } from '@angular/core/testing';

import { AvatarUploaderService } from './avatar-uploader.service';

describe('AvatarUploaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvatarUploaderService]
    });
  });

  it('should be created', inject([AvatarUploaderService], (service: AvatarUploaderService) => {
    expect(service).toBeTruthy();
  }));
});

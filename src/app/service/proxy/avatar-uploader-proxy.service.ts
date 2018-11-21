import { Injectable } from '@angular/core';
import { AvatarUploaderService } from '../entity/avatar-uploader.service';

@Injectable({
  providedIn: 'root'
})
export class AvatarUploaderProxyService {

  constructor(private avatarUploaderService: AvatarUploaderService) { }

  upload(file: File, filename: string) {
    const data: FormData = new FormData();
    data.append('image', file, filename);
    this.avatarUploaderService.add(data).subscribe();
  }
}

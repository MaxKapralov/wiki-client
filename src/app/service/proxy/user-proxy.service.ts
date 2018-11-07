import { Injectable } from '@angular/core';
import { EntityProxyService } from './entity-proxy.service';
import { User } from '../../model/user';
import { UserService } from '../entity/user.service';
import { SystemMessageService } from '../system-message.service';
import { UserStorageService } from '../../auth/user-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProxyService extends EntityProxyService<User> {

  constructor(private userService: UserService, systemMessageService: SystemMessageService,
              private userStorageService: UserStorageService) {
    super(userService, systemMessageService);
  }
  getUser(): Observable<User> {
    return this.userService.getByUsername(this.userStorageService.getUser());
  }
}

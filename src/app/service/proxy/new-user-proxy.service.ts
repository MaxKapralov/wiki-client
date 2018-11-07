import { Injectable } from '@angular/core';
import { EntityProxyService } from './entity-proxy.service';
import { NewUser } from '../../model/new-user';
import { NewUserService } from '../entity/new-user.service';
import { SystemMessageService } from '../system-message.service';

@Injectable({
  providedIn: 'root'
})
export class NewUserProxyService extends EntityProxyService<NewUser> {

  constructor(newUserService: NewUserService, systemMessageService: SystemMessageService) {
    super(newUserService, systemMessageService);
  }
}

import { Injectable } from '@angular/core';
import { EntityService } from './entity.service';
import { NewUser } from '../../model/new-user';
import { HttpClient } from '@angular/common/http';
import { SystemMessageService } from '../system-message.service';

@Injectable({
  providedIn: 'root'
})
export class NewUserService extends EntityService<NewUser> {

  constructor(http: HttpClient, systemMessageService: SystemMessageService) {
    super(http, 'sign-up', systemMessageService);
  }
}

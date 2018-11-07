import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { EntityService } from './entity.service';
import { HttpClient } from '@angular/common/http';
import { SystemMessageService } from '../system-message.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService extends EntityService<User> {

  constructor(http: HttpClient, systemMessageService: SystemMessageService) {
    super(http, 'users', systemMessageService);
  }

  getByUsername(username: string) {
    return this.http.get(`${this.url}/findByUsername`, {
      params: {
        username: username
      }
    }).pipe(catchError(this.errorHandler()));
  }
}

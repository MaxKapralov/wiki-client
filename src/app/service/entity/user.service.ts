import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { EntityService } from './entity.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends EntityService<User> {

  constructor(http: HttpClient) {
    super(http, 'users');
  }

  getByUsername(username: string) {
    return this.http.get(`${this.url}/findByUsername`, {
      params: {
        username: username
      }
    });
  }
}

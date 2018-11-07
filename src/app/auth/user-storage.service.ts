import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor(private jwtHelperService: JwtHelperService, private tokenStorageService: TokenStorageService) {
  }
    getUser(): string {
    const token = this.tokenStorageService.getToken();
    return this.jwtHelperService.decodeToken(token)['sub'];
  }

}

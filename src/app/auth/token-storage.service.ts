import {Injectable} from '@angular/core';

const TOKEN_KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() {
  }

  deleteToken(): void {
    sessionStorage.removeItem(TOKEN_KEY);
  }

  saveToken(token: string): void {
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
}

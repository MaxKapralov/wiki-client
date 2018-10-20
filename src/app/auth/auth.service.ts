import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { environment } from '../environment';
export const AUTH_TOKEN_HEADER = 'Authorization';
export const AUTH_TOKEN_PREFIX = 'Bearer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = `${environment.apiUrl}/login`;
  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService, private jwtHelperService: JwtHelperService,
              private router: Router) {
  }

  attemptAuthentication(username: string, password: string): Observable<boolean> {
    return this.http.post(this.loginUrl, {username, password}, {observe: 'response'})
    .pipe(
      tap((response: HttpResponse<null>) => {
        const token = response.headers.get(AUTH_TOKEN_HEADER);
        if (token != null) {
          this.tokenStorageService.saveToken(token.replace(AUTH_TOKEN_PREFIX, ''));
        }
      }),
      map((response: HttpResponse<null>) => response.ok)
    );
  }

  isAuthenticated(): boolean {
    const token = this.tokenStorageService.getToken();
    return !this.jwtHelperService.isTokenExpired(token);
  }

  getTokenRoles(): string[] {
    if (this.isAuthenticated()) {
      const token = this.tokenStorageService.getToken();
      return this.jwtHelperService.decodeToken(token)['roles'];
    }
    throw new Error('Not Authenticated');
  }

  isAuthorized(...roles: string[]): boolean {
    if (this.isAuthenticated()) {
      const tokenRoles: string[] = this.getTokenRoles();
      return roles.length === 0 || roles.some(role => tokenRoles.includes(role));
    }
    return false;
  }

  getTokenSubject(): string {
    if (this.isAuthenticated()) {
      const token = this.tokenStorageService.getToken();
      return this.jwtHelperService.decodeToken(token)['sub'];
    }
    throw new Error('Not Authenticated');
  }

  signOut(): void {
    this.tokenStorageService.deleteToken();
    this.router.navigate(['login']);
  }
}

import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenStorageService} from './token-storage.service';
import {AUTH_TOKEN_PREFIX} from './auth.service';
import {environment} from '../environment';

@Injectable()
export class LoginRedirectService implements HttpInterceptor {

  constructor(private router: Router, private tokenStorageService: TokenStorageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === `${environment.apiUrl}/sign-up`) {
      return next.handle(req);
    }
    const authToken = this.tokenStorageService.getToken();
    const authReq = req.clone({ setHeaders: { Authorization: `${AUTH_TOKEN_PREFIX}${authToken}` } });
    return next.handle(authReq);
  }
  /*
  pipe(
      tap({
        error: (err) => {
          if (err instanceof HttpErrorResponse && [401, 403].includes(err.status)) {
            this.router.navigate(['login']);
          }
        }
      })
    )
   */
}

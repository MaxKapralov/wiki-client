import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './component/app.component';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './component/login/login.component';
import { environment } from './environment';
import { TokenStorageService } from './auth/token-storage.service';
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NewPageComponent } from './component/new-page/new-page.component';
import { LoginRedirectService } from './auth/login-redirect.service';
import { AllowedUsersComponent } from './component/allowed-users/allowed-users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewPageComponent,
    AllowedUsersComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    AppRoutingModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: (tokenStorageService) => ({
          tokenGetter: () => tokenStorageService.getToken(),
          whitelistedDomains: [environment.apiUrl]
        }),
        deps: [TokenStorageService]
      }
    }),
    ReactiveFormsModule,
    HttpClientModule,
      ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginRedirectService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { TokenInterceptorService } from './auth/token-interceptor.service';
import { SafeHtml } from './safe-html';
import { MyArticlesComponent } from './component/my-articles/my-articles.component';
import { LeftSidenavComponent } from './component/left-sidenav/left-sidenav.component';
import { ArticleComponent } from './component/article/article.component';
import { ParameterComponent } from './component/new-page/parameter/parameter.component';
import { SelectParameterComponent } from './component/new-page/select-parameter/select-parameter.component';
import { EditorComponent } from './component/new-page/editor/editor.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { AllowedToReadChipComponent } from './component/new-page/allowed-to-read-chip/allowed-to-read-chip.component';
import { EditPageComponent } from './component/edit-page/edit-page.component';
import { ArticleMenuComponent } from './component/my-articles/article-menu/article-menu.component';
import { PageFromHistoryComponent } from './component/article/page-from-history/page-from-history.component';
import { LoginRedirectService } from './auth/login-redirect.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewPageComponent,
    SafeHtml,
    MyArticlesComponent,
    LeftSidenavComponent,
    ArticleComponent,
    ParameterComponent,
    SelectParameterComponent,
    EditorComponent,
    RegistrationComponent,
    AllowedToReadChipComponent,
    EditPageComponent,
    ArticleMenuComponent,
    PageFromHistoryComponent,
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
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginRedirectService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ParameterComponent,
    SelectParameterComponent,
    PageFromHistoryComponent
  ]
})
export class AppModule { }

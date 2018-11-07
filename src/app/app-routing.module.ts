import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { NewPageComponent } from './component/new-page/new-page.component';
import { MyArticlesComponent } from './component/my-articles/my-articles.component';
import { ArticleComponent } from './component/article/article.component';
import { RegistrationComponent } from './component/registration/registration.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'new-page', component: NewPageComponent},
  { path: 'my-articles', component: MyArticlesComponent},
  { path: 'wiki/:link', component: ArticleComponent},
  { path: 'edit/:link', component: NewPageComponent},
  { path: 'sign-up', component: RegistrationComponent},
  { path: 'articles', component: MyArticlesComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

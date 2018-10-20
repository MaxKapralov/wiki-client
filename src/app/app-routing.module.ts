import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { NewPageComponent } from './component/new-page/new-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'new-page', component: NewPageComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

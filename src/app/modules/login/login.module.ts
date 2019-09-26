import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { Routes, RouterModule } from '@angular/router';

const userroutes: Routes = [
  {
    path: 'login',
    children: [
      { path: '', component: LoginPageComponent }
    ]
  }]

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule, RouterModule.forRoot(userroutes)
  ]
})
export class LoginModule { }

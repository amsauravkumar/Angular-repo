import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './modules/login/login.module';
import { FormsModule } from '@angular/forms';
import { ContactusModule } from './modules/contactus/contactus.module';
import { PostModule } from './modules/post/post.module';
import { TeamModule } from './modules/team/team.module';

const approutes : Routes = [
  {path:'', redirectTo :'home', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule , HomeModule, LoginModule, ContactusModule, PostModule, TeamModule, RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

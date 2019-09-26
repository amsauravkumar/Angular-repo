import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const homeroutes: Routes = [
  {
    path: 'home',
    children: [
      { path: '', component: HomePageComponent }
    ]
  }
]

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(homeroutes)
  ]
})
export class HomeModule { }

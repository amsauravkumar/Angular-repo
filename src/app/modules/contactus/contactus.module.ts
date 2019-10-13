import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';

const contactRoutes : Routes = [
  {path: 'contactus', component: ContactComponent}
]



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(contactRoutes)
  ]
})
export class ContactusModule { }

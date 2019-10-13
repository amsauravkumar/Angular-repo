import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { Routes, RouterModule } from '@angular/router';

const postRoutes : Routes = [
  {path: 'post', component: PostComponent}
]

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule, RouterModule.forRoot(postRoutes)
  ]
})
export class PostModule { }

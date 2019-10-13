import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { Routes, RouterModule } from '@angular/router';

const teamRoutes : Routes =[
  {path: 'team', component: TeamComponent}
];

@NgModule({
  declarations: [TeamComponent],
  imports: [
    CommonModule, RouterModule.forRoot(teamRoutes)
  ]
})
export class TeamModule { }

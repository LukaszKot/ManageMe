import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { BacklogPageComponent } from './backlog-page/backlog-page.component';

const routes: Routes = [
  { path: '', component: ProjectsListComponent },
  { path: ':project/backlog', component: BacklogPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

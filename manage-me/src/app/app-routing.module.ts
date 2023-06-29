import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { BacklogPageComponent } from './backlog-page/backlog-page.component';
import { AddFeaturePageComponent } from './add-feature-page/add-feature-page.component';
import { DisplayFeaturePageComponent } from './display-feature-page/display-feature-page.component';
import { EditFeaturePageComponent } from './edit-feature-page/edit-feature-page.component';

const routes: Routes = [
  { path: '', component: ProjectsListComponent },
  { path: ':project/backlog', component: BacklogPageComponent },
  { path: ':project/feature/add', component: AddFeaturePageComponent },
  { path: ':project/feature/:id', component: DisplayFeaturePageComponent },
  { path: ':project/feature/:id/edit', component: EditFeaturePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

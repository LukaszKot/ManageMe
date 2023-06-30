import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { BacklogPageComponent } from './backlog-page/backlog-page.component';
import { AddFeaturePageComponent } from './add-feature-page/add-feature-page.component';
import { DisplayFeaturePageComponent } from './display-feature-page/display-feature-page.component';
import { EditFeaturePageComponent } from './edit-feature-page/edit-feature-page.component';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { AddTasksPageComponent } from './add-tasks-page/add-tasks-page.component';
import { DisplayTaskPageComponent } from './display-task-page/display-task-page.component';
import { EditTaskPageComponent } from './edit-task-page/edit-task-page.component';

const routes: Routes = [
  { path: '', component: ProjectsListComponent },
  { path: ':project/backlog', component: BacklogPageComponent },
  { path: ':project/tasks', component: TasksPageComponent },
  { path: ':project/kanban', component: BacklogPageComponent },
  { path: ':project/feature/add', component: AddFeaturePageComponent },
  { path: ':project/tasks/add', component: AddTasksPageComponent },
  { path: ':project/feature/:id', component: DisplayFeaturePageComponent },
  { path: ':project/tasks/:id', component: DisplayTaskPageComponent },
  { path: ':project/feature/:id/edit', component: EditFeaturePageComponent },
  { path: ':project/tasks/:id/edit', component: EditTaskPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

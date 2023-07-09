import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from './pages/projects-list/projects-list.component';
import { BacklogPageComponent } from './pages/feature/backlog-page/backlog-page.component';
import { AddFeaturePageComponent } from './pages/feature/add-feature-page/add-feature-page.component';
import { TasksPageComponent } from './pages/task/tasks-page/tasks-page.component';
import { AddTasksPageComponent } from './pages/task/add-tasks-page/add-tasks-page.component';
import { DisplayTaskPageComponent } from './pages/task/display-task-page/display-task-page.component';
import { EditTaskPageComponent } from './pages/task/edit-task-page/edit-task-page.component';
import { KanbanPageComponent } from './pages/task/kanban-page/kanban-page.component';
import { DisplayFeaturePageComponent } from './pages/feature/display-feature-page/display-feature-page.component';
import { EditFeaturePageComponent } from './pages/feature/edit-feature-page/edit-feature-page.component';

const routes: Routes = [
  { path: '', component: ProjectsListComponent },
  { path: ':project/backlog', component: BacklogPageComponent },
  { path: ':project/tasks', component: TasksPageComponent },
  { path: ':project/kanban', component: KanbanPageComponent },
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

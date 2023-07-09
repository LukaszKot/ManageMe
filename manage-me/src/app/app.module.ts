import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsListComponent } from './pages/projects-list/projects-list.component';
import { BacklogPageComponent } from './pages/feature/backlog-page/backlog-page.component';
import { AddFeaturePageComponent } from './pages/feature/add-feature-page/add-feature-page.component';
import { FormsModule } from '@angular/forms';
import { TasksPageComponent } from './pages/task/tasks-page/tasks-page.component';
import { AddTasksPageComponent } from './pages/task/add-tasks-page/add-tasks-page.component';
import { DisplayTaskPageComponent } from './pages/task/display-task-page/display-task-page.component';
import { EditTaskPageComponent } from './pages/task/edit-task-page/edit-task-page.component';
import { KanbanPageComponent } from './pages/task/kanban-page/kanban-page.component';
import { DisplayFeaturePageComponent } from './pages/feature/display-feature-page/display-feature-page.component';
import { EditFeaturePageComponent } from './pages/feature/edit-feature-page/edit-feature-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    BacklogPageComponent,
    AddFeaturePageComponent,
    DisplayFeaturePageComponent,
    EditFeaturePageComponent,
    TasksPageComponent,
    AddTasksPageComponent,
    DisplayTaskPageComponent,
    EditTaskPageComponent,
    KanbanPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

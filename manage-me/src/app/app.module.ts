import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { BacklogPageComponent } from './backlog-page/backlog-page.component';
import { AddFeaturePageComponent } from './add-feature-page/add-feature-page.component';
import { FormsModule } from '@angular/forms';
import { DisplayFeaturePageComponent } from './display-feature-page/display-feature-page.component';
import { EditFeaturePageComponent } from './edit-feature-page/edit-feature-page.component';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { AddTasksPageComponent } from './add-tasks-page/add-tasks-page.component';
import { DisplayTaskPageComponent } from './display-task-page/display-task-page.component';
import { EditTaskPageComponent } from './edit-task-page/edit-task-page.component';
import { KanbanPageComponent } from './kanban-page/kanban-page.component';

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

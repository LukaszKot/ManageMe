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

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    BacklogPageComponent,
    AddFeaturePageComponent,
    DisplayFeaturePageComponent,
    EditFeaturePageComponent
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

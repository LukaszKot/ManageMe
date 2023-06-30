import { Component, OnInit } from '@angular/core';
import { Feature, Priority, State } from '../models/Feature';
import { ApiService } from '../api.service';
import { ProjectsService } from '../services/projects.service';
import { Router } from '@angular/router';
import { Task } from '../models/Task';
import { Location } from '@angular/common'

@Component({
  selector: 'app-add-tasks-page',
  templateUrl: './add-tasks-page.component.html',
  styleUrls: ['./add-tasks-page.component.scss']
})
export class AddTasksPageComponent implements OnInit {
  priorities = [Priority.High, Priority.Medium, Priority.Low];
  features: Feature[] = [];
  Priority = Priority
  model = new Task('', '', Priority.High, State.Todo, 0, new Date(), 0);

  onSubmit() {
    this.apiService.addTask(this.model)
      .subscribe((o) => this.router.navigate([`${this.projectService.project.code}/tasks/${o.id}`]))
  }
  constructor(public projectService: ProjectsService, private apiService: ApiService, private router: Router, private location: Location) { }
  ngOnInit(): void {
    this.apiService.getFeatures()
      .subscribe((o) => {
        this.features = o
        this.model.featureId = this.features[0]?.id ?? 0;
      }
      );
  }

  goBack() {
    this.location.back();
  }
}

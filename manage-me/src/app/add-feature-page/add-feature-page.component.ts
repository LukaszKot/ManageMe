import { Component } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Priority, Feature, State } from '../models/Feature';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-feature-page',
  templateUrl: './add-feature-page.component.html',
  styleUrls: ['./add-feature-page.component.scss']
})
export class AddFeaturePageComponent {
  priorities = [Priority.High, Priority.Medium, Priority.Low];
  Priority = Priority
  model = new Feature('', '', Priority.High, State.Todo);

  onSubmit() {
    this.apiService.addFeature(this.model)
      .subscribe((o) => this.router.navigate([`${this.projectService.project.code}/feature/${o.id}`]))
  }
  constructor(public projectService: ProjectsService, private apiService: ApiService, private router: Router) { }
}

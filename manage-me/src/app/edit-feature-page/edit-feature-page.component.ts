import { Component, OnInit } from '@angular/core';
import { Feature, Priority, State } from '../models/Feature';
import { ProjectsService } from '../services/projects.service';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-feature-page',
  templateUrl: './edit-feature-page.component.html',
  styleUrls: ['./edit-feature-page.component.scss']
})
export class EditFeaturePageComponent implements OnInit {
  priorities = [Priority.High, Priority.Medium, Priority.Low];
  Priority = Priority
  model = new Feature('', '', Priority.High, State.Todo);

  onSubmit() {
    this.apiService.updateFeature(this.model)
      .subscribe((o) => this.router.navigate([`${this.projectService.project.code}/feature/${this.model.id}`]))
  }
  constructor(public projectService: ProjectsService, private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.apiService.getFeature(+this.route.snapshot.paramMap.get('id')!)
      .subscribe(x => this.model = x);
  }
}

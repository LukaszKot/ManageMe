import { Component, OnInit } from '@angular/core';
import { Feature, Priority, State } from '../models/Feature';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../models/Project';
import { ProjectsService } from '../services/projects.service';
import { Location } from '@angular/common'
import { Task } from '../models/Task';

@Component({
  selector: 'app-display-feature-page',
  templateUrl: './display-feature-page.component.html',
  styleUrls: ['./display-feature-page.component.scss']
})
export class DisplayFeaturePageComponent implements OnInit {
  ngOnInit(): void {
    this.apiService.getFeature(+this.route.snapshot.paramMap.get('id')!)
      .subscribe(x => this.model = x);
    this.project = this.projectService.project;
  }
  model?: Feature;
  project?: Project

  Priority = Priority;
  State = State;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private projectService: ProjectsService, private router: Router, private location: Location) {
  }

  update() {
    this.router.navigate([`${this.project?.getFeatureLink(this.model?.id!)}/edit`])
  }

  delete() {
    this.apiService.deleteFeature(+this.route.snapshot.paramMap.get('id')!)
      .subscribe(() => this.router.navigate([this.project?.getBacklogLink()]));
  }

  goBack() {
    this.location.back();
  }
}

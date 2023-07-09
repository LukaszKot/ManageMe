import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Feature, Priority, State } from '../../../models/Feature';
import { ProjectsService } from '../../../services/projects.service';
import { Project } from '../../../models/Project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backlog-page',
  templateUrl: './backlog-page.component.html',
  styleUrls: ['./backlog-page.component.scss']
})
export class BacklogPageComponent implements OnInit {
  features: Feature[] = [];
  project?: Project;
  Priority = Priority;
  State = State;
  constructor(private apiService: ApiService, private projectService: ProjectsService, private router: Router) { }
  ngOnInit(): void {
    this.apiService.getFeatures()
      .subscribe(x => this.features = x);
    this.project = this.projectService.project
  }

  addNew() {
    this.router.navigate([`${this.project?.code}/feature/add`])
  }
}

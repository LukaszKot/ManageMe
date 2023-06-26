import { Component } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/Project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {

  private project?: Project;

  private projectsService: ProjectsService;
  constructor(projectsService: ProjectsService) {
    this.projectsService = projectsService;
  }

  getProject() {
    if (!this.project) {
      this.project = this.projectsService.project;
      return this.project;
    }
    else {

      return this.project;
    }
  }
}

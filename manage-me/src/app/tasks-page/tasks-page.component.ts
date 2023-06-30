import { Component } from '@angular/core';
import { Feature, Priority, State } from '../models/Feature';
import { Project } from '../models/Project';
import { ApiService } from '../api.service';
import { ProjectsService } from '../services/projects.service';
import { Router } from '@angular/router';
import { Task } from '../models/Task';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent {
  tasks: Task[] = [];
  project?: Project;
  Priority = Priority;
  State = State;
  constructor(private apiService: ApiService, private projectService: ProjectsService, private router: Router) { }
  ngOnInit(): void {
    this.apiService.getTasks()
      .subscribe(x => this.tasks = x);
    this.project = this.projectService.project
  }

  addNew() {
    this.router.navigate([`${this.project?.code}/tasks/add`])
  }
}

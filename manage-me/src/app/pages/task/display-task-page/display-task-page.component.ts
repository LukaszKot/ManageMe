import { Component } from '@angular/core';
import { Feature, Priority, State } from '../../../models/Feature';
import { Project } from '../../../models/Project';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { ProjectsService } from '../../../services/projects.service';
import { Task } from '../../../models/Task';

@Component({
  selector: 'app-display-task-page',
  templateUrl: './display-task-page.component.html',
  styleUrls: ['./display-task-page.component.scss']
})
export class DisplayTaskPageComponent {
  ngOnInit(): void {
    this.apiService.getTask(+this.route.snapshot.paramMap.get('id')!)
      .subscribe(x => {
        this.model = x
        this.model.createdOn = new Date(this.model.createdOn);
        this.model.startedOn = this.model.startedOn != undefined ? new Date(this.model.startedOn) : undefined;
        this.model.endedOn = this.model.endedOn != undefined ? new Date(this.model.endedOn) : undefined;
        this.apiService.getFeature(this.model.featureId)
          .subscribe(x => { this.feature = x })
      });
    this.project = this.projectService.project;
  }
  model?: Task;
  feature?: Feature;
  project?: Project

  Priority = Priority;
  State = State;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private projectService: ProjectsService, private router: Router) {
  }

  update() {
    this.router.navigate([`${this.project?.getTaskLink(this.model?.id!)}/edit`])
  }

  delete() {
    this.apiService.deleteTask(+this.route.snapshot.paramMap.get('id')!)
      .subscribe(() => this.router.navigate(['/TLIP/tasks']));
  }
}

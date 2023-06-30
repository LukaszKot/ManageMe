import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Priority, Feature, State } from '../models/Feature';
import { ProjectsService } from '../services/projects.service';
import { Task } from '../models/Task';
import { Location } from '@angular/common'

@Component({
  selector: 'app-edit-task-page',
  templateUrl: './edit-task-page.component.html',
  styleUrls: ['./edit-task-page.component.scss']
})
export class EditTaskPageComponent {
  priorities = [Priority.High, Priority.Medium, Priority.Low];
  Priority = Priority
  model = new Task('', '', Priority.High, State.Todo, 0, new Date(), 0);
  features: Feature[] = [];

  onSubmit() {
    this.apiService.updateTask(this.model)
      .subscribe((o) => this.router.navigate([`${this.projectService.project.code}/tasks/${this.model.id}`]))
  }
  constructor(public projectService: ProjectsService, private apiService: ApiService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.apiService.getTask(+this.route.snapshot.paramMap.get('id')!)
      .subscribe(x => this.model = x);
    this.apiService.getFeatures()
      .subscribe((o) => {
        this.features = o
      }
      );
  }

  goBack() {
    this.location.back();
  }
}

import { Component } from '@angular/core';
import { Task } from '../../../models/Task';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { Feature, Priority, State } from '../../../models/Feature';
import { Project } from '../../../models/Project';
import { ProjectsService } from '../../../services/projects.service';
import { UserService } from '../../../services/user.service';
import { finalize, of, switchMap } from 'rxjs';


interface TasksPerState {
  todo: Task[],
  doing: Task[],
  done: Task[],
}


@Component({
  selector: 'app-kanban-page',
  templateUrl: './kanban-page.component.html',
  styleUrls: ['./kanban-page.component.scss']
})
export class KanbanPageComponent {
  tasks?: TasksPerState;
  project?: Project;
  Priority = Priority;
  State = State;
  constructor(private apiService: ApiService, private projectService: ProjectsService, private router: Router, private userService: UserService) { }
  ngOnInit(): void {
    this.refreshTasks();
    this.project = this.projectService.project
  }

  moveToInProgress(id: number) {
    let task = this.tasks?.todo.find(x => x.id == id);
    task!.assignedUser = `${this.userService.user.name} ${this.userService.user.surname}`;
    task!.startedOn = new Date();
    task!.state = State.Doing;
    this.apiService.updateTask(task!)
      .pipe(
        switchMap(() => {
          return this.apiService.getFeature(task!.featureId)
        }
        ),
        switchMap((feature: Feature) => {
          if (feature.state != State.Doing && feature.tasks.filter(x => x.state == State.Doing).length > 0) {
            feature.state = State.Doing;
            return this.apiService.updateFeature(feature)
          }
          return of();
        }),
        finalize(() => {
          this.refreshTasks()
        })
      )
      .subscribe(() => { });
  }

  moveToEnded(id: number) {
    let task = this.tasks?.doing.find(x => x.id == id);
    task!.assignedUser = `${this.userService.user.name} ${this.userService.user.surname}`;
    task!.endedOn = new Date();
    task!.state = State.Done;
    this.apiService.updateTask(task!)
      .pipe(
        switchMap(() => this.apiService.getFeature(task!.featureId)),
        switchMap((feature: Feature) => {
          if (feature.state != State.Done && feature.tasks.filter(x => x.state != State.Done).length === 0) {
            feature.state = State.Done;
            return this.apiService.updateFeature(feature)
          }
          return of();
        }),
        finalize(() => {
          this.refreshTasks()
        })
      )
      .subscribe(() => { });
  }

  private refreshTasks() {
    this.apiService.getTasks()
      .subscribe(tasks => {
        this.tasks = {
          todo: tasks.filter(x => x.state == State.Todo),
          doing: tasks.filter(x => x.state == State.Doing),
          done: tasks.filter(x => x.state == State.Done)
        }
      });
  }
}

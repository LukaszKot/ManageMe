import { Injectable } from '@angular/core';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  project: Project;

  constructor() {
    this.project = new Project("The Lorem Ipsum Project", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus auctor eros, ullamcorper pulvinar mauris vulputate nec.", "TLIP");
  }
}

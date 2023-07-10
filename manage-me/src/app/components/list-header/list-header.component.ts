import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/Project';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent {
  @Input({ required: true })
  project!: Project
}

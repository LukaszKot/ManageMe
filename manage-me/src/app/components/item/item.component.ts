import { Component, Input } from '@angular/core';
import { State } from 'src/app/models/Feature';
import { Item } from 'src/app/models/Item';
import { Project } from 'src/app/models/Project';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  State = State

  @Input({ required: true })
  item!: Item;
  @Input({ required: true })
  project!: Project;
}

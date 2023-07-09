import { Component } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent {

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}

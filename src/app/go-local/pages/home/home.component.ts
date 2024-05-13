import { Component } from '@angular/core';

@Component({
  selector: 'gl-home-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isRotated: boolean = false;
  isCollapsed: boolean = true;

  rotateChevron() {
    this.isRotated = !this.isRotated;
    this.isCollapsed = !this.isCollapsed;
  }
}

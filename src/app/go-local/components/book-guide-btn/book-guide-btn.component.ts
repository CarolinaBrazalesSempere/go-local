import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-book-guide-btn',
  templateUrl: './book-guide-btn.component.html',
  styleUrls: ['./book-guide-btn.component.css'],
})
export class BookGuideBtnComponent {
  @Input() routerLink: any[] | string | null = null;
}

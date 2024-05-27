import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gl-book-guide-btn',
  templateUrl: './book-guide-btn.component.html',
  styleUrls: ['./book-guide-btn.component.css'],
})
export class BookGuideBtnComponent {
  @Input() idGuia!: number;

  constructor(private router: Router) {}

  goToFichaGuia(): void {
    console.log(this.idGuia);
    this.router.navigateByUrl(`/ficha-guia/${this.idGuia}`);
  }
}

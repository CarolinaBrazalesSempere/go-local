import { Component, Input } from '@angular/core';
import { Reseña } from 'src/app/go-local/interfaces/Reseña';

@Component({
  selector: 'shared-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css'],
})
export class OpinionComponent {
  @Input() reviews!: Reseña;

  ngOnInit() {
    console.log(this.reviews); // Verifica que aquí se están recibiendo los datos correctamente
  }
}

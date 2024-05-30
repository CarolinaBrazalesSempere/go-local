import { Component, Input } from '@angular/core';

import { Reseña } from 'src/app/go-local/interfaces/Reseña';


@Component({
  selector: 'shared-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css'],
})
export class OpinionComponent {
  @Input()
  reviews!: Reseña;
}

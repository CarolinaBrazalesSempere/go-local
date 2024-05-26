import { Component, Input } from '@angular/core';
import { Itinerario } from 'src/app/go-local/interfaces/itinerario';

@Component({
  selector: 'shared-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
  @Input()
  sobreMi: string = '';
  @Input()
  itinerario!: Itinerario;

}

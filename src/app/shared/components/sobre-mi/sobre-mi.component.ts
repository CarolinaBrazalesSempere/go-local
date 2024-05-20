import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
  @Input()
  sobreMi: string = ''

}

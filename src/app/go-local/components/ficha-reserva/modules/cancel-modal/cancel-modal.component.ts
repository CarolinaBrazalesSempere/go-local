import { Component, ElementRef, ViewChild } from '@angular/core';
import { CancelModalService } from '../../services/cancel-modal.service';

@Component({
  selector: 'app-cancel-modal',
  templateUrl: './cancel-modal.component.html',
  styleUrls: ['./cancel-modal.component.css']
})
export class CancelModalComponent {

  @ViewChild('faqsModal') modalElement!: ElementRef;

  constructor(private cancelModalService: CancelModalService) { }

  ngOnInit() {
    this.cancelModalService.showModal$.subscribe(() => {
      if (this.modalElement) {
        (this.modalElement.nativeElement as HTMLElement).classList.add('show');
      }
    });
  }


}

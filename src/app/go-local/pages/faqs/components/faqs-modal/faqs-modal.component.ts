import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { FaqsModalService } from '../../services/faqs-modal.service';

@Component({
  selector: 'app-faqs-modal',
  templateUrl: './faqs-modal.component.html',
  styleUrls: ['./faqs-modal.component.css'],
})
export class FaqsModalComponent implements OnInit {
  @ViewChild('faqsModal') modalElement!: ElementRef;

  constructor(private faqsModalService: FaqsModalService) {}

  ngOnInit() {
    this.faqsModalService.showModal$.subscribe(() => {
      if (this.modalElement) {
        (this.modalElement.nativeElement as HTMLElement).classList.add('show');
      }
    });
  }
}

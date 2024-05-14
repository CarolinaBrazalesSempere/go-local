import { Component, ViewChild } from '@angular/core';
import { FaqsModalService } from '../../services/faqs-modal.service';

@Component({
  selector: 'app-faqs-page',
  templateUrl: './faqs-page.component.html',
  styleUrls: ['./faqs-page.component.css']
})
export class FaqsPageComponent {

  constructor(private faqsModalService: FaqsModalService) { }

  openModal() {
    this.faqsModalService.showModal();
  }
}

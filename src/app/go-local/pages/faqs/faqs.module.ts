import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqsPageComponent } from './components/faqs-page/faqs-page.component';
import { FaqsModalComponent } from './components/faqs-modal/faqs-modal.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FaqsModalComponent,
    FaqsPageComponent
  ],
  declarations: [
    FaqsModalComponent,
    FaqsPageComponent
  ],
  providers: [],
})
export class FaqsModule { }

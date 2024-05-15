import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchBoxComponent } from './components/search-box/components/search-box.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavBarComponent,
    SearchBoxComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavBarComponent,
    SearchBoxComponent,
    FooterComponent,
  ],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GlCardGuidesComponent } from './components/gl-card-guides/gl-card-guides.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FaqsModule } from './pages/faqs/faqs.module';

@NgModule({
  declarations: [
    GlCardGuidesComponent,
     HomeComponent,
    ],
  imports: [
    CommonModule,
    RouterModule,
    FaqsModule,
    SharedModule,
  ],
  exports: [
    GlCardGuidesComponent,
    HomeComponent,
  ],
})
export class GoLocalModule {}

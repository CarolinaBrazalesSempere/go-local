import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GlCardGuidesComponent } from './components/gl-card-guides/gl-card-guides.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CardPostComponent } from './components/card-post/card-post.component';

@NgModule({
  declarations: [GlCardGuidesComponent, HomeComponent, CardPostComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [GlCardGuidesComponent, HomeComponent],
})
export class GoLocalModule {}

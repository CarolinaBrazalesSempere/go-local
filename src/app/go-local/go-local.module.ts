import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FaqsModule } from './pages/faqs/faqs.module';
import { SharedModule } from '../shared/shared.module';

import { BookGuideBtnComponent } from './components/book-guide-btn/book-guide-btn.component';
import { CardGuideDestinationComponent } from './components/card-guide-destination/card-guide-destination.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { ErrorComponent } from './pages/error/error.component';
import { GlCardGuidesComponent } from './components/gl-card-guides/gl-card-guides.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchByDestinationComponent } from './pages/search-by-destination/search-by-destination.component';
import { ItinerarioListComponent } from './components/itinerario-list/itinerario-list.component';


@NgModule({
  declarations: [
    BookGuideBtnComponent,
    CardGuideDestinationComponent,
    CardPostComponent,
    ErrorComponent,
    GlCardGuidesComponent,
    HomeComponent,
    SearchByDestinationComponent,
    ItinerarioListComponent
  ],

  imports: [
    CommonModule,
    FaqsModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    GlCardGuidesComponent,
    HomeComponent,
  ],
})
export class GoLocalModule {}

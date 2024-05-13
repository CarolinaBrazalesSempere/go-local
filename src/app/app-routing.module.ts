import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './go-local/pages/home/home.component';
import { SearchByDestinationComponent } from './go-local/pages/search-by-destination/search-by-destination.component';
import { ErrorComponent } from './go-local/pages/error/error.component';
import { BlogPageComponent } from './go-local/pages/blog/blog-pages.component';
import { FaqsPageComponent } from './go-local/pages/faqs/components/faqs-page/faqs-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'faqs',
    component: FaqsPageComponent,
  },
  {
    path: 'blog',
    component: BlogPageComponent,
  },
  {
    path: 'destinations',
    component: SearchByDestinationComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

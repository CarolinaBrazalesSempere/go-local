import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './go-local/pages/home/home.component';
import { FaqsComponent } from './go-local/pages/faqs/faqs.component';
import { BlogComponent } from './go-local/pages/blog/blog.component';
import { SearchByDestinationComponent } from './go-local/pages/search-by-destination/search-by-destination.component';
import { ErrorComponent } from './go-local/pages/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'faqs',
    component: FaqsComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
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

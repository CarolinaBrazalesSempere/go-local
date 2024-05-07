import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './go-local/pages/home/home.component';
import { BlogComponent } from './go-local/pages/blog/blog.component';
import { FaqsPageComponent } from './go-local/pages/faqs/components/faqs-page/faqs-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'faqs',
    component: FaqsPageComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

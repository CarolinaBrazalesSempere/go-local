import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './go-local/pages/home/home.component';
import { FaqsComponent } from './go-local/pages/faqs/faqs.component';
import { BlogComponent } from './go-local/pages/blog/blog.component';
import { FichaGuiaComponent } from './go-local/pages/ficha-guia/ficha-guia.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
    path: 'ficha-guia',
    component: FichaGuiaComponent,
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './go-local/pages/home/home.component';
import { FaqsComponent } from './go-local/pages/faqs/faqs.component';
import { BlogComponent } from './go-local/pages/blog/blog.component';
import { LoginComponent } from './go-local/pages/login/login.component';

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
    path: 'login',
    component: LoginComponent,
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

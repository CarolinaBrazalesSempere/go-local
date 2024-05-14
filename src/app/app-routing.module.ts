import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './go-local/pages/home/home.component';
import { SignupComponent } from './go-local/pages/signup/signup.component';
import { PerfilUsuarioComponent } from './go-local/pages/perfil-usuario/perfil-usuario.component';
import { LoginComponent } from './go-local/pages/login/login.component';
import { FichaGuiaComponent } from './go-local/pages/ficha-guia/ficha-guia.component';
import { ArticuloComponent } from './go-local/pages/articulo/articulo.component';
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
    path: 'articulo',
    component: ArticuloComponent,
  },
  {
    path: 'ficha-guia',
    component: FichaGuiaComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'perfil-usuario',
    component: PerfilUsuarioComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticuloComponent } from './go-local/pages/articulo/articulo.component';
import { BlogPageComponent } from './go-local/pages/blog/components/blog-pages.component';
import { ErrorComponent } from './go-local/pages/error/error.component';
import { FaqsPageComponent } from './go-local/pages/faqs/components/faqs-page/faqs-page.component';
import { FichaGuiaComponent } from './go-local/pages/ficha-guia/ficha-guia.component';
import { HomeComponent } from './go-local/pages/home/home.component';
import { LoginComponent } from './go-local/pages/login/login.component';
import { PerfilUsuarioComponent } from './go-local/pages/perfil-usuario/components/perfil-usuario.component';
import { SearchByDestinationComponent } from './go-local/pages/search-by-destination/search-by-destination.component';
import { SignupComponent } from './go-local/pages/signup/components/signup.component';
import { authGuard } from './go-local/auth.guard';

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
    canActivate: [authGuard],
  },
  {
    path: 'articulo/:idPost',
    component: ArticuloComponent,
  },
  {
    path: 'ficha-guia/:idGuia',
    component: FichaGuiaComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'perfil-usuario/:idUser',
    component: PerfilUsuarioComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
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

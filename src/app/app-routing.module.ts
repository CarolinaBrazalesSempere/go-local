import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticuloComponent } from './go-local/pages/articulo/articulo.component';
import { BlogPageComponent } from './go-local/pages/blog/components/blog-pages.component';
import { ErrorComponent } from './go-local/pages/error/error.component';
import { FaqsPageComponent } from './go-local/pages/faqs/components/faqs-page/faqs-page.component';
import { FichaGuiaComponent } from './go-local/pages/ficha-guia/ficha-guia.component';
import { HomeComponent } from './go-local/pages/home/home.component';
import { LoginComponent } from './go-local/pages/login/components/login.component';
import { PerfilUsuarioComponent } from './go-local/pages/perfil-usuario/perfil-usuario.component';
import { SearchByDestinationComponent } from './go-local/pages/search-by-destination/search-by-destination.component';
import { SignupComponent } from './go-local/pages/signup/signup.component';
import { PublicarRutaComponent } from './go-local/pages/publicar-ruta/publicar-ruta.component';

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
    path: 'articulo/:idPost',
    component: ArticuloComponent,
  },
  {
    path: 'ficha-guia/:idGuia',
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
    path: 'publicar-ruta',
    component: PublicarRutaComponent,
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

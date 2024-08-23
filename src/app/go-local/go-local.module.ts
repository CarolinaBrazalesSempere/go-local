import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { FaqsModule } from './pages/faqs/faqs.module';
import { HomeComponent } from './pages/home/home.component';
import { SearchByDestinationComponent } from './pages/search-by-destination/search-by-destination.component';
import { ErrorComponent } from './pages/error/error.component';
import { FichaGuiaComponent } from './pages/ficha-guia/ficha-guia.component';
import { LoginComponent } from './pages/login/login.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { BlogPageComponent } from './pages/blog/components/blog-pages.component';
import { SignupComponent } from './pages/signup/components/signup.component';
import { CardGuideDestinationComponent } from './components/card-guide-destination/card-guide-destination.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { GlCardGuidesComponent } from './components/gl-card-guides/gl-card-guides.component';
import { FichaReservaComponent } from './components/ficha-reserva/ficha-reserva.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/components/perfil-usuario.component';


@NgModule({
  declarations: [
    ArticuloComponent,
    BlogPageComponent,
    CardGuideDestinationComponent,
    CardPostComponent,
    ErrorComponent,
    FichaGuiaComponent,
    FichaReservaComponent,
    GlCardGuidesComponent,
    HomeComponent,
    LoginComponent,
    SearchByDestinationComponent,
    SignupComponent,
    PerfilUsuarioComponent
  ],

  imports: [
    CommonModule,
    FaqsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    GlCardGuidesComponent,
    HomeComponent,
  ],
})
export class GoLocalModule {}

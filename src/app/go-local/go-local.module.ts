import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GlCardGuidesComponent } from './components/gl-card-guides/gl-card-guides.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CardPostComponent } from './components/card-post/card-post.component';
import { SearchByDestinationComponent } from './pages/search-by-destination/search-by-destination.component';
import { ErrorComponent } from './pages/error/error.component';
import { CardGuideDestinationComponent } from './components/card-guide-destination/card-guide-destination.component';
import { BookGuideBtnComponent } from './components/book-guide-btn/book-guide-btn.component';

import { FaqsModule } from './pages/faqs/faqs.module';
import { FichaGuiaComponent } from './pages/ficha-guia/ficha-guia.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';

@NgModule({
  declarations: [
    GlCardGuidesComponent,
    HomeComponent,
    CardPostComponent,
    SearchByDestinationComponent,
    ErrorComponent,
    CardGuideDestinationComponent,
    BookGuideBtnComponent,
    FichaGuiaComponent,
    LoginComponent,
    PerfilUsuarioComponent,
    ArticuloComponent,
  ],

  imports: [CommonModule, RouterModule, FaqsModule, SharedModule],
  exports: [GlCardGuidesComponent, HomeComponent],
})
export class GoLocalModule {}

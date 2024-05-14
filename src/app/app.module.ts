import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPageComponent } from './go-local/pages/blog/blog-pages.component';
import { SharedModule } from './shared/shared.module';
import { GoLocalModule } from './go-local/go-local.module';
import { PerfilUsuarioComponent } from './go-local/pages/perfil-usuario/perfil-usuario.component';
import { LoginComponent } from './go-local/pages/login/login.component';
import { FichaGuiaComponent } from './go-local/pages/ficha-guia/ficha-guia.component';

@NgModule({
  declarations: [AppComponent, BlogPageComponent,ArticuloComponent, FichaGuiaComponent, LoginComponent, PerfilUsuarioComponent],
  imports: [SharedModule, BrowserModule, AppRoutingModule, GoLocalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

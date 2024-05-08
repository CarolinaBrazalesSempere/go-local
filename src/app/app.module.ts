import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './go-local/pages/blog/blog.component';
import { FaqsComponent } from './go-local/pages/faqs/faqs.component';

import { SharedModule } from './shared/shared.module';
import { GoLocalModule } from './go-local/go-local.module';
import { FichaGuiaComponent } from './go-local/pages/ficha-guia/ficha-guia.component';

@NgModule({
  declarations: [AppComponent, BlogComponent, FaqsComponent, FichaGuiaComponent],
  imports: [SharedModule, BrowserModule, AppRoutingModule, GoLocalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

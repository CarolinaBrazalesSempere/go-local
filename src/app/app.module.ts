import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPageComponent } from './go-local/pages/blog/blog-pages.component';

import { SharedModule } from './shared/shared.module';
import { GoLocalModule } from './go-local/go-local.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BlogPageComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    GoLocalModule,
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}

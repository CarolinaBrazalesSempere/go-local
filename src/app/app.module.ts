import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { GoLocalModule } from './go-local/go-local.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    GoLocalModule,
    SharedModule,
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}

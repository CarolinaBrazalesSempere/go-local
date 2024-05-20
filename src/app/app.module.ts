import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoLocalModule } from './go-local/go-local.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [SharedModule, BrowserModule, AppRoutingModule, GoLocalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

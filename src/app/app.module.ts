import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoLocalModule } from './go-local/go-local.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent,],
  imports: [
    AppRoutingModule,
    BrowserModule,
    GoLocalModule,
    SharedModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

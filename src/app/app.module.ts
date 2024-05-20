import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoLocalModule } from './go-local/go-local.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationGuard } from './go-local/pages/login/guards/authentication.guard';


@NgModule({
  declarations: [AppComponent],
  imports: [SharedModule, BrowserModule, AppRoutingModule, GoLocalModule],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}

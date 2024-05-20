import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchBoxComponent } from './components/search-box/components/search-box.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OpinionComponent } from './components/opinion/opinion.component';
import { TarjetaGuiaComponent } from './components/tarjeta-guia/tarjeta-guia.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';

@NgModule({
  declarations: [
    NavBarComponent,
    SearchBoxComponent,
    FooterComponent,
    OpinionComponent,
    TarjetaGuiaComponent,
    SobreMiComponent,
  ],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, RouterModule],
  exports: [
    NavBarComponent,
    SearchBoxComponent,
    FooterComponent,
    OpinionComponent,
    TarjetaGuiaComponent,
    SobreMiComponent,
  ],
})
export class SharedModule {}

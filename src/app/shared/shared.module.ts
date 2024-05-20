import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchBoxComponent } from './components/search-box/components/search-box.component';
import { FooterComponent } from './components/footer/footer.component';
import { OpinionComponent } from './components/opinion/opinion.component';
import { TarjetaGuiaComponent } from './components/tarjeta-guia/tarjeta-guia.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
    OpinionComponent,
    SearchBoxComponent,
    SobreMiComponent,
    TarjetaGuiaComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    FooterComponent,
    NavBarComponent,
    OpinionComponent,
    SearchBoxComponent,
    SobreMiComponent,
    TarjetaGuiaComponent,
  ],
})
export class SharedModule {}

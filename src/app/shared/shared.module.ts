import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OpinionComponent } from './components/opinion/opinion.component';
import { SearchBoxComponent } from './components/search-box/components/search-box.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { TarjetaGuiaComponent } from './components/tarjeta-guia/tarjeta-guia.component';


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

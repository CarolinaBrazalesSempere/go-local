import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { FooterComponent } from './components/footer/footer.component';
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
  imports: [CommonModule, RouterModule],
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

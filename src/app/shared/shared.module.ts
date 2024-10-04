import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BackComponent } from './back/back.component';
import { CountryCardComponent } from './country-card/country-card.component';
import { HeaderComponent } from './header/header.component';
import { RegionFilterComponent } from './region-filter/region-filter.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    CountryCardComponent,
    RegionFilterComponent,
    BackComponent,
  ],
  imports: [FormsModule, CommonModule, FontAwesomeModule],
  exports: [
    HeaderComponent,
    SearchComponent,
    CountryCardComponent,
    RegionFilterComponent,
    BackComponent,
  ],
})
export class SharedModule {}

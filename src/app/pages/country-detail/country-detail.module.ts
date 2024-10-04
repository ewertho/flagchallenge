import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {} from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../shared/shared.module';
import { CountryDetailComponent } from './country-detail-page/country-detail-page.component';

@NgModule({
  declarations: [CountryDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: CountryDetailComponent }]),
  ],
  exports: [CountryDetailComponent],
})
export class CountryDetailModule {}

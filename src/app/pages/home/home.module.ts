import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,

    HomeRoutingModule,
    SharedModule, // Rota da página inicial
  ],
  exports: [HomePageComponent],
})
export class HomeModule {}

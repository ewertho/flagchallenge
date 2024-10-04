import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'country-detail/:numericCode',
    loadChildren: () =>
      import('./pages/country-detail/country-detail.module').then(
        (m) => m.CountryDetailModule
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redireciona para a Home em caso de rota não encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from '../../../services/country.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  countries: any[] = [];
  filteredCountries: any[] = [];
  searchQuery: string = '';
  selectedRegion: string = '';

  constructor(private countryService: CountryService, private router: Router) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getAllCountries().subscribe(
      (data) => {
        this.countries = data;
        this.filteredCountries = data; // Exibir todos os países inicialmente
      },
      (error) => {
        console.error('Erro ao carregar países', error);
      }
    );
  }

  onSearch(query: string): void {
    this.searchQuery = query;
    this.filterCountries();
  }

  onRegionChange(region: string): void {
    this.selectedRegion = region;
    this.filterCountries();
  }

  // Método atualizado para lidar com o valor "All"
  filterCountries(): void {
    this.filteredCountries = this.countries.filter((country) => {
      const matchesRegion =
        this.selectedRegion === 'All' || this.selectedRegion === ''
          ? true
          : country.region === this.selectedRegion;

      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(this.searchQuery.toLowerCase());

      return matchesRegion && matchesSearch;
    });
  }

  goToCountryDetail(numericCode: string): void {
    this.router.navigate(['/country-detail', numericCode]);
  }
}

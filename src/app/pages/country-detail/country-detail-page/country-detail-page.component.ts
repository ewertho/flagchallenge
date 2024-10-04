import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../../services/country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail-page.component.html',
  styleUrls: ['./country-detail-page.component.scss'],
})
export class CountryDetailComponent implements OnInit {
  country: any;
  borderCountries: any[] = [];

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const countryCode = params.get('numericCode');
      if (countryCode) {
        this.getCountryDetails(countryCode);
      }
    });
  }

  getCurrencyName(): string {
    if (this.country && this.country.currencies) {
      const currency: any = Object.values(this.country.currencies).find(
        (curr: any) => curr.name
      );
      return currency ? currency.name : 'Unknown';
    }
    return 'Unknown';
  }

  getLanguages(): string {
    if (this.country && this.country.languages) {
      return Object.values(this.country.languages).join(', ');
    }
    return 'Unknown';
  }

  getCountryDetails(code: string): void {
    this.countryService.getCountryByCode(code).subscribe(
      (data) => {
        this.country = data[0]; // Dados do país
        this.getBorderCountries(this.country.borders);
      },
      (error) => {
        console.error('Erro ao carregar detalhes do país', error);
      }
    );
  }

  getBorderCountries(borders: string[]): void {
    if (borders.length > 0) {
      this.countryService.getCountriesByCodes(borders).subscribe(
        (data) => {
          this.borderCountries = data;
        },
        (error) => {
          console.error('Erro ao carregar países de fronteira', error);
        }
      );
    }
  }

  navigateToCountry(code: string): void {
    this.router.navigate(['/country-detail', code]);
  }
}

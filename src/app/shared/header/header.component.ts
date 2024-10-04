import { Component } from '@angular/core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = 'Where in the World ?';
  faMoon = faMoon;
  isDarkTheme = false;

  constructor(private themeService: ThemeService) {
    // Verifica o tema atual ao inicir o componente
    this.isDarkTheme = this.themeService.isDarkMode();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isDarkTheme = !this.isDarkTheme; // Atualiza
  }
}

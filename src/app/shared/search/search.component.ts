import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() searchQuery = '';
  @Output() searchQueryChange = new EventEmitter<string>();
  @Output() searchEvent = new EventEmitter<string>();

  faSearch = faSearch;
  onSearch(): void {
    this.searchQueryChange.emit(this.searchQuery); // Atualiza a ligação
    this.searchEvent.emit(this.searchQuery); // Emoite  valor para busca
  }
}

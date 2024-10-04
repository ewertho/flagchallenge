import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-region-filter',
  templateUrl: './region-filter.component.html',
  styleUrls: ['./region-filter.component.scss'],
})
export class RegionFilterComponent {
  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  @Output() regionChange = new EventEmitter<string>();

  onRegionSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.regionChange.emit(selectElement.value);
  }
}

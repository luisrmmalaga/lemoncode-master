import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Input()
  value: string = '';

  label: string = 'Buscar';

  placeholder: string = 'Buscar...';

  @Output()
  clickInIcon: EventEmitter<string> = new EventEmitter();

  onClick() {
    this.value = 'New value';
    this.clickInIcon.emit(this.value);
  }
}

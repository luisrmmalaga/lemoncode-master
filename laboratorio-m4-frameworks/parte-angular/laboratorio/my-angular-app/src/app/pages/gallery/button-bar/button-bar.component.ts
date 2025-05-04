import { Component, Input } from '@angular/core';
import { Button } from './button.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button-bar',
  imports: [MatButtonModule],
  templateUrl: './button-bar.component.html',
  styleUrl: './button-bar.component.scss',
})
export class ButtonBarComponent {
  @Input()
  buttons: Button[] = [];
}

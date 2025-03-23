import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './common/layout/footer/footer.component';
import { SideMenuComponent } from './common/layout/side-menu/side-menu.component';
import { HeaderComponent } from './common/layout/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, SideMenuComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-angular-app';
}

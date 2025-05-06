import { Component, computed, inject, Signal, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MenuItem, privateMenuItems, publicMenuItems } from './menu-items';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-side-menu',
  imports: [MatListModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  private authService: AuthService = inject(AuthService);

  navItems: Signal<MenuItem[]> = computed(() =>
    this.authService.isLogged() ? privateMenuItems : publicMenuItems
  );
}

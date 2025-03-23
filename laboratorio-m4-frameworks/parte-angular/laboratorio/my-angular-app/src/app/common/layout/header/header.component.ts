import { Component, computed, inject, Signal } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  headerEndVisible: Signal<boolean> = computed(() =>
    this.authService.isLogged()
  );

  userLogged: Signal<string> = computed(() => this.authService.getUsername());

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}

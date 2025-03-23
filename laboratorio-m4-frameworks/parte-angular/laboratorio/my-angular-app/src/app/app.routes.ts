import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  {
    path: 'public',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login.component').then((c) => c.LoginComponent),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about.component').then((c) => c.AboutComponent),
      },
    ],
  },
  {
    path: 'private',
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },
      {
        path: 'gallery',
        loadComponent: () =>
          import('./pages/gallery/gallery.component').then(
            (c) => c.GalleryComponent
          ),
      },
      {
        path: 'crud',
        loadComponent: () =>
          import('./pages/users/crud/crud.component').then(
            (c) => c.CrudComponent
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/profile/profile.component').then(
            (c) => c.ProfileComponent
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'public',
  },
];

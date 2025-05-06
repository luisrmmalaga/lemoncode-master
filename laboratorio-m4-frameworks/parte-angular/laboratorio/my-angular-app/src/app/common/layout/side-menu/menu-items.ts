export interface MenuItem {
  name: string;
  route: string;
}

export const publicMenuItems: MenuItem[] = [
  {
    name: 'Home',
    route: 'public/home',
  },
  {
    name: 'Login',
    route: 'public/login',
  },
  {
    name: 'About',
    route: 'public/about',
  },
];

export const privateMenuItems: MenuItem[] = [
  {
    name: 'Dashboard',
    route: '/private/dashboard',
  },
  {
    name: 'Gallery',
    route: '/private/gallery',
  },
  {
    name: 'Crud',
    route: '/private/crud',
  },
  {
    name: 'Profile',
    route: '/private/profile',
  },
];

import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../common/services/auth/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);

  if (inject(AuthService).isLogged()) {
    return true;
  } else {
    router.navigate(['/public']);
    return false;
  }
};

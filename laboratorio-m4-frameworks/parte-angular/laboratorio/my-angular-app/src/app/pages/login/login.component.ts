import { Component, computed, inject, Signal } from '@angular/core';
import {
  FormControl,
  FormControlOptions,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../common/services/auth/auth.service';
import { User } from '../../common/services/auth/users.model';
import { Router } from '@angular/router';
import { NotificationService } from '../../common/services/notification/notification.service';
import { NotificationType } from '../../common/services/notification/notification.model';

interface Field {
  label: string;
  inputId: string;
  formControlName: string;
  type: string;
}

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  notificationService: NotificationService = inject(NotificationService);

  private readonly formControlCommonOptions: FormControlOptions = {
    nonNullable: true,
    validators: Validators.required,
  };

  readonly loginFields: Field[] = [
    {
      label: 'Username',
      inputId: 'login-form-username',
      formControlName: 'username',
      type: 'text',
    },
    {
      label: 'Password',
      inputId: 'login-form-password',
      formControlName: 'password',
      type: 'password',
    },
  ];

  readonly loginForm = new FormGroup({
    username: new FormControl('', this.formControlCommonOptions),
    password: new FormControl('', this.formControlCommonOptions),
  });

  hidePassword: boolean = true;

  checkCredentials($event: SubmitEvent): void {
    $event.preventDefault();
    const isLogged = this.authService.login(this.loginForm.value as User);

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    if (isLogged) {
      this.router.navigate(['/private']);
    } else {
      this.notificationService.showNotification(
        'Invalid credentials',
        NotificationType.Error
      );
    }
  }

  changePasswordVisibility($event: Event): void {
    this.hidePassword = !this.hidePassword;
  }

  getFieldType(field: Field): string {
    if (field.formControlName === 'username') {
      return 'text';
    }

    return this.hidePassword ? 'password' : 'text';
  }
}

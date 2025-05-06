import { inject, Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {
  NotificationPanelOptions,
  NotificationType,
  panelClasses,
} from './notification.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private snackBar = inject(MatSnackBar);

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 5;

  constructor() {}

  showNotification(
    message: string,
    type: NotificationType,
    options?: NotificationPanelOptions
  ): void {
    this.snackBar.open(message, '', {
      horizontalPosition:
        options?.horizontalPosition ?? this.horizontalPosition,
      verticalPosition: options?.verticalPosition ?? this.verticalPosition,
      duration: (options?.durationInSeconds ?? this.durationInSeconds) * 1000,
      panelClass: panelClasses[type],
    });
  }
}

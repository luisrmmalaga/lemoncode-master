import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

export enum NotificationType {
  Error,
  Success,
  Info,
}

export const panelClasses = {
  [NotificationType.Error]: 'error-notification',
  [NotificationType.Success]: 'success-notification',
  [NotificationType.Info]: 'info-notification',
};

export interface NotificationPanelOptions {
  horizontalPosition?: MatSnackBarHorizontalPosition;
  verticalPosition?: MatSnackBarVerticalPosition;
  durationInSeconds?: number;
}

import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SystemMessageService {
  config: MatSnackBarConfig;
  constructor(private snackBar: MatSnackBar) {
    this.config = new MatSnackBarConfig();
    this.config.duration = 5000;
  }
  show(message: string) {
    this.snackBar.open(message, '', this.config);
  }
}

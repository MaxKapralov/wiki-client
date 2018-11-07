import { AbstractControl } from '@angular/forms';

export class PasswordValidator {
  static matchPassword(control: AbstractControl) {
    const password = control.get('password').value;
    const confirmPassword = control.get('passwordConfirmation').value;
    if (password !== confirmPassword) {
      control.get('passwordConfirmation').setErrors({matchPasswords: true});
    }
    return null;
  }
}

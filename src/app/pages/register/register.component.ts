import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { NotificationService } from 'src/app/@shared';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'rad-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public registrationForm: FormGroup;
  public isSubmitting = false;

  constructor(
    public faIconLibrary: FaIconLibrary,
    private _authSrv: AuthService,
    private _notification: NotificationService,
    private _router: Router,
  ) {
    faIconLibrary.addIcons(faGoogle, faFacebook);
  }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  public registerEmail(): void {
    if (this.registrationForm.valid) {
      this.isSubmitting = true;
      this._authSrv.doRegisterByEmail(this.registrationForm.value)
        .then(result => this.doAfterRegistered(result))
        .catch(error => this.catchRegistrationError(error));
    }
  }

  private doAfterRegistered(response: any): void {    
    const subject = response.user.displayName || response.user.email;
    this._notification.default(`You are now registered in as ${subject}`, 5000, 'close');

    setTimeout(() => {
      this.isSubmitting = false;
      this._router.navigate(['/login']);
    }, 1000);
  }

  private catchRegistrationError(error: Error): void {
    this._notification.error(error.message);
    this.isSubmitting = false;
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get emailErrorMessage() {
    return this.email.hasError('email')
      ? 'Not a valid email'
      : 'Email is required!';
  }

  get passwordErrorMessage() {
    return this.password.hasError('minlength')
      ? 'Minimum 8 characters'
      : 'Password is required!';
  }
}

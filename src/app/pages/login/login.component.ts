import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from 'src/app/services';
import { NotificationService } from 'src/app/@shared';

@Component({
  selector: 'rad-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public isSubmitting = false;

  constructor(
    public faIconLibrary: FaIconLibrary,
    private _authSrv: AuthService,
    private _notification: NotificationService,
    private _router: Router,
  ) {
    faIconLibrary.addIcons(faGoogle, faFacebook)
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }

  public loginWithGoogle(): void {
    this.isSubmitting = true;

    this._authSrv.doGoogleLogin()
      .then(result => this.doAfterLoggedIn(result))
      .catch(error => this.catchLoginError(error))
  }

  public loginWithFacebook(): void {
    this.isSubmitting = true;

    this._authSrv.doFacebookLogin()
      .then(result => this.doAfterLoggedIn(result))
      .catch(error => this.catchLoginError(error))
  }

  public loginWithEmail(): void {
    this.isSubmitting = true;

    if (this.loginForm.valid) {
      this._authSrv.doLoginByEmail(this.loginForm.value)
        .then(result => this.doAfterLoggedIn(result))
        .catch(error => this.catchLoginError(error));
    }
  }

  private doAfterLoggedIn(response: any): void {
    const subject = response.user.displayName || response.user.email;
    this._notification.success(`You are now logged in as ${subject}`);

    setTimeout(() => {
      this.isSubmitting = false;
      this._router.navigate(['/']);
    }, 1000);
  }

  private catchLoginError(error: Error): void {
    this._notification.error(error.message);
    this.isSubmitting = false;
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get emailErrorMessage() {
    return this.email.hasError('email') ? 'Not a valid email' : 'Email is required!';
  }

  get passwordErrorMessage() {
    return this.password.hasError('required') ? 'Password is required!' : '';
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'rad-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    public faIconLibrary: FaIconLibrary,
  ) {
    faIconLibrary.addIcons(faGoogle, faFacebook)
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
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

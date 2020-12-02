import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'rad-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registrationForm: FormGroup;

  constructor(
    public faIconLibrary: FaIconLibrary,
  ) {
    faIconLibrary.addIcons(faGoogle, faFacebook)
  }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get emailErrorMessage() {
    return this.email.hasError('email') ? 'Not a valid email' : 'Email is required!';
  }

  get passwordErrorMessage() {
    return this.password.hasError('required') ? 'Password is required!' : '';
  }

}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { default as firebase } from 'firebase/app';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: Observable<firebase.User>;

  constructor(private _afAuth: AngularFireAuth) {
    this.currentUser = this._afAuth.authState;
  }

  public doFacebookLogin(): Promise<any> {
    return this.loginBySocialAccount(new firebase.auth.FacebookAuthProvider());
  }

  public doGoogleLogin(): Promise<any> {
    return this.loginBySocialAccount(new firebase.auth.GoogleAuthProvider())
  }

  public loginBySocialAccount(provider: any): Promise<any> {
    return new Promise<any>((resolve, reject) => this._afAuth
      .signInWithPopup(provider)
      .then(result => resolve(result))
      .catch(error => {
        console.log(error);
        reject(error);
      })
    )
  }

  public doLoginByEmail({ email, password }): Promise<any> {
    return new Promise((resolve, reject) => firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => resolve(result))
      .catch(error => {
        console.log(error);
        reject(error);
      })
    )
  }

  public doRegisterByEmail({ email, password }): Promise<any> {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(result => resolve(result))
        .catch(error => {
          console.log(error);
          reject(error);
        })
    })
  }

  public logout(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._afAuth.signOut()
        .then(result => resolve(result))
        .catch(error => {
          console.log(error);
          reject(error);
        })
    })
  }

}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { default as firebase } from 'firebase/app';

import { User } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user$: Observable<firebase.User>;

  constructor(
    private _afAuth: AngularFireAuth,
    private _afs: AngularFirestore,
    private _router: Router,
  ) {
    this.user$ = this._afAuth.authState.pipe(
      switchMap((user) => user
        ? this._afs.doc<User>(`users/${user.uid}`).valueChanges()
        : of(null)
      ));
  }

  public async googleSignIn(): Promise<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this._afAuth.signInWithPopup(provider);

    await this.updateUserData(credential.user);
    return this._router.navigate(['/']);
  }

  public async facebookSignIn(): Promise<any> {
    const provider = new firebase.auth.FacebookAuthProvider();
    const credential = await this._afAuth.signInWithPopup(provider);

    await this.updateUserData(credential.user);
    return this._router.navigate(['/']);
  }

  public async emailSignIn({ email, password }): Promise<any> {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return this._router.navigate(['/']);
  }

  public async emailSignUp({ email, password }): Promise<any> {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await this.updateUserData(result.user);
    return this._router.navigate(['/login']);
  }

  public async signOut(): Promise<any> {
    await this._afAuth.signOut();
    return this._router.navigate(['/']);
  }

  private updateUserData(user: firebase.User): Promise<void> {
    const userRef: AngularFirestoreDocument<User> = this._afs.doc(
      `users/${user.uid}`
    );
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
      isAnonymous: user.isAnonymous,
      photoUrl: user.photoURL,
    };
    return userRef.set(data, { merge: true });
  }
}

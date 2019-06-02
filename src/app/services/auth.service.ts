import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth:AngularFireAuth
  ) { }

  login(email:string, password:string) {
    return new Promise((resolve, reject)=> {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
        err => reject(err));
    })
  }

  logout() {
    this.afAuth.auth.signOut(); 
  }

  getAuth() {
    return this.afAuth.authState;
  }

  register(email:string, password:string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),
      err => reject(err));

    });
  }
}

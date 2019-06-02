import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    authState:any = null;
    
    constructor(
        public afAuth:AngularFireAuth,
        private router:Router
    ) {
        this.afAuth.authState.subscribe(auth => {
            
            this.authState = auth;
            
    });
    }
    
    
    canActivate():Observable<boolean> {

        
       if(this.authState !== null) {
           console.log('canActivate:true');
                      
           return of(true);
       } else {
        
        this.router.navigate(['/login']);
        console.log('canActivate:false');
        return of(false);
       }
       
      
    }

   
    
}

import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  email:string;
  password:string;

  constructor(
    private authService:AuthService,
    public router:Router,
    private _fmService:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.email, this.password).then(
      (res) => {
        this._fmService.show('User registered', { cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this._fmService.show(err.message, { cssClass: 'alert-danger', timeout: 4000 });
        this.router.navigate(['/register']);
      })
      ;
  }
}

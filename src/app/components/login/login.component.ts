import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;

  constructor(
    private authService:AuthService,
    private router:Router,
    private _flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.email, this.password).then(
      (res) => {
        this._flashMessagesService.show('You are logged in', { cssClass: 'alert-success', timeout: 4000});
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this._flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 4000});
        this.router.navigate(['/login']);
      })
  }

}

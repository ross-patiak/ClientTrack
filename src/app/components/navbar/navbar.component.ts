import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { SettingsService } from '../../services/settings.service';
import { Settings } from 'src/app/models/Settings';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:boolean;
  loggedInUser:string;
  allowRegistration:boolean;

  constructor(
    private authService:AuthService,
    private router:Router,
    private fmService:FlashMessagesService,
    public settingsService:SettingsService

  ) { }

  ngOnInit() {
    
    this.authService.getAuth().subscribe(auth => {
      if(auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
        console.log(this.loggedInUser);
      } else {
        this.isLoggedIn = false;
      }

      this.allowRegistration = this.settingsService.getSettings().allowRegistration;
      
    });
  }

  onLogoutClick() {
    this.authService.logout();
    
    this.isLoggedIn = false;

    this.fmService.show('You are logged out', {cssClass: 'alert-success', timeout: 4000});
    this.router.navigate(['/login']);

  }
}

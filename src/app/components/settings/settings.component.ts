import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Settings } from '../../models/Settings';
import { SettingsService } from '../../services/settings.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings:Settings;

  constructor(
    public settingsService:SettingsService,
    public fmService:FlashMessagesService,
    public router:Router
  ) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
  }

  onSubmit() {
    this.settingsService.changeSettings(this.settings);
    this.fmService.show('Settings saved', {cssClass: 'alert-success', timeout: 4000});
    this.router.navigate(['/settings']);
  }

}

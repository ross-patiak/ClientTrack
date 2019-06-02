import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';
import { SettingsService } from '../../services/settings.service';

import { Client } from '../../models/Client';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id:string;
  client:Client;
  disableBalanceOnEdit:boolean = true;

  constructor(
    public clientService:ClientService,
    public router:Router,
    public route:ActivatedRoute,
    public fmService:FlashMessagesService,
    public settingsService:SettingsService
  ) { }

  ngOnInit() {

    this.disableBalanceOnEdit = this.settingsService.getSettings().disableBalanceOnEdit;

    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).valueChanges().subscribe(client => {
      this.client = client;
    });
  }

  onSubmit({value, valid}:{value:Client, valid:boolean}) {
    if(this.disableBalanceOnEdit) {
      value.balance = '0';
    }
    
    if(!valid) { 
      this.fmService.show('Fill in all fields', {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['/edit-client/' + this.id]);
    } else {
      this.clientService.updateClient(this.id,value);
      this.fmService.show('Client updated', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/client/'+ this.id]);
    }
  }

}

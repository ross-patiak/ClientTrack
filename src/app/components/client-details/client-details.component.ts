import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id:string;
  client:Client;
  hasBalance:boolean;
  showBalanceUpdateInput:boolean = false;

  constructor(
    public clientService:ClientService,
    public router:Router,
    public route:ActivatedRoute,
    public fmService:FlashMessagesService
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).valueChanges().subscribe(client => {

      if(client.balance > 0) {
        this.hasBalance = true;
      }

      this.client = client;
    });
  }

  updateBalance() {
    this.clientService.updateClient(this.id, this.client);
    this.fmService.show('Balance Updated', { cssClass: 'alert-success', timeout: 4000});
    this.router.navigate(['/client/' + this.id]);

  }

  onDeleteClick() {
    if(confirm('Do you want to delete this client?')) {
      this.clientService.deleteClient(this.id);
      this.fmService.show('Client deleted', { cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/']);
    }
  }
}

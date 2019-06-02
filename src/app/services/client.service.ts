import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from '../models/Client';

@Injectable()
export class ClientService {
  clients:AngularFireList<any>;
  client:AngularFireObject<any>;

  constructor(
    public af:AngularFireDatabase
  ) { 
    this.clients = this.af.list<Client>('/clients');
  }

  getClients() {
    return this.clients;
  }

  newClient(value:Client) {
    this.clients.push(value);
  }

  getClient(id:string) {
    this.client = this.af.object<Client>('/clients/'+id);
    return this.client;
  }

  updateClient(id:string, client:Client) {
    return this.clients.update(id, client);
  }

  deleteClient(id:string) {
    this.clients.remove(id);
  }
}

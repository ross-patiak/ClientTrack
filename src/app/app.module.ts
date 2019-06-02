import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages'

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { ClientService } from './services/client.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { SettingsService } from './services/settings.service';

export const firebaseConfig = {
    apiKey: "AIzaSyCnDa4Z9MZL5h8kIG_jXEmAiqnisX9kxjI",
    authDomain: "clientpanel-16fb5.firebaseapp.com",
    databaseURL: "https://clientpanel-16fb5.firebaseio.com",
    storageBucket: "clientpanel-16fb5.appspot.com",
    messagingSenderId: "489853577956" 
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FlashMessagesModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService,
    FlashMessagesService,
    AuthService,
    AuthGuard,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

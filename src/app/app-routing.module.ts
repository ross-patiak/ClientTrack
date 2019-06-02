import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { AuthGuard } from './guards/auth.guard';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate:[AuthGuard] },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add-client', component: AddClientComponent, canActivate:[AuthGuard]},
  {path: 'client/:id', component: ClientDetailsComponent, canActivate: [AuthGuard] },
  {path: 'edit-client/:id', component: EditClientComponent, canActivate: [AuthGuard] },
  {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  {path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }

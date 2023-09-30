import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserAshboardComponent } from './pages/user-ashboard/user-ashboard.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MainAdminPageComponent } from './admin/main-admin-page/main-admin-page.component';
import { ManagerUsersComponent } from './admin/manager-users/manager-users.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'user',
component: MainPageComponent,
children : [
  {path: '', redirectTo : 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: UserAshboardComponent},
  {path: 'my-transaction', component: TransactionComponent},
  {path: 'my-contact-list', component: ContactsComponent},
  {path: 'new-contact', component: NewContactComponent},
  {path: 'new-contact/:idContact', component: NewContactComponent},
  {path: 'new-transaction', component: NewTransactionComponent},
  {path: 'profile', component: ProfileComponent},
  
]
},

{path: 'admin',
component: MainAdminPageComponent,
children: [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: AdminDashboardComponent},
  {path: 'customers', component : ManagerUsersComponent},
  {path: 'profile', component: ProfileComponent}

]

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

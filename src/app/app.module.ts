import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserAshboardComponent } from './pages/user-ashboard/user-ashboard.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ManagerUsersComponent } from './admin/manager-users/manager-users.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    UserAshboardComponent,
    TransactionComponent,
    ContactsComponent,
    NewTransactionComponent,
    NewContactComponent,
    ProfileComponent,
    ManagerUsersComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

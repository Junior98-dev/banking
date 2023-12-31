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
import { MainAdminPageComponent } from './admin/main-admin-page/main-admin-page.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http'
import { HttpInterceptorService } from './service/http-interceptor/http-interceptor.service';
import { FormsModule } from '@angular/forms';
import { ConfirmRegisterComponent } from './pages/confirm-register/confirm-register.component';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { NgChartsModule } from 'ng2-charts';
import { DpDatePickerModule } from 'ng2-date-picker';



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
    MainPageComponent,
    MainAdminPageComponent,
    AdminDashboardComponent,
    ConfirmRegisterComponent,
    AccessDeniedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
    DpDatePickerModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

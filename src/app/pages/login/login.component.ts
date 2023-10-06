import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationRequest } from 'src/app/service/models';
import { AuthenticationControllerService } from 'src/app/service/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  authRequest: AuthenticationRequest = {};
  errorMessages: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationControllerService
  ){}
   
  ngOnInit(): void {
    
  }

  login(){
    this.errorMessages = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (data) => {
        localStorage.setItem('token', data.token as string);
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(data.token as string);
        if(decodedToken.authorities[0].authority === 'ROLE_ADMIN'){
          this.router.navigate(['admin/dashboard']);
        }else{
          this.router.navigate(['user/dashboard']);
        }
      },
      error: (err) => {
        console.log(err);
        this.errorMessages.push(err.error.errorMessage);
      }
    });
  }

}

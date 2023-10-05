import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/service/models';
import { AuthenticationControllerService } from 'src/app/service/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  userDto: UserDto = {
    email: '',
    firstname: '',
    lastname: '',
    password: ''
  }

  errorMessages: Array<string> = [];

  constructor(private authService: AuthenticationControllerService){}

  ngOnInit(): void {
      
  }
  register(){
    this.errorMessages = [];
    this.authService.register({
      body: this.userDto
    }
    ).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        this.errorMessages = err.error.validationErrors;
        
      }
    })
  }
}

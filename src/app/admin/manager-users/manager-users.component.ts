import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/service/models';
import { UserControllerService } from 'src/app/service/services';

@Component({
  selector: 'app-manager-users',
  templateUrl: './manager-users.component.html',
  styleUrls: ['./manager-users.component.scss']
})
export class ManagerUsersComponent implements OnInit{
  
  customers: Array<UserDto> = [];
  showInactiveUserOnly = false;
  
  constructor(
    private userService: UserControllerService

  ){}

  ngOnInit(): void {
    this.findAllCustomers();
  }
  private findAllCustomers(){
    this.userService.findAll()
    .subscribe({
      next: (value) => {
        this.customers = value;
      }
    });
  }

  filterCustomers(){
    if(this.showInactiveUserOnly){
      this.customers = this.customers.filter((c) => !c.active);
    }else{
      this.findAllCustomers();
    }
  }

  changeUserState(active : boolean | undefined, id: number | undefined){
    if(active){
      this.userService.valideAccount({
        'user-id': id as number
      }).subscribe({
        next: () =>{}
      });
    }else{
      this.userService.invalideAccount({
        'user-id': id as number
      }).subscribe({
        next: () =>{}
      });
    }
  }

}

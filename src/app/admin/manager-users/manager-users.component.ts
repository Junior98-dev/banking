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
  userIdToUpdate = -1;
  updateState: boolean | undefined;
  
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

  changeUserState(active: boolean | undefined, id: number | undefined) {
    this.userIdToUpdate = id as number;
    this.updateState = active;
  }

  updateUserState() {
    if (this.updateState) {
      this.userService.valideAccount({
        'user-id': this.userIdToUpdate as number
      }).subscribe({
        next: () =>{
          this.findAllCustomers();
        }
      });
    } else {
      this.userService.invalideAccount({
        'user-id': this.userIdToUpdate as number
      }).subscribe({
        next: () =>{}
      });
    }
  }

  cancelUpdate() {
    const user = this.customers.find((c) =>c.id === this.userIdToUpdate);
    if (user) {
      user.active = !user.active
    }
    this.userIdToUpdate = -1;
    this.updateState = undefined
  }

}

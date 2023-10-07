import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/service/helper/helper.service';
import { ContactDto } from 'src/app/service/models';
import { ContactControllerService } from 'src/app/service/services';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent  implements OnInit{
  
  contacts: Array<ContactDto> = [];
  userIdToDelete: any = -1;

  constructor(
    private contactService: ContactControllerService,
    private helperService: HelperService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.findAllContactByUser();
  }

  private findAllContactByUser(){
    this.contactService.findAllByUserId1({
      'user-id': this.helperService.userId
    }).subscribe({
      next: (data) => {
        this.contacts = data;
      }
    })
  }

  async update(id:number | undefined){
    await this.router.navigate(['user/new-contact', id])
  }

  delete(){
    if(this.userIdToDelete){
      this.contactService.delete2({
        'contact-id': this.userIdToDelete
      }).subscribe({
        next: () => {
          this.findAllContactByUser();
        }
      });
    }
  }
}

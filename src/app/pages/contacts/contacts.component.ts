import { Component, OnInit } from '@angular/core';
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

  constructor(
    private contactService: ContactControllerService,
    private helperService: HelperService
    ){}

  ngOnInit(): void {
    this.contactService.findAllByUserId1({
      'user-id': this.helperService.userId
    }).subscribe({
      next: (data) => {
        this.contacts = data;
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/service/helper/helper.service';
import { ContactDto } from 'src/app/service/models';
import { ContactControllerService } from 'src/app/service/services';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit{
  
  contact: ContactDto = {};
  errorMessages: Array<string> = [];

  constructor(
    private contactService: ContactControllerService,
    private helperService: HelperService,
    private router: Router,
    private activateRoute: ActivatedRoute
    ){}

  ngOnInit(): void {
    const contactId = this.activateRoute.snapshot.params['idContact'];
    if(contactId){
      this.contactService.findById2({
        'contact-id': this.activateRoute.snapshot.params['idContact']
      }).subscribe({
        next: (data) => {
          this.contact = data;
        }
      });
    }
  }

  save(){
    this.errorMessages = [];
    this.contact.userId = this.helperService.userId;
    this.contactService.save2({
      body: this.contact
    }).subscribe({
      next: async (data) => {
        await this.router.navigate(['user/my-contact-list']);
      },
      error: (err) => {
        this.errorMessages = err.error.validationErrors;
      }
    })
  }

  async cancel(){
    await this.router.navigate(['user/my-contact-list']);
  }

}

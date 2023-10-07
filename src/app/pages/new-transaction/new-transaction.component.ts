import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/service/helper/helper.service';
import { ContactDto, TransactionDto } from 'src/app/service/models';
import { ContactControllerService, StatisticsControllerService, TransactionControllerService } from 'src/app/service/services';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss']
})
export class NewTransactionComponent implements OnInit{
  
  transaction: TransactionDto = {};
  contacts: Array<ContactDto> = [];
  accountBalance = 0;
  errorMessages: Array<string> = [];
  
  constructor(
    private statisticService: StatisticsControllerService,
    private contactService: ContactControllerService,
    private transactionService: TransactionControllerService,
    private helperService: HelperService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.findAllContactByUser();
    this.statisticService.getAccountBalance({
      'user-id': this.helperService.userId
    }).subscribe({
      next: (data) => {
        this.accountBalance = data;
      }
    })
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

  async cancel(){
    await this.router.navigate(['user','my-transaction']);
  }

  save(){
    this.errorMessages = [];
    this.transaction.userId = this.helperService.userId;
    this.transactionService.save1({
      body: this.transaction
    }).subscribe({
      next: async () => {
        await this.router.navigate(['user','my-transaction'])
      },
      error: (err) => {
        this.errorMessages = err.error.validationError;
      }
    });
  }


}

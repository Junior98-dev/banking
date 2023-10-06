import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/service/helper/helper.service';
import { TransactionDto } from 'src/app/service/models';
import { TransactionControllerService } from 'src/app/service/services';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit{

  transactions: Array<TransactionDto> = [];

  constructor(
    private transactionService: TransactionControllerService,
    private helper: HelperService
    ){}

  ngOnInit(): void {
      this.transactionService.findAllByUserId({
        'user-id': this.helper.userId
      }).subscribe({
        next: (data) => {
          this.transactions = data;
        }
      })
  }
}

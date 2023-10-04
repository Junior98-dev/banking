import { Component, OnInit } from '@angular/core';
import { FirstService } from 'src/app/service/first-service/first-service.service';
import { TransactionControllerService } from 'src/app/service/services';

@Component({
  selector: 'app-user-ashboard',
  templateUrl: './user-ashboard.component.html',
  styleUrls: ['./user-ashboard.component.scss']
})
export class UserAshboardComponent implements OnInit{

  constructor( private transaction: TransactionControllerService){}

  ngOnInit(): void { 
    this.transaction.findAll1().subscribe(
      (data) => {console.log(data)}
    )
  }
}

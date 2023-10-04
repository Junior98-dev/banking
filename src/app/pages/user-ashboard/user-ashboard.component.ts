import { Component, OnInit } from '@angular/core';
import { AddressControllerService, TransactionControllerService } from 'src/app/service/services';

@Component({
  selector: 'app-user-ashboard',
  templateUrl: './user-ashboard.component.html',
  styleUrls: ['./user-ashboard.component.scss']
})
export class UserAshboardComponent implements OnInit{

  constructor( private transaction: AddressControllerService){}

  ngOnInit(): void { 
    this.transaction.findAll3().subscribe(
      (data) => {console.log(data)}
    )
  }
}

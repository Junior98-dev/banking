import { Component, OnInit } from '@angular/core';
import { FirstService } from 'src/app/service/first-service/first-service.service';

@Component({
  selector: 'app-user-ashboard',
  templateUrl: './user-ashboard.component.html',
  styleUrls: ['./user-ashboard.component.scss']
})
export class UserAshboardComponent implements OnInit{

  constructor(private firstservice: FirstService){}

  ngOnInit(): void {
    this.firstservice.findAlltransactions()
    .subscribe(
      (data) => {console.log('liste des transactions :', data)}
    ) 
  }
}

import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HelperService } from 'src/app/service/helper/helper.service';
import { StatisticsControllerService } from 'src/app/service/services';
import { IBalance } from './IBalance';


@Component({
  selector: 'app-user-ashboard',
  templateUrl: './user-ashboard.component.html',
  styleUrls: ['./user-ashboard.component.scss']
})
export class UserAshboardComponent implements OnInit {

  accountInfoList: Array<IBalance> = [];
  private accountBalance = 0;
  private highestTransfer = 0;
  private highestDepot = 0;


  constructor(
    private statisticsService: StatisticsControllerService,
    private helper: HelperService
  ) { }

  ngOnInit(): void {
    this.initializeAccountInfo();
  }
  
  private async initializeAccountInfo(){

    this.accountBalance = await lastValueFrom(
      this.statisticsService.getAccountBalance({'user-id':this.helper.userId})
    );
    
    this.highestTransfer = await lastValueFrom( 
      this.statisticsService.highesTransfert({'user-id':this.helper.userId})
    );

    this.highestDepot= await lastValueFrom(
      this.statisticsService.highesDeposit({'user-id':this.helper.userId})
    );
    this.accountInfoList = [
      {
        title: 'solde du compte',
        amount: this.accountBalance,
      },
      {
        title: 'Transfert le plus élèvé',
        amount: this.highestTransfer,
      },
      {
        title: 'Dépot le plus élèvé',
        amount: this.highestDepot,
      }
    ]
  }










}

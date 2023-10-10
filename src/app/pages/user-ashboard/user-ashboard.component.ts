import { Component, OnInit, Type } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HelperService } from 'src/app/service/helper/helper.service';
import { StatisticsControllerService } from 'src/app/service/services';
import { IBalance } from './IBalance';
import { Chart, ChartDataset} from 'chart.js';


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

  data:any;
  dataamount:any[] = [];
  datadate:any[] = [];
  
  


  constructor(
    private statisticsService: StatisticsControllerService,
    private helper: HelperService
  ) { }

  ngOnInit(): void {
    this.initializeAccountInfo();

    this.statisticsService.findSumTranctionsByDate({
      'user-id': this.helper.userId,
      'start-date': '2023-10-01',
      'end-date': '2023-10-10'
    }).subscribe({
      next: (res) => {
        this.data = res;
        //console.log(data)

        if(this.data != null){
          for(let i=0; i<this.data.length; i++){
            this.dataamount.push(this.data[i].amount);
            //console.log(this.dataamount);
            this.datadate.push(this.data[i].transactionDate);
            //console.log(this.datadate);
          }
        }
        this.showChartdata(this.dataamount, this.datadate);

      }
      
    });

    
  }

  showChartdata(dataamount:any, datadate:any){
    //console.log(dataamount);
    new Chart("myChart", {
      type: 'line',
      data: {
        labels: datadate,
        datasets: [{
          label: 'Somme des transaction par jour',
          data: dataamount,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
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

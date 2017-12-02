import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { clamp } from 'ionic-angular/util/util';

/**
 * Generated class for the DesenvolvimentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-desenvolvimento',
  templateUrl: 'desenvolvimento.html',
})
export class DesenvolvimentoPage {
  model: fichas;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    //  this.model.teste = this.restProvider.getAllFicha(this.restProvider.emailValid);
  }

  ionViewDidLoad() {

    // this.getAllFichas(this.restProvider.emailValid);
  }

  
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['29/08/2017', '01/10/2017', '02/12/2017'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 68, 70], label: 'Peso'},
    {data: [28, 26, 23], label: '% de Gordura'}
  ];

  public barChartOptions1:any = {
    scaleShowVerticalLines1: false,
    responsive: true
  };
  public barChartLabels1:string[] = ['29/10/2017', '15/11/2017', '02/12/2017'];
  public barChartType1:string = 'bar';
  public barChartLegend1:boolean = true;
 
  public barChartData1:any[] = [
    {data: [5, 10, 10], label: 'Carga'},
    {data: [2, 2, 3], label: 'Repeticao'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  


  // public lineChartType: string = 'line';
  // public pieChartType: string = 'pie';

  // public randomizeType(): void {
  //   this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  //   this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  // }

  // public chartClicked(e: any): void {
  //   console.log(e);
  // }

  // public chartHovered(e: any): void {
  //   console.log(e);
  // }
}


export class fichas {
  ficha: any[];
  teste: any[];
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ExecutartreinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 import {ComecartreinoPage} from "../comecartreino/comecartreino";
 import { CronometroPage } from "../cronometro/cronometro";

@IonicPage()
@Component({
  selector: 'page-executartreino',
  templateUrl: 'executartreino.html',
})
export class ExecutartreinoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExecutartreinoPage');
  }

  terminar() {
    this.navCtrl.setRoot(ComecartreinoPage);
  }

  items = [
    'Supino Reto',
    'Remada Sentado',
    'Cadeira Extensora',
    'Rosca Inversa',
    'Corda',
    'Elevação Frontal'
  ];

  itemSelected(item: string) { // lista de exercícios

    this.navCtrl.push(CronometroPage);

    console.log("Selected Item", item);
  }

}

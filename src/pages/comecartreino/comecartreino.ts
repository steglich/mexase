import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ComecartreinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 import { ExecutartreinoPage } from "../executartreino/executartreino";
 import { HomePage }from "../home/home";

@IonicPage()
@Component({
  selector: 'page-comecartreino',
  templateUrl: 'comecartreino.html',
})
export class ComecartreinoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComecartreinoPage');
  }


  items = [
    'Treino A',
    'Treino B',
    'Treino C'
  ];

  itemSelected(item: string) { // lista de exercícios

    let prompt = this.alertCtrl.create({
      title: "Pausa para Descanso",
      message: "Insira o tempo de descanso entre os exercícios.",
      inputs: [
        {
          type: "Number",
          name: 'Tempo',
          placeholder: 'Tempo'
        },
      ],
      buttons: [
        {
          text: 'OK',
          handler: data => {
            console.log('Saved clicked');
            this.navCtrl.setRoot(ExecutartreinoPage);
          }
        }
      ]
    });
    prompt.present();

    console.log("Selected Item", item);
  }

  terminar(){
    this.navCtrl.setRoot(HomePage);
  }

}

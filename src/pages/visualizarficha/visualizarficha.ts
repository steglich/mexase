import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the VisualizarfichaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-visualizarficha',
  templateUrl: 'visualizarficha.html',
})
export class VisualizarfichaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisualizarfichaPage');
  }

  atualizar() {

    let confirm = this.alertCtrl.create({
      title: 'Atualizar',
      message: "Deseja confirmar esta atualização?",

      buttons: [
        {
          text: 'Não',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Sim',
          handler: data => {
            console.log('Saved clicked');

            this.navCtrl.setRoot(HomePage);

          }
        }
      ]
    });
    confirm.present();
  }

  voltar() {

    this.navCtrl.setRoot(HomePage);

  }

}

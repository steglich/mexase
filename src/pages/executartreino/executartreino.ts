import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the ExecutartreinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 //import {ComecartreinoPage} from "../comecartreino/comecartreino";
 import { CronometroPage } from "../cronometro/cronometro";
 import { HomePage } from '../home/home';
 import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-executartreino',
  templateUrl: 'executartreino.html',
})
export class ExecutartreinoPage {
  itens: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public restProvider: RestProvider, public toast: ToastController, ) {
      this.itens = this.restProvider.getExercicio(this.restProvider.emailValid, this.restProvider.exercicio.dsTreino);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExecutartreinoPage');
  }

  terminar() {
    this.navCtrl.setRoot(HomePage);
  }

  itemSelected(item: string) { // lista de exercícios

    let prompt = this.alertCtrl.create({
      title: "Pausa para Descanso",
      message: "Insira o tempo de descanso entre os exercícios.",
      inputs: [
        {
          type: "Number",
          name: "tempo",
          placeholder: "tempo"
        },
      ],
      buttons: [
        {
          text: 'OK',
          handler: data => {
            this.restProvider.tempo = data.tempo;
            console.log('Saved clicked');
            this.restProvider.evolucao = item;
            this.navCtrl.setRoot(CronometroPage);
          }
        }
      ]
    });
    prompt.present();

    console.log("Selected Item", item);
  }

}

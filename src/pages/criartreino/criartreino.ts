import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CriartreinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 import {TreinamentoPage} from "../treinamento/treinamento";

@IonicPage()
@Component({
  selector: 'page-criartreino',
  templateUrl: 'criartreino.html',
})
export class CriartreinoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriartreinoPage');
  }

  salvar() {
    let alert = this.alertCtrl.create({
      title: 'SALVO',
      subTitle: 'Seu treino foi salvo com sucesso!',
      buttons: ['OK']
    });
    alert.present();

    this.navCtrl.setRoot(TreinamentoPage);
  }

  cancelar() {
    let confirm = this.alertCtrl.create({
      title: 'Sair',
      message: "Deseja realmente sair?",

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

            this.navCtrl.setRoot(TreinamentoPage);

          }
        }
      ]
    });
    confirm.present();

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

    let prompt = this.alertCtrl.create({
      title: item,
      message: "Insira o número de repetições do exercício e a quantidade de peso.",
      inputs: [
        {
          type: 'number',
          name: 'repeticao',
          placeholder: 'Repeticao'
        },
        {
          type: 'number',
          name: 'carga',
          placeholder: 'Carga'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();

    console.log("Selected Item", item);
  }

}

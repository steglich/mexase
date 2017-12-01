import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the VisualizartreinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { TreinamentoPage } from "../treinamento/treinamento";
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-visualizartreino',
  templateUrl: 'visualizartreino.html',
})
export class VisualizartreinoPage {
  itens: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public restProvider: RestProvider, public toast: ToastController, ) {
      var email =this.restProvider.emailValid;
      this.itens = this.restProvider.getTreino(email);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisualizartreinoPage');
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

            this.navCtrl.setRoot(TreinamentoPage);

          }
        }
      ]
    });
    confirm.present();
  }

  voltar() {

    this.navCtrl.setRoot(TreinamentoPage);

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
          text: 'Atualizar',
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
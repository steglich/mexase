import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the TreinamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import {VisualizartreinoPage} from "../visualizarTreino/visualizarTreino";
import {CriartreinoPage} from "../criartreino/criartreino";
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-treinamento',
  templateUrl: 'treinamento.html',
})
export class TreinamentoPage {
  model: treino;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public restProvider: RestProvider, public toast: ToastController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreinamentoPage');
  }

  criartreino(){

    let prompt = this.alertCtrl.create({
      title: "Treino",
      message: "Selecione o Treino que deseja criar.",
      inputs: [
        {
          type: "radio",
          label: "Peito",
          value: "Peito"
        },
        {
          type: "radio",
          label: "Costa",
          value: "Costa"
        },
        {
          type: "radio",
          label: "Bíceps",
          value: "Bíceps"
        },
        {
          type: "radio",
          label: "Pernas",
          value: "Pernas"
        },
        {
          type: "radio",
          label: "Ombros",
          value: "Ombros"
        },
        {
          type: "radio",
          label: "Tríceps",
          value: "Tríceps"
        },
        {
          type: "radio",
          label: "Abdomen",
          value: "Abdomen"
        },
        {
          type: "radio",
          label: "Glúteo",
          value: "Glúteo"
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
          text: 'Criar',
          handler: data => {
            //console.log('Teste Radio: ', data);
            //this.model.treino = data;

            var treinos : string[] = [data, this.restProvider.emailValid];

            this.restProvider.createTreino(treinos)
            .then((result: any) => {
              this.toast.create({ message: 'Treino cadastrado com sucesso!', position: 'botton', duration: 3000 }).present();
              this.restProvider.treino = data;
              this.navCtrl.setRoot(CriartreinoPage);
            })
            .catch((error: any) => {
              this.toast.create({ message: 'Erro ao Logar: ' + error, position: 'botton', duration: 5000 }).present();
            })
            
          }
        }
      ]
    });
    prompt.present();

  }

  items = [
    'Treino A',
    'Treino B',
    'Treino C'
  ];

  itemSelected(item: string) { // lista de exercícios

    this.navCtrl.setRoot(VisualizartreinoPage);

    console.log("Selected Item", item);
  }

}

export class treino{
  email: any;
  treino: any;
}

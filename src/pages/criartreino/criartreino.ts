import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the CriartreinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { TreinamentoPage } from "../treinamento/treinamento";
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-criartreino',
  templateUrl: 'criartreino.html',
})
export class CriartreinoPage {
  itens: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public restProvider: RestProvider, public toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriartreinoPage');
this.lista(this.restProvider.treinoTeste);
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

  lista(teste: any){
    switch (teste) {
      case "Braço":
        this.itens = [
          'Supino Reto',
          'Remada Sentado',
          'Cadeira Extensora',
          'Rosca Inversa',
          'Corda',
          'Elevação Frontal'
        ]
        break;

      case "Costa":
        this.itens = [
          'Remada Sentado',
          'Cadeira Extensora',
          'Rosca Inversa',
          'Corda',
          'Elevação Frontal'
        ]
        break;

      case "Perna":
        this.itens = [
          'Agachamento',
          'Remada Sentado',
          'Cadeira Extensora',
          'Rosca Inversa',
          'Corda',
          'Elevação Frontal'
        ]
        break;

      case "Abdomem":
        this.itens = [
          'Abdominal',
          'Remada Sentado',
          'Cadeira Extensora',
          'Rosca Inversa',
          'Corda',
          'Elevação Frontal'
        ]
        break;

      default:
        break;
    }
  }

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
            
            var exercicios : string[] = [item, data.repeticao, data.carga, this.restProvider.emailValid];
    
            this.restProvider.createExercicio(exercicios)
            .then((result: any) => {
              this.toast.create({ message: 'Exercício cadastrado com sucesso!', position: 'botton', duration: 3000 }).present();
            })
            .catch((error: any) => {
              this.toast.create({ message: 'Erro ao Logar: ' + error, position: 'botton', duration: 5000 }).present();
            })
          }
        }
      ]
    });
    prompt.present();

    console.log("Selected Item", item);
  }

}

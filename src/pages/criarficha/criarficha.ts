import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the CriarfichaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { HomePage } from "../home/home";

import { FichaPage } from '../ficha/ficha';
import { TreinamentoPage } from '../treinamento/treinamento';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-criarficha',
  templateUrl: 'criarficha.html',
})
export class CriarfichaPage {
  private todo: FormGroup;
  model: fichaAvaliacao;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private formBuilder: FormBuilder,
    public restProvider: RestProvider, public toast: ToastController) {

    this.model = new fichaAvaliacao();

    this.todo = this.formBuilder.group({
      peso: [null, [Validators.required, Validators.pattern('[0-9.]*')]],
      altura: [null, [Validators.required, Validators.pattern('[0-9.]*')]],
      gordura: [null, [Validators.required, Validators.pattern('[0-9.]*')]],
      peito: [null, [Validators.required, Validators.pattern('[0-9.]*')]],
      cintura: [null, [Validators.required, Validators.pattern('[0-9.]*')]],
      quadril: [null, [Validators.required, Validators.pattern('[0-9.]*')]],
      anteBracoDireito: [null, [Validators.required, Validators.pattern('[0-9.]*')]],
      anteBracoEsquerdo: [null, [Validators.required, Validators.pattern('[0-9.]*')]],
      bracoDireito: [null, [Validators.required, Validators.pattern('[0-9.]*')]],
      bracoEsquerdo: [null, [Validators.required, Validators.pattern('[0-9.]*')]],
      coxaDireita: [null, [Validators.required, Validators.pattern('[0-9.]*')]],
      coxaEsquerda: [null, [Validators.required, Validators.pattern('[0-9.]*')]],
      pantuDireita: [null, [Validators.required, Validators.pattern('[0-9.]*')]],
      pantuEsquerda: [null, [Validators.required, Validators.pattern('[0-9.]*')]]
      //reavaliacao: [null, [Validators.required]]
    });

  }

  cadficha() {
    console.log(this.todo.value)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarfichaPage');
  }

  salvar() {

    let prompt = this.alertCtrl.create({
      title: "Reavaliação",
      message: "Insira a data da proxima avaliação.",
      inputs: [
        {
          type: "Date",
          name: "data",
          placeholder: 'Data'
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

            this.model.reavaliacao = data.data;
            
            var fichas: string[] = [
              this.model.peso,
              this.model.altura,
              this.model.gordura,
              this.model.peito,
              this.model.cintura,
              this.model.quadril,
              this.model.anteBracoDireito,
              this.model.anteBracoEsquerdo,
              this.model.bracoDireito,
              this.model.bracoEsquerdo,
              this.model.coxaDireita,
              this.model.coxaEsquerda,
              this.model.pantuDireita,
              this.model.pantuEsquerda,
              this.model.reavaliacao,
              this.restProvider.emailValid
            ];

            this.restProvider.createFicha(fichas)
              .then((result: any) => {
                this.navCtrl.setRoot(HomePage);
                this.toast.create({ message: 'Ficha cadastrado com sucesso!', position: 'botton', duration: 3000 }).present();
              })
              .catch((error: any) => {
                this.toast.create({ message: 'Erro ao Criar Ficha: ', position: 'botton', duration: 5000 }).present();
              })
          }
        }
      ]
    });
    prompt.present();
  }

  cancelar() {

    let confirm = this.alertCtrl.create({
      title: 'Sair',
      message: "Deseja confirmar esta atualização.",

      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: data => {
            console.log('Saved clicked');

            this.navCtrl.setRoot(FichaPage);

          }
        }
      ]
    });
    confirm.present();

  }

}

export class fichaAvaliacao {
  peso: any;
  altura: any;
  gordura: any;
  peito: any;
  cintura: any;
  quadril: any;
  anteBracoDireito: any;
  anteBracoEsquerdo: any;
  bracoDireito: any;
  bracoEsquerdo: any;
  coxaDireita: any;
  coxaEsquerda: any;
  pantuDireita: any;
  pantuEsquerda: any;
  reavaliacao: any;
}

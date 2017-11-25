import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the VisualizarfichaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { HomePage } from '../home/home';
import { RestProvider } from '../../providers/rest/rest';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-visualizarficha',
  templateUrl: 'visualizarficha.html',
})
export class VisualizarfichaPage {
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
      pantuEsquerda: [null, [Validators.required, Validators.pattern('[0-9.]*')]],
      reavaliacao: [null, [Validators.required]]
    });
  }

  ionViewDidLoad() {
    this.getOneFicha(this.restProvider.emailValid);
  }

  getOneFicha(emails: string) {
    this.restProvider.getFicha(emails)
      .then((result: any) => {
        this.model.peso = result.peso,
        this.model.altura = result.altura,
        this.model.gordura = result.gordura,
        this.model.peito = result.peito,
        this.model.cintura = result.cintura,
        this.model.quadril = result.quadril,
        this.model.anteBracoDireito = result.anteBracoDireito,
        this.model.anteBracoEsquerdo = result.anteBracoEsquerdo,
        this.model.bracoDireito = result.bracoDireito,
        this.model.bracoEsquerdo = result.bracoEsquerdo,
        this.model.coxaDireita = result.coxaDireita,
        this.model.coxaEsquerda = result.coxaEsquerda,
        this.model.pantuDireita = result.pantuDireita,
        this.model.pantuEsquerda = result.pantuEsquerda,
        this.model.reavaliacao = result.avaliacao.reavaliacao
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recupara ficha: ' + error, position: 'botton', duration: 5000 }).present();
      })
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

            //this.model.reavaliacao = data.data;

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

            this.restProvider.updateFicha(fichas)
              .then((result: any) => {
                this.navCtrl.setRoot(HomePage);
                this.toast.create({ message: 'Ficha de atualização atualizada com sucesso!', position: 'botton', duration: 3000 }).present();
              })
              .catch((error: any) => {
                this.toast.create({ message: 'Erro ao atualizar Ficha de avaliação: ', position: 'botton', duration: 5000 }).present();
              })

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


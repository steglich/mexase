import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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

@IonicPage()
@Component({
  selector: 'page-criarficha',
  templateUrl: 'criarficha.html',
})
export class CriarfichaPage {
  private todo : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private formBuilder: FormBuilder) {
    
    this.todo = this.formBuilder.group({
      peso: [null, [Validators.required,  Validators.pattern('[0-9.]*')]],
      altura: [null, [Validators.required,  Validators.pattern('[0-9.]*')]],
      gordura: [null, [Validators.required,  Validators.pattern('[0-9.]*')]],
      torax: [null, [Validators.required,  Validators.pattern('[0-9.]*')]],
      peito: [null, [Validators.required,  Validators.pattern('[0-9.]*')]],
      cintura: [null, [Validators.required,  Validators.pattern('[0-9.]*')]],
      abdomen: [null, [Validators.required,  Validators.pattern('[0-9.]*')]],
      quadril: [null, [Validators.required,  Validators.pattern('[0-9.]*')]],
      antebracod: [null, [Validators.required,  Validators.pattern('[0-9.]*')]],
      antebracoe: [null, [Validators.required,  Validators.pattern('[0-9.]*')]],
      bracod: [null, [Validators.required,  Validators.pattern('[0-9.]*')]],
      bracoe: [null, [Validators.required,  Validators.pattern('[0-9.]*')]],
      coxad: [null, [Validators.required,  Validators.pattern('[0-9.]*')]],
      coxae: [null, [Validators.required,  Validators.pattern('[0-9.]*')]],
      paturilhad: [null, [Validators.required,  Validators.pattern('[0-9.]*')]],
      paturilhae: [null, [Validators.required,  Validators.pattern('[0-9.]*')]]
    });

  }

  cadficha(){
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
          name: 'data',
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
            console.log('Saved clicked');

            // this.navCtrl.setRoot(TreinamentoPage);
            this.navCtrl.setRoot(HomePage);
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

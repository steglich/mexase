import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the CronometroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { RestProvider } from '../../providers/rest/rest';
import { ExecutartreinoPage } from '../executartreino/executartreino';

@IonicPage()
@Component({
  selector: 'page-cronometro',
  templateUrl: 'cronometro.html',
})
export class CronometroPage {
  model: cronometro;
  // itens: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public toast: ToastController) {
    // this.itens = this.restProvider.getEvelucao(this.restProvider.emailValid, this.restProvider.exercicio.dsTreino);

    this.model = new cronometro();
    this.model.exercicio = this.restProvider.evolucao.dsExercicio;
    this.model.desc = "Iniciar Pausa";
    this.model.descTempo = this.restProvider.tempo;
    this.model.exer = 0;
  }

  ionViewDidLoad() {
    this.getOneExercicio(this.restProvider.emailValid, this.restProvider.evolucao.dsExercicio);
  }

  getOneExercicio(emails: string, evolucao: string) {
    this.restProvider.getEvelucao(emails, evolucao)
      .then((result: any) => {
        this.model.carga = result.carga;
        this.model.repeticao = result.repeticao;
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recupara ficha: ' + error, position: 'botton', duration: 5000 }).present();
      })
  }

  tempo() {

    this.model.parar = setInterval(() => {
      this.model.desc = "Reotrnar em: " + this.model.descTempo-- + " segundos.";
      if (this.model.descTempo == 0) {
        this.model.desc = "Vamos Treinar!!!";
        clearInterval(this.model.parar);
        this.model.descTempo = 10;

        this.model.exer++;

        if (this.model.exer == this.model.repeticao) {
          this.model.descTempo = 5;
          this.model.desc = "Treino Finalizado!!!";
          this.model.parar = setInterval(() => {
            this.model.descTempo--;
            if (this.model.descTempo == 0) {
              this.navCtrl.setRoot(ExecutartreinoPage);
            }
          }, 1000);;
        }

        this.model.parar = setInterval(() => {
          this.model.descTempo--;
          if (this.model.descTempo == 0) {
            this.model.desc = "Descançar";
            clearInterval(this.model.parar);
            this.model.descTempo = this.restProvider.tempo;
          }
        }, 1000);;
      }
    }, 1000);;
  }


}

export class cronometro {
  exercicio: any;
  repeticao: any;
  carga: any;
  desc: any;
  descTempo: any;
  parar: any;
  exer: any;
}

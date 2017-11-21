import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TreinamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import {VisualizartreinoPage} from "../visualizarTreino/visualizarTreino";
import {CriartreinoPage} from "../criartreino/criartreino";

@IonicPage()
@Component({
  selector: 'page-treinamento',
  templateUrl: 'treinamento.html',
})
export class TreinamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreinamentoPage');
  }

  criartreino(){
    this.navCtrl.setRoot(CriartreinoPage);
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

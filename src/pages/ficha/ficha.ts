import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FichaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { CriarfichaPage } from '../criarficha/criarficha';
import { VisualizarfichaPage } from '../visualizarficha/visualizarficha';
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-ficha',
  templateUrl: 'ficha.html',
})
export class FichaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FichaPage');
  }

  criarficha() {
    this.navCtrl.setRoot(CriarfichaPage);
  }
  visualizarficha(){
    this.navCtrl.setRoot(VisualizarfichaPage);
  }
  voltar(){
    this.navCtrl.setRoot(HomePage);
  }

}

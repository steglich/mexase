import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//import { LoginPage } from '../login/login';
import { AcessarPage } from '../acessar/acessar';
import { RegisterPage } from "../register/register";

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false, 'myMenu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  logar() {
      this.navCtrl.push(AcessarPage);
  }

  cadastro() {
      this.navCtrl.push(RegisterPage);
  }

}

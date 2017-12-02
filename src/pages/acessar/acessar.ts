import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';

/**
 * Generated class for the AcessarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acessar',
  templateUrl: 'acessar.html',
})
export class AcessarPage {
  private todo: FormGroup;
  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    public restProvider: RestProvider, public toast: ToastController, public menuCtrl: MenuController) {
      this.menuCtrl.enable(false, 'myMenu');
      this.model = new User();

    this.todo = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcessarPage');
  }
  
  fron(){
    console.log(this.todo.value)
  }
  
  logar(){
    this.restProvider.login(this.model.email, this.model.senha)
    .then((result: any) => {
      this.navCtrl.setRoot(HomePage);
      this.restProvider.emailValid = result.email;
      this.toast.create({ message: result.nome + ' Bem Vindo!', position: 'botton', duration: 3000 }).present();
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Erro ao Logar: ' + error, position: 'botton', duration: 5000 }).present();
    })
  }

}

  export class User{
    email:string;
    senha: string;
  }

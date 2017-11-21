import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { HomePage } from "../home/home";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private todo: FormGroup;
  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    public restProvider: RestProvider, public toast: ToastController) {

      this.model = new User();

    this.todo = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(8)]]
    });

  }

  fron() {
    console.log(this.todo.value)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.restProvider.login(this.model.email, this.model.senha)
    .then((result: any) => {
      this.navCtrl.setRoot(HomePage);
      this.toast.create({ message: 'Bem Vindo!' + result.nome, position: 'botton', duration: 3000 }).present();
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Erro ao Logar!' + error.error, position: 'botton', duration: 3000 }).present();
    })
  }
  
  loginqw() {
    this.restProvider.login(this.model.email, this.model.senha)
      .then((result: any) => {
        this.navCtrl.setRoot(HomePage);
        this.toast.create({ message: 'Usuário logado com sucesso.', position: 'botton', duration: 3000 }).present();
       })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao efetuar login. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }


}

export class User{
  email: string;
  senha: string;
}
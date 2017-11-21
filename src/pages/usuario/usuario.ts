import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the UsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { HomePage } from "../home/home";
import { RestProvider } from '../../providers/rest/rest';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {
  private todo: FormGroup;

  model: User;
  // list : users[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private formBuilder: FormBuilder,
    public restProvider: RestProvider, public toast: ToastController, public http: Http) {

    this.model = new User();

    this.todo = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  getOneUser(emails: string) {
    this.restProvider.getUser(emails)
      .then((result: any) => {
        this.model.nome = result.nome;
        this.model.email = result.email;
        //this.model.senha = result.senha;
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao Logar: ' + error, position: 'botton', duration: 5000 }).present();
      })
  }

  fron() {
    console.log(this.todo.value)
  }

  ionViewDidLoad() {
    this.getOneUser(this.restProvider.emailValid);
  }
  atualiza() {

    let confirm = this.alertCtrl.create({
      title: 'Atualizar',
      message: "Deseja confirmar esta atualização.",

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

            var users : string[] = [this.model.email, this.model.senha, this.model.nome, this.restProvider.emailValid];

            this.restProvider.updateUser(users)
              .then((result: any) => {
                this.restProvider.emailValid = this.model.email;
                let alert = this.alertCtrl.create({
                  title: 'Atualizado',
                  subTitle: 'Usuário atualizado com sucesso!',
                  buttons: ['OK']
                });
                alert.present();

                this.navCtrl.setRoot(HomePage);
              })
              .catch((error: any) => {
                this.toast.create({ message: 'Erro ao Logar: ', position: 'botton', duration: 5000 }).present();
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

export class User {
  email: string;
  senha: string;
  nome: string;
}

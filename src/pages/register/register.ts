import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//import { MyApp } from "../../app/app.component";

import {FichaPage} from "../ficha/ficha";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private todo : FormGroup;
  model: User;
  erros:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    public restProvider: RestProvider, public toast: ToastController, public menuCtrl: MenuController) {
      this.menuCtrl.enable(false, 'myMenu');
    
      this.model = new User();

    this.todo = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(8)]]
    });

  }

  cadastrar(){
    console.log(this.todo.value)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.erros = [];
  }

  createUsuario(){
    this.restProvider.createUsuario(this.model.email, this.model.senha, this.model.nome)
    .then((result: any) => {
      this.navCtrl.setRoot(FichaPage);
       this.toast.create({ message: 'Ususário cadastrado com sucesso!' + this.restProvider.emailValid, position: 'botton', duration: 3000 }).present();
    })
    .catch((error: any) => {
        this.toast.create({ message: 'Erro ao Logar: ' , position: 'botton', duration: 5000 }).present();
    })
  }

}

  export class User{
    email:string;
    senha: string;
    nome: string;
  }
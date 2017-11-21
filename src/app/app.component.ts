import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { WelcomePage } from '../pages/welcome/welcome';
import { UsuarioPage } from '../pages/usuario/usuario';
import { FichaPage } from '../pages/ficha/ficha';
import { TreinamentoPage } from '../pages/treinamento/treinamento';
import { ComecartreinoPage } from "../pages/comecartreino/comecartreino";
import { DesenvolvimentoPage } from "../pages/desenvolvimento/desenvolvimento";
import { LoginPage } from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Home', component: HomePage },
      { title: 'Usuário', component: UsuarioPage },
      { title: 'Ficha de Avaliação', component: FichaPage },
      { title: 'Treinamento', component: TreinamentoPage },
      { title: 'Ir para Treino', component: ComecartreinoPage },
      { title: 'Desenvolvimento', component: DesenvolvimentoPage },      
      { title: 'Sair', component: WelcomePage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  sair(){

  }

}
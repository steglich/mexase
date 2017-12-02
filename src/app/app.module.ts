import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { WelcomePage } from '../pages/welcome/welcome';
import { RegisterPage } from '../pages/register/register';
import { UsuarioPage } from '../pages/usuario/usuario';
import { FichaPage } from '../pages/ficha/ficha';
import { CriarfichaPage } from '../pages/criarficha/criarficha';
import { VisualizarfichaPage } from '../pages/visualizarficha/visualizarficha';
import { TreinamentoPage } from '../pages/treinamento/treinamento';
import { CriartreinoPage } from "../pages/criartreino/criartreino";
import { VisualizartreinoPage } from "../pages/visualizarTreino/visualizarTreino";
import { ExecutartreinoPage } from "../pages/executartreino/executartreino";
import { CronometroPage } from "../pages/cronometro/cronometro";
import { DesenvolvimentoPage } from "../pages/desenvolvimento/desenvolvimento";
import { AcessarPage } from"../pages/acessar/acessar";

import { NgCalendarModule } from "ionic2-calendar";
import { RestProvider } from '../providers/rest/rest';

import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    HomePage,
    ListPage,
    RegisterPage,
    UsuarioPage,
    FichaPage,
    CriarfichaPage,
    VisualizarfichaPage,
    TreinamentoPage,
    CriartreinoPage,
    VisualizartreinoPage,
    ExecutartreinoPage,
    CronometroPage,
    DesenvolvimentoPage,
    AcessarPage
  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    HttpModule,
    ChartsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    HomePage,
    ListPage,
    RegisterPage,
    UsuarioPage,
    FichaPage,
    CriarfichaPage,
    VisualizarfichaPage,
    TreinamentoPage,
    CriartreinoPage,
    VisualizartreinoPage,
    ExecutartreinoPage,
    CronometroPage,
    DesenvolvimentoPage,
    AcessarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}

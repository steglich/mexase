import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TreinamentoPage } from './treinamento';

@NgModule({
  declarations: [
    TreinamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(TreinamentoPage),
  ],
})
export class TreinamentoPageModule {}

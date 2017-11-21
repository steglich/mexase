import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarfichaPage } from './criarficha';

@NgModule({
  declarations: [
    CriarfichaPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarfichaPage),
  ],
})
export class CriarfichaPageModule {}

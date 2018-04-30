import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExchangeDetailsPage } from './exchange-details';

@NgModule({
  declarations: [
    ExchangeDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExchangeDetailsPage),
  ],
})
export class ExchangeDetailsPageModule {}

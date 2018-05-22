import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MerchantDetailsPage } from './merchant-details';

@NgModule({
  declarations: [
    MerchantDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MerchantDetailsPage),
  ],
})
export class MerchantDetailsPageModule {}

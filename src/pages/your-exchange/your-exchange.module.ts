import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourExchangePage } from './your-exchange';

@NgModule({
  declarations: [
    YourExchangePage,
  ],
  imports: [
    IonicPageModule.forChild(YourExchangePage),
  ],
})
export class YourExchangePageModule {}

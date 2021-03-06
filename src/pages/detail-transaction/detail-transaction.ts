import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Help2Page } from '../help2/help2';
import { ReceiptPage } from '../receipt/receipt';

/**
 * Generated class for the DetailTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-transaction',
  templateUrl: 'detail-transaction.html',
})
export class DetailTransactionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailTransactionPage');
  }

  tab1Root = Help2Page;
  tab2Root = ReceiptPage;
}

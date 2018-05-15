import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MainSearchGeoTagNotifiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-search-geo-tag-notifi',
  templateUrl: 'main-search-geo-tag-notifi.html',
})
export class MainSearchGeoTagNotifiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainSearchGeoTagNotifiPage');
  }

}

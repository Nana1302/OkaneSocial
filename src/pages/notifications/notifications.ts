import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { Popover1Component } from '../../components/popover1/popover1';

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  presentNotification(myEvent) {
    let popover1 = this.popoverCtrl.create(Popover1Component);
    popover1.present({
      ev: myEvent
    });
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad NotificationsPage');
  // }

}

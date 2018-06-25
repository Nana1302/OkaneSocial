import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { UpcomingPage } from './../upcoming/upcoming';


/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  text: string;

  constructor( public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello PopoverComponent Component');
    this.text;
  }

  // tab1Root = UpcomingPage;
  // tab2Root = UpcomingPage;
  // pushUpcoming() {
  //   this.navCtrl.push(UpcomingPage);
  // }
}

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  pages: Array<{title: string, component: any,}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {

    this.pages = [
      { title: 'Payment', component: HomePage },
      // { title: 'Your Trades', component: HomePage },
      // { title: 'Rewards', component: HomePage },
      // { title: 'Help', component: HomePage },
      // { title: 'Settings', component: HomePage },
      // { title: 'Legal', component: HomePage }
   
    ];

  }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //     });
  // }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
 
}



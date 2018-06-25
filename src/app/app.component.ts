import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

import { WelcomePage } from '../pages/welcome/welcome';
import { MainPage } from '../pages/main/main';
import { ChoosePlanPage } from '../pages/choose-plan/choose-plan';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { SplashPage } from '../pages/splash/splash';
import { EditAccountPage } from '../pages/edit-account/edit-account';
import { ExchangeDetailsPage } from '../pages/exchange-details/exchange-details';
import { SignupPersonalInfoAPage } from '../pages/signup-personal-info-a/signup-personal-info-a';
import { SignupPersonalInfoBPage } from '../pages/signup-personal-info-b/signup-personal-info-b';
import { HelpPage } from '../pages/help/help';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { YourExchangePage } from '../pages/your-exchange/your-exchange';
import { MainSearchGeoTagNotifiPage } from '../pages/main-search-geo-tag-notifi/main-search-geo-tag-notifi';
import { ChatPage } from '../pages/chat/chat';
import { HistoryPage } from '../pages/history/history';
import { MerchantDetailsPage } from '../pages/merchant-details/merchant-details';
import { NotificationsPage } from '../pages/notifications/notifications';
import { DetailTransactionPage } from '../pages/detail-transaction/detail-transaction';
import { UpcomingPage } from '../pages/upcoming/upcoming';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any= HistoryPage;

  // pages: Array<{title: string, component: any,}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {

    // this.pages = [
    //   { title: 'Payment', component: MainPage },
      // { title: 'Your Trades', component: HomePage },
      // { title: 'Rewards', component: HomePage },
      // { title: 'Help', component: HomePage },
      // { title: 'Settings', component: HomePage },
      // { title: 'Legal', component: HomePage }
   
    // ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      });
  }

  // openPage(page) {
  //   this.nav.setRoot(page.component);
  // }
 
}



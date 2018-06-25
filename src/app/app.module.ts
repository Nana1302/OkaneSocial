import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Searchbar } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import { WelcomePage } from '../pages/welcome/welcome';
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
import { PopoverComponent } from '../components/popover/popover';
import { MerchantDetailsPage } from '../pages/merchant-details/merchant-details';
import { NotificationsPage } from '../pages/notifications/notifications';
import { Popover1Component } from '../components/popover1/popover1';
import { DetailTransactionPage } from '../pages/detail-transaction/detail-transaction';
import { UpcomingPage } from '../pages/upcoming/upcoming';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    WelcomePage,
    ChoosePlanPage,
    WalkthroughPage,
    SplashPage,
    EditAccountPage,
    ExchangeDetailsPage,
    SignupPersonalInfoAPage,
    SignupPersonalInfoBPage,
    HelpPage,
    SearchPage,
    SettingsPage,
    YourExchangePage,
    MainSearchGeoTagNotifiPage,
    ChatPage,
    HistoryPage,
    PopoverComponent,
    MerchantDetailsPage,
    NotificationsPage,
    Popover1Component,
    DetailTransactionPage,
    UpcomingPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    WelcomePage,
    ChoosePlanPage,
    WalkthroughPage,
    SplashPage,
    EditAccountPage,
    ExchangeDetailsPage,
    SignupPersonalInfoAPage,
    SignupPersonalInfoBPage,
    HelpPage,
    SearchPage,
    SettingsPage,
    YourExchangePage,
    MainSearchGeoTagNotifiPage,
    ChatPage,
    HistoryPage,
    PopoverComponent,
    MerchantDetailsPage,
    NotificationsPage,
    Popover1Component,
    DetailTransactionPage,
    UpcomingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

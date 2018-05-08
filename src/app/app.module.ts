import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
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

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    WelcomePage,
    ChoosePlanPage,
    WalkthroughPage,
    SplashPage,
    EditAccountPage,
    ExchangeDetailsPage
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
    ExchangeDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

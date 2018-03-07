import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AuthPage } from '../pages/auth/auth';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CurrencyPage } from '../pages/currency/currency';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';
import { WallPage } from '../pages/wall/wall';
import { AddPage } from '../pages/add/add';

import {AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


var config = {
  apiKey: "AIzaSyAkWn4YCKTZ7Njl5hG9cQ8SUArJ1QB71vE",
  authDomain: "turkishfirst-b78ed.firebaseapp.com",
  databaseURL: "https://turkishfirst-b78ed.firebaseio.com",
  projectId: "turkishfirst-b78ed",
  storageBucket: "",
  messagingSenderId: "643642858379"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AuthPage,
    LoginPage,
    RegisterPage,
    CurrencyPage,
    AboutPage,
    WallPage,
    SettingsPage,
    AddPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AuthPage,
    LoginPage,
    RegisterPage,
    CurrencyPage,
    AboutPage,
    WallPage,
    SettingsPage,
    AddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

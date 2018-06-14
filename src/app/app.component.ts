import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';

import { HeroComponent } from '../pages/hero/hero-component';
import { ItemComponent } from '../pages/item/item-component';
import { CreepComponent } from '../pages/creep/creep-component';
import { SmsBackupComponent } from '../pages/sms-backup/sms-backup-component';
import { AboutComponent } from '../pages/about/about-component';
import { ReportComponent } from '../pages/report/report-component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HeroComponent;
  pages: Array<{ title: string, component: any }>;
  constructor(
    public platform: Platform,
    public menu: MenuController,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private oneSignal: OneSignal
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Heroes', component: HeroComponent },
      { title: 'Items', component: ItemComponent },
      { title: 'Sms', component: SmsBackupComponent },
      { title: 'Report a bug', component: ReportComponent }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.oneSignal.startInit('b2f7f966-d8cc-11e4-bed1-df8f05be55ba', '703322744261');
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
      this.oneSignal.endInit();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
  goToAbout(){
    this.menu.close();
    this.nav.setRoot(AboutComponent);
  }
}

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ItemDetailsModule } from '../pages/item-details/item-details.module';
import { HeroModule } from '../pages/hero/hero.module';
import { CreepModule } from '../pages/creep/creep.module';
import { CreepDetailsModule } from '../pages/creep-details/creep-details.module';
import { HttpModule } from '@angular/http';
import { ItemModule } from '../pages/item/item.module';
import { HeroDetailsModule } from '../pages/hero-details/hero-details.module';
import { SmsBackupModule } from '../pages/sms-backup/sms-backup.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      mode: 'ios'
    }), BrowserModule,
    HeroModule,
    HttpModule,
    HeroDetailsModule,
    SmsBackupModule,
    ItemDetailsModule,Ng2SearchPipeModule,
    CreepModule,CreepDetailsModule,
    ItemModule
  ],
  bootstrap: [IonicApp],

  entryComponents: [
    MyApp
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }

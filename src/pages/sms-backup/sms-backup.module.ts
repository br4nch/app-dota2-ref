import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SmsBackupComponent } from './sms-backup-component';
import { SMS } from '@ionic-native/sms';
import { SQLite } from '@ionic-native/sqlite';
import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = {
  apiKey: "AIzaSyALHAgn9d_R_GzJjqzDBW_Y8evh97DZmn0",
  authDomain: "io-home-i2.firebaseapp.com",
  databaseURL: "https://io-home-i2.firebaseio.com",
  projectId: "io-home-i2",
  storageBucket: "io-home-i2.appspot.com",
  messagingSenderId: "1086854540260"
};
@NgModule({
  declarations: [
    SmsBackupComponent,
  ],
  imports: [
    IonicModule.forRoot(SmsBackupComponent),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  exports: [
    SmsBackupComponent
  ],
  providers: [SMS, SQLite],

})
export class SmsBackupModule { }

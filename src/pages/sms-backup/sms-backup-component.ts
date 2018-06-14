import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
declare var window: any;

@Component({
  selector: 'page-sms-backup-component',
  templateUrl: 'sms-backup-component.html',
})
export class SmsBackupComponent {
  public smses: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sms: SMS, private sqlite: SQLite) {
  }
  createDB() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {


        db.executeSql('create table danceMoves(name VARCHAR(32))', {})
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));


      })
      .catch(e => console.log(e));
  }
  getSMS() {
    if (window.SMS) window.SMS.listSMS({}, data => {
      setTimeout(() => {
        console.log(data);
        this.smses = data;
      }, 0)

    }, error => {
      console.log(error);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SmsBackupComponent');
  }

}

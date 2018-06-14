import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-hero-details-component',
  templateUrl: 'hero-details-component.html',
})
export class HeroDetailsComponent {
  selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.selectedItem = navParams.get('hero');

  }
  doAlert(lore) {
    let alert = this.alertCtrl.create({
      title: 'Lore',
      cssClass: 'font-size:20px',
      message: lore,
      buttons: ['Ok']
    });
    alert.present()
  }

  ionViewDidLoad() {
  }

}

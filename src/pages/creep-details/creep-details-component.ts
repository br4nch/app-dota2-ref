import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-creep-details-component',
  templateUrl: 'creep-details-component.html',
})
export class CreepDetailsComponent {
  selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.selectedItem = navParams.get('creep');

  }
 
  ionViewDidLoad() {
  }

}

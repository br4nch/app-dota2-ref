import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Creep } from './creep';
import { CreepService } from './creep.service';
import { CreepDetailsComponent } from '../creep-details/creep-details-component';
@Component({
  selector: 'page-creep',
  templateUrl: 'creep-component.html',
})
export class CreepComponent implements OnInit {
  errorMessage: any;
  creeps: Creep[];
  creepFilter: any;
  constructor(private creepService: CreepService, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
  ngOnInit(): void {
    this.creepService.getCreeps().subscribe(creeps => this.creeps = creeps, error => this.errorMessage = <any>error);
  }
  itemTapped($event, creep) {
    this.navCtrl.push(CreepDetailsComponent, { creep: creep });
  }
  
  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Search box',
      message: "Enter a name for creep you are looking for.",
      inputs: [
        {
          id: 'search',
          placeholder: 'Search...'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Search',
          handler: data => {
            this.creepFilter = (<HTMLInputElement>document.getElementById('search')).value;
          }
        }
      ]
    });
    prompt.present();
  }
}

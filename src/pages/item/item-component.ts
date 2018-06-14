import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Item } from "./item";
import { ItemService } from "./item.service";
import { ItemDetailsComponent } from '../item-details/item-details-component';


@Component({
  selector: 'page-item',
  templateUrl: 'item-component.html'
})
export class ItemComponent implements OnInit {
  errorMessage: any;
  items: Item[];
  itemFilter: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, private itemService: ItemService) {

  }
  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => this.items = items, error => this.errorMessage = <any>error);
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsComponent, {
      item: item
    });
  }
  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Search box',
      message: "Enter a name for item you are looking for.",
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
            this.itemFilter = (<HTMLInputElement>document.getElementById('search')).value;
          }
        }
      ]
    });
    prompt.present();
  }
}

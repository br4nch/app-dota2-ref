import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroDetailsComponent } from '../hero-details/hero-details-component';
@Component({
  selector: 'page-hero',
  templateUrl: 'hero-component.html',
})
export class HeroComponent implements OnInit {
  errorMessage: any;
  heroes: Hero[];
  heroFilter: any;
  constructor(private heroService: HeroService, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes, error => this.errorMessage = <any>error);
  }
  itemTapped($event, hero) {
    this.navCtrl.push(HeroDetailsComponent, { hero: hero });
  }
  
  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Search box',
      message: "Enter a name for hero you are looking for.",
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
            this.heroFilter = (<HTMLInputElement>document.getElementById('search')).value;
          }
        }
      ]
    });
    prompt.present();
  }
}

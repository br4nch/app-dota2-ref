import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HeroDetailsComponent } from './hero-details-component';


@NgModule({
  declarations: [
    HeroDetailsComponent
  ],
  imports: [
    IonicModule.forRoot(HeroDetailsComponent)
  ],
  exports: [
    HeroDetailsComponent
  ]
})
export class HeroDetailsModule {}

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CreepDetailsComponent } from './creep-details-component';


@NgModule({
  declarations: [
    CreepDetailsComponent
  ],
  imports: [
    IonicModule.forRoot(CreepDetailsComponent)
  ],
  exports: [
    CreepDetailsComponent
  ]
})
export class CreepDetailsModule {}

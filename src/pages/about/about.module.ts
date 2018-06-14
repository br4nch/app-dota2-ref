import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AboutComponent } from './about-component';

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    IonicModule.forRoot(AboutComponent),
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule {}

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ReportComponent } from './report-component';

@NgModule({
  declarations: [
    ReportComponent,
  ],
  imports: [
    IonicModule.forRoot(ReportComponent),
  ],
  exports: [
    ReportComponent
  ]
})
export class ReportModule {}

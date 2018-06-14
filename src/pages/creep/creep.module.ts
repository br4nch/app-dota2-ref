import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { CreepComponent } from './creep-component';
import { CreepService } from './creep.service';
import { OrderBy } from './creep.pipe';
@NgModule({
    imports: [Ng2SearchPipeModule,
        IonicModule.forRoot(CreepComponent),
    ],
    exports: [CreepComponent],
    declarations: [CreepComponent, OrderBy],
    providers: [CreepService],
})
export class CreepModule { }

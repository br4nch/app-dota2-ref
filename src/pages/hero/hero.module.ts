import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { HeroComponent } from './hero-component';
import { HeroService } from './hero.service';
import { OrderBy } from './hero.pipe';
@NgModule({
    imports: [Ng2SearchPipeModule,
        IonicModule.forRoot(HeroComponent),
    ],
    exports: [HeroComponent],
    declarations: [HeroComponent, OrderBy],
    providers: [HeroService],
})
export class HeroModule { }

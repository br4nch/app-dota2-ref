import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";

import { ItemDetailsComponent }   from './item-details-component';

@NgModule({
    imports: [IonicModule.forRoot(ItemDetailsComponent)],
    exports: [ItemDetailsComponent],
    declarations: [ItemDetailsComponent],
})
export class ItemDetailsModule { }

import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";

import { ItemComponent }   from './item-component';
import { ItemService } from "./item.service";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderBy } from "./item.pipe";
@NgModule({
    imports: [IonicModule.forRoot(ItemComponent),Ng2SearchPipeModule],
    exports: [ItemComponent],
    declarations: [ItemComponent, OrderBy],
    providers: [ItemService]
})
export class ItemModule { }

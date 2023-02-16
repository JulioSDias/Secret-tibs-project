import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { LayoutComponent } from "./layout.component";
import { MeeleComponent } from "./meele.component";
import { DistanceComponent } from "./distance.component";
import { MagicComponent } from "./magic.component";
import { ShieldingComponent } from "./shielding.component";
import { FistComponent } from "./fist.component";
import { SkillingRoutingModule } from "./skilling-routing.module";

@NgModule({
    declarations: [
        LayoutComponent,
        DistanceComponent,
        MeeleComponent,
        MagicComponent,
        FistComponent,
        ShieldingComponent
    ],
    imports: [
        SkillingRoutingModule,
        CommonModule,
    ]
})

export class SkillingModule { }
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { DamageRoutingModule } from "./damage-routing.module";
import { LayoutComponent } from "./layout.component";
import { MeeleComponent } from "./meele.component";
import { DistanceComponent } from "./distance.component";
import { MagicComponent } from "./magic.component";

@NgModule({
    declarations: [
        LayoutComponent,
        DistanceComponent,
        MeeleComponent,
        MagicComponent,
       
    ],
    imports: [
        DamageRoutingModule,
        CommonModule,
    ]
})

export class DamageModule { }


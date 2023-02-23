import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutComponent } from "./layout.component";
import { MeeleComponent } from "./meele.component";
import { DistanceComponent } from "./distance.component";
import { MagicComponent } from "./magic.component";
import { ShieldingComponent } from "./shielding.component";
import { FistComponent } from "./fist.component";
import { SkillingRoutingModule } from "./skilling-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

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
        ReactiveFormsModule,
        NgbModule
    ]
})

export class SkillingModule { }
import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

import { LayoutComponent } from "./layout.component";
import { MeeleComponent } from "./meele.component";
import { DistanceComponent } from "./distance.component";
import { MagicComponent } from "./magic.component";
import { ShieldingComponent } from "./shielding.component";
import { FistComponent } from "./fist.component";



const routes: Routes = [
    {
        path: '', component: LayoutComponent, 
        children: [
            {path: 'distance', component: DistanceComponent},
            {path: 'meele', component: MeeleComponent},
            {path: 'magiclevel', component: MagicComponent},
            {path: 'shielding', component: ShieldingComponent},
            {path: 'fist', component: FistComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class SkillingRoutingModule { }
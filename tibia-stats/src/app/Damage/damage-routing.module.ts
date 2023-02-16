import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

import { LayoutComponent } from "./layout.component";
import { MeeleComponent } from "./meele.component";
import { DistanceComponent } from "./distance.component";
import { MagicComponent } from "./magic.component";



const routes: Routes = [
    {
        path: '', component: LayoutComponent, 
        children: [
            {path: 'distance', component: DistanceComponent},
            {path: 'meele', component: MeeleComponent},
            {path: 'magic', component: MagicComponent},
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

export class DamageRoutingModule { }
import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

import { HomeComponent } from "./Home/home.component";
import { HealingComponent } from "./Healing/healing.component";
import { StaminaComponent } from "./Stamina/stamina.component";

const skillingModule = () => import("./Skilling/skilling.module").then(x => x.SkillingModule); 
const damageModule = () => import("./Damage/damage.module").then(x => x.DamageModule);

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'healing', component: HealingComponent},
    {path: 'skilling', loadChildren: skillingModule},
    {path: 'damage', loadChildren: damageModule},
    {path: 'stamina', component: StaminaComponent},
    {path: '**', redirectTo: ''}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})

export class AppRoutingModule { }


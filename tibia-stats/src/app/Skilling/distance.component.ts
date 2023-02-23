import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { MathService } from "../Shared/Services/math.service";
import { WikiService } from "../Shared/Services/wiki.service";

@Component({
    templateUrl: "distance.component.html"
})

export class DistanceComponent implements OnInit{ 
    form!: FormGroup;
    vocation!: string;
    constructor(
        private formBuilder: FormBuilder,
        private mathService: MathService,
        private wikiService: WikiService
    ) { }

    weapons = ["bow", "croosbow", "warsinger bow", "modified crossbow"];
    ammos = ["arrow", "sniper arrow", "bolt", "piercing bolt"];

    ngOnInit(){
        this.form = this.formBuilder.group({
            vocation: [''],
            skill: [''],
            toGo: [''],
            desiredSkill: [''],
            weapon: [''],
            ammoCost: [''],
            ammo: ['']
        });   
    }

    get values() {
        return this.form.controls;
    }

    OnSubmit(){
        console.log(this.values);
        let hits = this.mathService.SkillFormula("distance", this.values['vocation'].value, this.values['skill'].value, this.values['toGo'].value, this.values['desiredSkill'].value);
        console.log(hits);
    }

    Test(){
        console.log("teste");
        this.wikiService.getItems().pipe().subscribe({
            next: (data: any) => {
                console.log(data);
            }
        })
    }
}
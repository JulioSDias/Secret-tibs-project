import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class MathService {
    SkillFormula(skill: string, vocation: string, starterSkill: number, toGo: number, desiredSkill: number) : number {
        let hits: number = 0;

        switch(skill) {
            case "distance":
                
                    switch(vocation){
                        case "paladin":
                            
                            //% to number
                            toGo = toGo/100;

                            //calculte rest of first level
                            hits = (25 * (1.1**((starterSkill+1)-10))) * toGo;

                            for(let i = starterSkill + 2; i <= desiredSkill; i++){
                                hits += 25 * (1.1**(i-10));
                            }
                            hits = Math.ceil(hits);
                        return hits;
                        
                    }
            break;
        }
        return 0; 
    }
}
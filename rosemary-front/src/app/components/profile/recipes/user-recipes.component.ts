import { Component, effect } from "@angular/core";
import { AppComponent } from "../../../app.component";

@Component({
    selector: 'user-recipes',
    templateUrl: './user-recipes.component.html',
    styleUrl: './user-recipes.component.scss',
    standalone:true
})

export class UserRecipes {
    recipesCounter: number | undefined
    constructor(public user:AppComponent) {
        effect(() => {
            this.recipesCounter = this.user.user().recipeCount;
        })
        //using effect to update everytime the recipes counter component so the component renders properly
    }
}
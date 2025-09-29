import { Component, effect } from "@angular/core";
import { AppComponent } from "../../../app.component";
import { RecipeModal } from "../../landing-pages/modals/recipe-modal.component";

@Component({
    selector: 'user-recipes',
    templateUrl: './user-recipes.component.html',
    styleUrl: './user-recipes.component.scss',
    imports: [RecipeModal],
    standalone:true
})

export class UserRecipes {
    recipesCounter: number | undefined
    openRecipeModal: boolean = false;
    constructor(public user:AppComponent) {
        effect(() => {
            this.recipesCounter = this.user.user().recipeCount;
        })
        //using effect to update everytime the recipes counter component so the component renders properly
    }
    openModal() {
        this.openRecipeModal = true;
    }
    closeModal() {
        this.openRecipeModal = false;
    }
}
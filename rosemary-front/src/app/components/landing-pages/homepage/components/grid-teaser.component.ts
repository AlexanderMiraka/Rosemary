import { Component,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RecipeCard } from "../../../utils/cards/recipe-card.component";

@Component({
    selector: "grid-teaser",
    templateUrl: "./grid-teaser.component.html",
    styleUrls: ["./grid-teaser.component.scss"],
    imports: [RecipeCard],
    standalone:true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],//If the compiler complains about custom elemment tags
    
})

export class GridTeaser {}
import { Component } from "@angular/core";
import {LandingTeaser} from "./components/landing-teaser.component";
import { GridTeaser } from "./components/grid-teaser.component";

@Component({
    selector: "homepage",
    templateUrl: "./homepage.component.html",
    styleUrl: "./homepage.component.scss",
    imports: [LandingTeaser, GridTeaser],
    standalone:true,
})

export class HomepageComponent {}
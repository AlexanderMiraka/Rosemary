import { Component } from "@angular/core";
import {LandingTeaser} from "./components/landing-teaser.component";

@Component({
    selector: "homepage",
    templateUrl: "./homepage.component.html",
    styleUrl: "./homepage.component.scss",
    imports: [LandingTeaser],
    standalone:true,
})

export class HomepageComponent {}
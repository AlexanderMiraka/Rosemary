import { Component, EventEmitter, Output } from "@angular/core";
import { AppComponent } from "../../app.component";
import {Router} from '@angular/router';
import { UserRecipes } from "./recipes/user-recipes.component";

@Component({
    selector: 'user-profile',
    templateUrl: './user-profile.component.html',
    standalone:true,
    styleUrl: './user-profile.component.scss',
    imports: [UserRecipes]
})
export class UserProfile {
    constructor(public user:AppComponent, private router:Router) {
    }
    @Output() loginHeader = new EventEmitter<boolean>();
    logout() {
        this.user.setUser({});
        this.router.navigate(['/']);
        this.user.setUserIsLogged(false);
    }
}
import { Component, EventEmitter, Output } from "@angular/core";
import { AppComponent } from "../../app.component";
import {Router} from '@angular/router';

@Component({
    selector: 'user-profile',
    templateUrl: './user-profile.component.html',
    standalone:true,
    styleUrl: './user-profile.scss',
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
import { Component, Input, model, Output } from "@angular/core";
import { loginModal } from "../../components/landing-pages/modals/login-modal.component";
import { AppComponent } from "../../app.component";

@Component({
    selector: "rosemary-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    standalone:true,
    imports:[loginModal],
})
export class rosemaryHeader {
    constructor(public user:AppComponent){}
    loginModal = false;
    //@input is used to pass data from parent to child
    // @Input() userIsLogged: boolean = false;//initially set to false. Receives from parent
    showLoginModal(event:MouseEvent): void {
        event.preventDefault();
        this.loginModal = true;
    }
}
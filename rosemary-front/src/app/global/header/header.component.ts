import { Component, Input, model, Output } from "@angular/core";
import { loginModal } from "../../components/landing-pages/login/login-modal.component";

@Component({
    selector: "rosemary-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    standalone:true,
    imports:[loginModal],
})
export class rosemaryHeader {
    loginModal = false;
    //@input is used to pass data from parent to child
    // @Input() userIsLogged: boolean = false;//initially set to false. Receives from parent
    userIsLogged: boolean = false;
    showLoginModal(event:MouseEvent): void {
        event.preventDefault();
        this.loginModal = true;
    }
    showLoginStrip(e:boolean) {
        this.userIsLogged = e;
    }
}
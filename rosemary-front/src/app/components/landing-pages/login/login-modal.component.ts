import { Component, Input, Output,EventEmitter, } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { registerUser } from "../../utils/fucntions/calls";

@Component ({
    selector: "login-modal",
    templateUrl: "./login-modal.component.html",
    styleUrls: ["./login-modal.component.scss"],
    imports: [FormsModule],
    standalone: true,
})
export class loginModal {
    @Output() closeModal = new EventEmitter<boolean>();//passes false to parent when modal closes
    close() {
        this.closeModal.emit(false);
    }
    modalShow: String = "login";
    toggleModal(toogle: String) : String{
        this.modalShow = toogle;
        return this.modalShow;
    }
    registerUser = {
        username: "",
        email: "",
        password: "",
        mobile:"",
        biography: "",
    }
    formSubmit(form: any) {
        registerUser(this.registerUser);
        this.close();
    }
}
import { Component, Input, Output,EventEmitter } from "@angular/core";

@Component ({
    selector: "login-modal",
    templateUrl: "./login-modal.component.html",
    styleUrls: ["./login-modal.component.scss"],
    standalone: true,
})

export class loginModal {
    @Output() closeModal = new EventEmitter<boolean>();//passes false to parent when modal closes
    close() {
        this.closeModal.emit(false);
    }
}
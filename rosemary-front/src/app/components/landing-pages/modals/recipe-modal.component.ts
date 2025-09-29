import { Component, signal, EventEmitter, Output } from "@angular/core";

@Component({
    templateUrl: "./recipe-modal.component.html",
    styleUrl: "./recipe-modal.component.scss",
    selector: 'recipe-modal',
    standalone: true,
})

export class RecipeModal {
    constructor() {}
    @Output() modalIsOpen = new EventEmitter<void>();
    closeModal() {
        this.modalIsOpen.emit();
    }
}
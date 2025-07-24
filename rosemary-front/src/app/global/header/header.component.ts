import { Component, Input, model } from "@angular/core";

@Component({
    selector: "rosemary-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    standalone:true,
})
export class rosemaryHeader {
    @Input() userIsLogged: boolean = false;
}
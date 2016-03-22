import {Component, OnInit} from "angular2/core";

@Component({
    selector: "mvc",
    templateUrl: "/partial/message"
})
export class MvcComponent implements OnInit {
    message: string;

    constructor() { }

    ngOnInit() {
        this.message = "Hello I am partial path coming from Message.cshtml"
    }
}
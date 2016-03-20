import { Component, Input } from "angular2/core";
import { DIRECTIVE_PREFIX } from "../../constants/constants";
import { NoteService } from "../../services/note/note.service";
import { NoteInterface } from "../../interfaces/note/note";

@Component({
    selector: DIRECTIVE_PREFIX + "note",
    templateUrl: "app/components/note/note.component.html",
})
export class Note {
    @Input("note") note: string;

    constructor() {
        console.log("note:", this.note);
    }
}
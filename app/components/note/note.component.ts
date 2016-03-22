import { Component, Input } from "angular2/core";
import { DIRECTIVE_PREFIX } from "../../constants/constants";
import { NoteService } from "../../services/note/note.service";
import { NoteInterface } from "../../interfaces/note/note";
import { TextareaDirective } from "../textarea/textarea.component";
import { ROUTER_DIRECTIVES } from "angular2/router";

@Component({
    selector: DIRECTIVE_PREFIX + "note",
    templateUrl: "app/components/note/note.component.html",
    styleUrls: ["app/components/note/note.component.css"],
    directives: [TextareaDirective, ROUTER_DIRECTIVES],
})
export class NoteComponent {
    @Input("note") note: string;
}
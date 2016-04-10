import { ViewChildren, Component, OnInit } from "angular2/core";
import { DIRECTIVE_PREFIX } from "../../constants/constants";
import { NoteInterface } from "../../interfaces/note/note";
import { NoteService } from "../../services/note/note.service";
import { NoteComponent } from "../note/note.component";
import { ROUTER_DIRECTIVES } from "angular2/router";
import { FirebaseNoteService } from "../../services/note/firebase-note.service";
import { FirebaseService } from "../../services/firebase/firebase.service";

@Component({
    selector: DIRECTIVE_PREFIX + "notes-list",
    templateUrl: "app/components/notes-list/notes-list.component.html",
    providers: [NoteService, FirebaseNoteService, FirebaseService],
    directives: [NoteComponent, ROUTER_DIRECTIVES],
})
export class NotesList implements OnInit {
    @ViewChildren(NoteComponent) viewChildren:NoteComponent;
    notes: NoteInterface[];

    constructor(private _NoteService: NoteService) {}
    ngOnInit() {
        this._NoteService.get(null).then(notes => this.notes = notes);
    }
    prependEmptyNote() {
        this.notes.unshift({
            id: null,
            text: null,
            created: null,
            updated: null,
            tags: [],
            priority: null,
            totalDaysOfArchival: null,
        });
        scroll(0, 0);
    }
}

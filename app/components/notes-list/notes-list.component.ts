import { Component, OnInit } from "angular2/core";
import { DIRECTIVE_PREFIX } from "../../constants/constants";
import { NoteInterface } from "../../interfaces/note/note";
import { NoteService } from "../../services/note/note.service";
import { Note } from "../note/note.component";
import { ROUTER_DIRECTIVES } from "angular2/router";

@Component({
    selector: DIRECTIVE_PREFIX + "notes-list",
    templateUrl: "app/components/notes-list/notes-list.component.html",
    providers: [NoteService/*, ROUTER_PROVIDERS*/],
    directives: [Note, ROUTER_DIRECTIVES],
})
export class NotesList implements OnInit {
    notes: NoteInterface[];
    constructor(
        private _NoteService: NoteService/*,
        //private _router: Router*/
    ) {}
    ngOnInit() {
        this._NoteService.promiseNotes()
        .then(notes => this.notes = notes)
        .then(notes => console.log(notes));
    }
    viewNotesWithTag() {
        //this._router.navigate(["Tag", { tagName: "testingTag" }]);
    }
}

import { Component, OnInit } from "angular2/core";
import { DIRECTIVE_PREFIX } from "../../constants/constants";
import { NoteInterface } from "../../interfaces/note/note";
import { NoteService } from "../../services/note/note.service";
import { Note } from "../note/note.component";

@Component({
    selector: DIRECTIVE_PREFIX + "notes-list",
    templateUrl: "app/components/notes-list/notes-list.component.html",
    providers: [NoteService],
    directives: [Note]
})
export class NotesList implements OnInit {
    title: string = "Notes list title 1";
    notes: NoteInterface[];
    constructor(private _NoteService: NoteService) {}
    ngOnInit() {
        this._NoteService.promiseNotes()
        .then(notes => this.notes = notes);
    }
}

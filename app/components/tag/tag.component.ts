import { Component } from "angular2/core";
import { RouteParams } from "angular2/router";
import { DIRECTIVE_PREFIX } from "../../constants/constants";
import { NoteComponent } from "../note/note.component";
import { NoteService } from "../../services/note/note.service";
import { NoteInterface } from "../../interfaces/note/note";
import { FirebaseNoteService } from "../../services/note/firebase-note.service";
import { FirebaseService } from "../../services/firebase/firebase.service";

@Component({
    selector: DIRECTIVE_PREFIX + "tag",
    templateUrl: "app/components/tag/tag.component.html",
    directives: [NoteComponent],
    providers: [NoteService, FirebaseNoteService, FirebaseService]
})
export class TagComponent {
    title: string = "Tag title";
    notes: NoteInterface[];
    constructor(
        private _routeParams: RouteParams,
        // private _router: Router,
        private _NoteService: NoteService
    ) {
        const tagName = _routeParams.get("tagName");
        this.title = tagName;
        this._NoteService.get(tagName).then(notes => this.notes = notes);
    }
}

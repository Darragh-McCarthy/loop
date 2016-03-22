import { Component } from "angular2/core";
import { Router, RouteParams } from "angular2/router";
import { DIRECTIVE_PREFIX } from "../../constants/constants";
import { NoteComponent } from "../note/note.component";
import { NoteService } from "../../services/note/note.service";
import { NoteInterface } from "../../interfaces/note/note";

@Component({
    selector: DIRECTIVE_PREFIX + "tag",
    templateUrl: "app/components/tag/tag.component.html",
    directives: [NoteComponent],
    providers: [NoteService]
})
export class TagComponent {
    title: string = "Tag title";
    notes: NoteInterface[];
    constructor(
        private _routeParams: RouteParams,
        private _router: Router,
        private _NoteService: NoteService
    ) {
        const tagName = _routeParams.get("tagName");
        this.title = tagName;
        this._NoteService.promiseNotesByTagName(tagName).then(notes => this.notes = notes);
    }
}

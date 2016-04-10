import { Injectable } from "angular2/core";
import { MOCK_NOTES } from "../../mock/notes/mock-notes";
import { FirebaseNoteService } from "./firebase-note.service";

@Injectable()
export class NoteService {
    constructor(private _FirebaseNoteService: FirebaseNoteService) {}
    get(tagName) {
        return this._FirebaseNoteService.get(tagName).then(function(notes) {
            notes.forEach(function(each) {
                //each.tags = each.tags || [];
            });
            return notes;
        });
    }
    promiseNotesByTagName(tagName) {}
}
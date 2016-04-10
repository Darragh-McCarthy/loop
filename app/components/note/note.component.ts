import { Component, Input, OnInit } from "angular2/core";
import {
    NOTE_PRIORITY_WHEN_ARCHIVED,
    DIRECTIVE_PREFIX
} from "../../constants/constants";

import { FirebaseNoteService } from "../../services/note/firebase-note.service";
import { NoteInterface } from "../../interfaces/note/note";
import { TextareaDirective } from "../textarea/textarea.component";
import { ROUTER_DIRECTIVES } from "angular2/router";

const TAG_REGEX = /#\w+/g;

@Component({
    selector: DIRECTIVE_PREFIX + "note",
    templateUrl: "app/components/note/note.component.html",
    styleUrls: ["app/components/note/note.component.css"],
    directives: [TextareaDirective, ROUTER_DIRECTIVES],
})
export class NoteComponent {
    @Input("note") note: NoteInterface;
    @Input("isNoteFocused") isNoteFocused: boolean;
    areTagsEditable: boolean = false;
    isSaving: boolean = false;
    isArchived: boolean = false;
    archiveDuration = null;
    isUpdated = false;

    ARCHIVE_PERIOD = {
        WEEK: 9,
        MONTH: 30,
        YEAR: 396,
        INDEFINITE: 365 * 100,
    };

    constructor(private _FirebaseNoteService: FirebaseNoteService) {}
    ngOnInit() {
        this.note.text = this.note.text || "";
    }
    saveNote() {
        //return;
        if (this.isUpdated && this.note.text.trim().length) {
            // prevent original object properties from being overridden
            let noteCopy = Object.assign({}, this.note);
            noteCopy.updated = new Date();
            noteCopy.created = noteCopy.created || new Date();
            noteCopy.priority = noteCopy.priority || new Date().getTime();

            let promiseSave;
            if (noteCopy.id) {
                console.log(noteCopy);
                promiseSave = this._FirebaseNoteService.update(noteCopy);
            } else {
                promiseSave = this._FirebaseNoteService.create(noteCopy);
            }
            this.isSaving = true;
            promiseSave.then((newOrUpdatedNote) => {
                this.note = newOrUpdatedNote;
                this.isSaving = false;
                this.isUpdated = false;
                console.log(newOrUpdatedNote);
            })
            .catch(() => this.isSaving = false);
        }
    }

    private archive(period) {
        this.isUpdated = true;
        this.note.priority = NOTE_PRIORITY_WHEN_ARCHIVED;
        this.note.totalDaysOfArchival = period;
        this.saveNote();
    }
    archiveFor1Week() { this.archive(7); }
    archiveFor1Month() { this.archive(30); }
    archiveFor1Year() { this.archive(365); }
    archiveFor100Years() { this.archive(365 * 100); }

    undoArchive() {
        this.isUpdated = true;
        this.note.priority = new Date().getTime();
        this.note.totalDaysOfArchival = null;
        this.saveNote();
    }

    appendHashTags() {
        let stringifiedTags = "\n";
        if (this.note.tags) {
            this.note.tags.forEach(each => stringifiedTags += " #" + each);
            this.note.text += stringifiedTags;
        }
    }
    stripHashTags() {
        if (this.note.tags) {
            const matchingTags = this.note.text.match(TAG_REGEX);
            if (matchingTags) {
                this.note.tags = matchingTags.map(function(eachTag) {
                    return eachTag.replace("#", "");
                });
            }
            this.note.text = this.note.text.replace(TAG_REGEX, "").trim();
        }
    }
}
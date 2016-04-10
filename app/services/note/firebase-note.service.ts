import { Injectable } from "angular2/core";
import { FirebaseService } from "../firebase/firebase.service";
import { NOTE_PRIORITY_WHEN_ARCHIVED } from "../../constants/constants";

const FIREBASE_NOTE = "TestNote";

@Injectable()
export class FirebaseNoteService {
    private _Firebase;
    constructor(private _FirebaseService: FirebaseService) {
        this._Firebase = _FirebaseService.getFirebaseRef();
    }
    create(note) {
        note.created = note.created.getTime();
        note.updated = note.updated.getTime();
        let tags = note.tags;
        note.tags = {};
        tags.forEach(each => {
            tags[each] = true;
        });
        const promise = this._Firebase.child(FIREBASE_NOTE).push(note);
        return promise.then(() => {
            note.id = promise.key();
            note.created = new Date(note.created);
            note.updated = new Date(note.updated);
            let tags = note.tags;
            note.tags = [];
            for (let key in tags) {
                note.tags.push(key);
            }
            return note;
        });
    }
    update(note) {
        const firebaseNoteId = note.id;
        delete note.id;
        note.created = note.created.getTime();
        note.updated = note.updated.getTime();
        let tags = note.tags;
        note.tags = {};
        tags.forEach(each => {
            note.tags[each] = true;
        });

        console.log("updating", note);
        return this._Firebase.child(FIREBASE_NOTE)
            .child(firebaseNoteId)
            .update(note)
            .then(() => {
                note.created = new Date(note.created);
                note.updated = new Date(note.updated);
                note.id = firebaseNoteId;
                let tags = note.tags;
                note.tags = [];
                for (let key in tags) {
                    note.tags.push(key);
                }
                return note;
            })
            .catch((e) => console.log(e) );
    }
    get(tagName) {
        const me = this;
        let query = this._Firebase.child(FIREBASE_NOTE);
        if (tagName) {
            console.log("tagName", tagName);
            query = query.orderByChild("tags/" + tagName).equalTo(true);
        } else {
            query = query.orderByChild("priority");
        }
        return query
            .once("value")
            .then(function(snapshot) {
                let notes = [];
                snapshot.forEach(function(eachSnapshotItem) {
                    console.log("foreach");
                    let eachFirebaseNote = eachSnapshotItem.val();
                    if (eachFirebaseNote.totalDaysOfArchival) {
                        const now = new Date().getTime();
                        let archivedUntilDate = new Date(eachFirebaseNote.updated);
                        archivedUntilDate.setDate(archivedUntilDate.getDate() + eachFirebaseNote.totalDaysOfArchival);
                        if (now < archivedUntilDate.getTime()) {
                            return;
                        }
                    }
                    let tags = eachFirebaseNote.tags;
                    eachFirebaseNote.tags = [];
                    for (let key in tags) {
                        eachFirebaseNote.tags.push(key);
                    }
                    eachFirebaseNote.id = eachSnapshotItem.key();
                    eachFirebaseNote.created = eachFirebaseNote.created && new Date(eachFirebaseNote.created);
                    eachFirebaseNote.updated = eachFirebaseNote.updated && new Date(eachFirebaseNote.updated);
                    notes.push(eachFirebaseNote);
                });
                notes.reverse();
                console.log(notes);
                return notes;
            });
    }

    /*
  location: {
    city: "San Francisco",
  }
myFirebaseRef.child("location/city").on("value", function(snapshot) {});
myDataRef.on('child_added', function(snapshot) {
*/
}


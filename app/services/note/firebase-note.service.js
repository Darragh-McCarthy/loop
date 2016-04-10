System.register(["angular2/core", "../firebase/firebase.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, firebase_service_1;
    var FIREBASE_NOTE, FirebaseNoteService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (firebase_service_1_1) {
                firebase_service_1 = firebase_service_1_1;
            }],
        execute: function() {
            FIREBASE_NOTE = "TestNote";
            FirebaseNoteService = (function () {
                function FirebaseNoteService(_FirebaseService) {
                    this._FirebaseService = _FirebaseService;
                    this._Firebase = _FirebaseService.getFirebaseRef();
                }
                FirebaseNoteService.prototype.create = function (note) {
                    note.created = note.created.getTime();
                    note.updated = note.updated.getTime();
                    var tags = note.tags;
                    note.tags = {};
                    tags.forEach(function (each) {
                        tags[each] = true;
                    });
                    var promise = this._Firebase.child(FIREBASE_NOTE).push(note);
                    return promise.then(function () {
                        note.id = promise.key();
                        note.created = new Date(note.created);
                        note.updated = new Date(note.updated);
                        var tags = note.tags;
                        note.tags = [];
                        for (var key in tags) {
                            note.tags.push(key);
                        }
                        return note;
                    });
                };
                FirebaseNoteService.prototype.update = function (note) {
                    var firebaseNoteId = note.id;
                    delete note.id;
                    note.created = note.created.getTime();
                    note.updated = note.updated.getTime();
                    var tags = note.tags;
                    note.tags = {};
                    tags.forEach(function (each) {
                        note.tags[each] = true;
                    });
                    console.log("updating", note);
                    return this._Firebase.child(FIREBASE_NOTE)
                        .child(firebaseNoteId)
                        .update(note)
                        .then(function () {
                        note.created = new Date(note.created);
                        note.updated = new Date(note.updated);
                        note.id = firebaseNoteId;
                        var tags = note.tags;
                        note.tags = [];
                        for (var key in tags) {
                            note.tags.push(key);
                        }
                        return note;
                    })
                        .catch(function (e) { return console.log(e); });
                };
                FirebaseNoteService.prototype.get = function (tagName) {
                    var me = this;
                    var query = this._Firebase.child(FIREBASE_NOTE);
                    if (tagName) {
                        console.log("tagName", tagName);
                        query = query.orderByChild("tags/" + tagName).equalTo(true);
                    }
                    else {
                        query = query.orderByChild("priority");
                    }
                    return query
                        .once("value")
                        .then(function (snapshot) {
                        var notes = [];
                        snapshot.forEach(function (eachSnapshotItem) {
                            console.log("foreach");
                            var eachFirebaseNote = eachSnapshotItem.val();
                            if (eachFirebaseNote.totalDaysOfArchival) {
                                var now = new Date().getTime();
                                var archivedUntilDate = new Date(eachFirebaseNote.updated);
                                archivedUntilDate.setDate(archivedUntilDate.getDate() + eachFirebaseNote.totalDaysOfArchival);
                                if (now < archivedUntilDate.getTime()) {
                                    return;
                                }
                            }
                            var tags = eachFirebaseNote.tags;
                            eachFirebaseNote.tags = [];
                            for (var key in tags) {
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
                };
                FirebaseNoteService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [firebase_service_1.FirebaseService])
                ], FirebaseNoteService);
                return FirebaseNoteService;
            }());
            exports_1("FirebaseNoteService", FirebaseNoteService);
        }
    }
});
//# sourceMappingURL=firebase-note.service.js.map
System.register(["angular2/core", "../../constants/constants", "../../services/note/firebase-note.service", "../textarea/textarea.component", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, constants_1, firebase_note_service_1, textarea_component_1, router_1;
    var TAG_REGEX, NoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            },
            function (firebase_note_service_1_1) {
                firebase_note_service_1 = firebase_note_service_1_1;
            },
            function (textarea_component_1_1) {
                textarea_component_1 = textarea_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            TAG_REGEX = /#\w+/g;
            NoteComponent = (function () {
                function NoteComponent(_FirebaseNoteService) {
                    this._FirebaseNoteService = _FirebaseNoteService;
                    this.areTagsEditable = false;
                    this.isSaving = false;
                    this.isArchived = false;
                    this.archiveDuration = null;
                    this.isUpdated = false;
                    this.ARCHIVE_PERIOD = {
                        WEEK: 9,
                        MONTH: 30,
                        YEAR: 396,
                        INDEFINITE: 365 * 100,
                    };
                }
                NoteComponent.prototype.ngOnInit = function () {
                    this.note.text = this.note.text || "";
                };
                NoteComponent.prototype.saveNote = function () {
                    var _this = this;
                    //return;
                    if (this.isUpdated && this.note.text.trim().length) {
                        // prevent original object properties from being overridden
                        var noteCopy = Object.assign({}, this.note);
                        noteCopy.updated = new Date();
                        noteCopy.created = noteCopy.created || new Date();
                        noteCopy.priority = noteCopy.priority || new Date().getTime();
                        var promiseSave = void 0;
                        if (noteCopy.id) {
                            console.log(noteCopy);
                            promiseSave = this._FirebaseNoteService.update(noteCopy);
                        }
                        else {
                            promiseSave = this._FirebaseNoteService.create(noteCopy);
                        }
                        this.isSaving = true;
                        promiseSave.then(function (newOrUpdatedNote) {
                            _this.note = newOrUpdatedNote;
                            _this.isSaving = false;
                            _this.isUpdated = false;
                            console.log(newOrUpdatedNote);
                        })
                            .catch(function () { return _this.isSaving = false; });
                    }
                };
                NoteComponent.prototype.archive = function (period) {
                    this.isUpdated = true;
                    this.note.priority = constants_1.NOTE_PRIORITY_WHEN_ARCHIVED;
                    this.note.totalDaysOfArchival = period;
                    this.saveNote();
                };
                NoteComponent.prototype.archiveFor1Week = function () { this.archive(7); };
                NoteComponent.prototype.archiveFor1Month = function () { this.archive(30); };
                NoteComponent.prototype.archiveFor1Year = function () { this.archive(365); };
                NoteComponent.prototype.archiveFor100Years = function () { this.archive(365 * 100); };
                NoteComponent.prototype.undoArchive = function () {
                    this.isUpdated = true;
                    this.note.priority = new Date().getTime();
                    this.note.totalDaysOfArchival = null;
                    this.saveNote();
                };
                NoteComponent.prototype.appendHashTags = function () {
                    var stringifiedTags = "\n";
                    if (this.note.tags) {
                        this.note.tags.forEach(function (each) { return stringifiedTags += " #" + each; });
                        this.note.text += stringifiedTags;
                    }
                };
                NoteComponent.prototype.stripHashTags = function () {
                    if (this.note.tags) {
                        var matchingTags = this.note.text.match(TAG_REGEX);
                        if (matchingTags) {
                            this.note.tags = matchingTags.map(function (eachTag) {
                                return eachTag.replace("#", "");
                            });
                        }
                        this.note.text = this.note.text.replace(TAG_REGEX, "").trim();
                    }
                };
                __decorate([
                    core_1.Input("note"), 
                    __metadata('design:type', Object)
                ], NoteComponent.prototype, "note", void 0);
                __decorate([
                    core_1.Input("isNoteFocused"), 
                    __metadata('design:type', Boolean)
                ], NoteComponent.prototype, "isNoteFocused", void 0);
                NoteComponent = __decorate([
                    core_1.Component({
                        selector: constants_1.DIRECTIVE_PREFIX + "note",
                        templateUrl: "app/components/note/note.component.html",
                        styleUrls: ["app/components/note/note.component.css"],
                        directives: [textarea_component_1.TextareaDirective, router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [firebase_note_service_1.FirebaseNoteService])
                ], NoteComponent);
                return NoteComponent;
            }());
            exports_1("NoteComponent", NoteComponent);
        }
    }
});
//# sourceMappingURL=note.component.js.map
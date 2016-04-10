System.register(["angular2/core", "../../constants/constants", "../../services/note/note.service", "../note/note.component", "angular2/router", "../../services/note/firebase-note.service", "../../services/firebase/firebase.service"], function(exports_1, context_1) {
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
    var core_1, constants_1, note_service_1, note_component_1, router_1, firebase_note_service_1, firebase_service_1;
    var NotesList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            },
            function (note_service_1_1) {
                note_service_1 = note_service_1_1;
            },
            function (note_component_1_1) {
                note_component_1 = note_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (firebase_note_service_1_1) {
                firebase_note_service_1 = firebase_note_service_1_1;
            },
            function (firebase_service_1_1) {
                firebase_service_1 = firebase_service_1_1;
            }],
        execute: function() {
            NotesList = (function () {
                function NotesList(_NoteService) {
                    this._NoteService = _NoteService;
                }
                NotesList.prototype.ngOnInit = function () {
                    var _this = this;
                    this._NoteService.get(null).then(function (notes) { return _this.notes = notes; });
                };
                NotesList.prototype.prependEmptyNote = function () {
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
                };
                __decorate([
                    core_1.ViewChildren(note_component_1.NoteComponent), 
                    __metadata('design:type', note_component_1.NoteComponent)
                ], NotesList.prototype, "viewChildren", void 0);
                NotesList = __decorate([
                    core_1.Component({
                        selector: constants_1.DIRECTIVE_PREFIX + "notes-list",
                        templateUrl: "app/components/notes-list/notes-list.component.html",
                        providers: [note_service_1.NoteService, firebase_note_service_1.FirebaseNoteService, firebase_service_1.FirebaseService],
                        directives: [note_component_1.NoteComponent, router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [note_service_1.NoteService])
                ], NotesList);
                return NotesList;
            }());
            exports_1("NotesList", NotesList);
        }
    }
});
//# sourceMappingURL=notes-list.component.js.map
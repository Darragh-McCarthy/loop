System.register(["angular2/core", "../../constants/constants", "../../services/note/note.service", "../note/note.component", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, constants_1, note_service_1, note_component_1, router_1;
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
            }],
        execute: function() {
            NotesList = (function () {
                function NotesList(_NoteService /*,
                    //private _router: Router*/) {
                    this._NoteService = _NoteService;
                }
                NotesList.prototype.ngOnInit = function () {
                    var _this = this;
                    this._NoteService.promiseNotes()
                        .then(function (notes) { return _this.notes = notes; })
                        .then(function (notes) { return console.log(notes); });
                };
                NotesList.prototype.viewNotesWithTag = function () {
                    //this._router.navigate(["Tag", { tagName: "testingTag" }]);
                };
                NotesList = __decorate([
                    core_1.Component({
                        selector: constants_1.DIRECTIVE_PREFIX + "notes-list",
                        templateUrl: "app/components/notes-list/notes-list.component.html",
                        providers: [note_service_1.NoteService /*, ROUTER_PROVIDERS*/],
                        directives: [note_component_1.Note, router_1.ROUTER_DIRECTIVES],
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
System.register(["angular2/core", "angular2/router", "../../constants/constants", "../note/note.component", "../../services/note/note.service", "../../services/note/firebase-note.service", "../../services/firebase/firebase.service"], function(exports_1, context_1) {
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
    var core_1, router_1, constants_1, note_component_1, note_service_1, firebase_note_service_1, firebase_service_1;
    var TagComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            },
            function (note_component_1_1) {
                note_component_1 = note_component_1_1;
            },
            function (note_service_1_1) {
                note_service_1 = note_service_1_1;
            },
            function (firebase_note_service_1_1) {
                firebase_note_service_1 = firebase_note_service_1_1;
            },
            function (firebase_service_1_1) {
                firebase_service_1 = firebase_service_1_1;
            }],
        execute: function() {
            TagComponent = (function () {
                function TagComponent(_routeParams, 
                    // private _router: Router,
                    _NoteService) {
                    var _this = this;
                    this._routeParams = _routeParams;
                    this._NoteService = _NoteService;
                    this.title = "Tag title";
                    var tagName = _routeParams.get("tagName");
                    this.title = tagName;
                    this._NoteService.get(tagName).then(function (notes) { return _this.notes = notes; });
                }
                TagComponent = __decorate([
                    core_1.Component({
                        selector: constants_1.DIRECTIVE_PREFIX + "tag",
                        templateUrl: "app/components/tag/tag.component.html",
                        directives: [note_component_1.NoteComponent],
                        providers: [note_service_1.NoteService, firebase_note_service_1.FirebaseNoteService, firebase_service_1.FirebaseService]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, note_service_1.NoteService])
                ], TagComponent);
                return TagComponent;
            }());
            exports_1("TagComponent", TagComponent);
        }
    }
});
//# sourceMappingURL=tag.component.js.map
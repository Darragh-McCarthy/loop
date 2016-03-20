System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MOCK_NOTES;
    return {
        setters:[],
        execute: function() {
            exports_1("MOCK_NOTES", MOCK_NOTES = [
                { id: 11, text: "first note", updated: new Date(), created: new Date() },
                { id: 12, text: "second note", updated: new Date(), created: new Date() },
                { id: 13, text: "third note", updated: new Date(), created: new Date() },
                { id: 14, text: "fourth note", updated: new Date(), created: new Date() }
            ]);
        }
    }
});
//# sourceMappingURL=mock-notes.js.map
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MOCK_NOTES;
    return {
        setters:[],
        execute: function() {
            exports_1("MOCK_NOTES", MOCK_NOTES = [
                { id: 11, updated: new Date(), created: new Date(), text: ":active can be used on any element", tags: ["CSS"] },
                { id: 12, updated: new Date(), created: new Date(), text: "second note", tags: [] },
                { id: 13, updated: new Date(), created: new Date(), text: "Combining map and filter into a single reduce can provide big performance benefits when dealing with large datasets", tags: ["map", "filter", "reduce", "JavaScript"] },
                { id: 14, updated: new Date(), created: new Date(), text: "fourth note", tags: [] }
            ]);
        }
    }
});
//# sourceMappingURL=mock-notes.js.map
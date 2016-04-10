import { NoteInterface } from "../../interfaces/note/note";

export var MOCK_NOTES: NoteInterface[] = [
    {id: 11, updated: new Date(), created: new Date(), text: ":active can be used on any element", tags: ["#CSS"] },
    {id: 12, updated: new Date(), created: new Date(), text: "second note", tags: [] },
    {id: 13, updated: new Date(), created: new Date(), text: "Combining map and filter into a single reduce can provide big performance benefits when dealing with large datasets", tags: ["#map", "#filter", "#reduce", "#JavaScript"] },
    {id: 14, updated: new Date(), created: new Date(), text: "fourth note", tags: [] },
    {id: 15, updated: new Date(), created: new Date(), text: "in regular expressions ?= represents a look-ahead", tags: ["#regex"]}
];
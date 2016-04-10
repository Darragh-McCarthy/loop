export interface NoteInterface {
    id: number;
    text: string;
    updated: Date;
    created: Date;
    totalDaysOfArchival: number;
    tags: string[];
    priority: number;
};
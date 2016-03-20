import { Injectable } from "angular2/core";
import { MOCK_NOTES } from "../../mock/notes/mock-notes";

@Injectable()
export class NoteService {
    promiseNotes() { return Promise.resolve(MOCK_NOTES); }
}
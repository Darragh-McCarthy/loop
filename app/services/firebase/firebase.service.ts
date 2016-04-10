import { Injectable } from "angular2/core";

@Injectable()
export class FirebaseService {
    Firebase;
    constructor() {
        this.Firebase = new Firebase("https://luminous-heat-3833.firebaseio.com/");
    }
    getFirebaseRef() {
        return this.Firebase;
    }
}
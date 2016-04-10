import { Component } from "angular2/core";
import { NotesList } from "../../components/notes-list/notes-list.component";
import { ROUTER_DIRECTIVES } from "angular2/router";

@Component({
  selector: "my-dashboard",
  templateUrl: "app/components/dashboard/dashboard.component.html",
  styleUrls: ["app/components/dashboard/dashboard.component.css"],
  directives: [
      NotesList,
      ROUTER_DIRECTIVES
  ]
})
export class DashboardComponent {}
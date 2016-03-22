import { Component, OnInit } from "angular2/core";
import { NotesList } from "../../components/notes-list/notes-list.component";

@Component({
  selector: "my-dashboard",
  templateUrl: "app/components/dashboard/dashboard.component.html",
  directives: [NotesList]
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    /*this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));*/
  }
  gotoDetail() {
    //let link = ["HeroDetail", { id: hero.id }];
    //this._router.navigate(link);
  }
}
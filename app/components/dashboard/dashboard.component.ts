import { Component, OnInit } from "angular2/core";
import { Router } from "angular2/router";
import { Hero } from "../../interfaces/hero/hero";
import { HeroService } from "../../services/hero/hero.service";
import { NotesList } from "../../components/notes-list/notes-list.component";

@Component({
  selector: "my-dashboard",
  templateUrl: "app/components/dashboard/dashboard.component.html",
  directives: [NotesList]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private _router: Router,
    private _heroService: HeroService) {
  }

  ngOnInit() {
    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
  gotoDetail(hero: Hero) {
    let link = ["HeroDetail", { id: hero.id }];
    this._router.navigate(link);
  }
}
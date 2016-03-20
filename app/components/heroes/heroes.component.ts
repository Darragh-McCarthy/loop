import {Component} from "angular2/core";
import { Router } from "angular2/router";

import {Hero} from "../../interfaces/hero/hero";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {HeroService} from "../../services/hero/hero.service";
import {OnInit} from "angular2/core";

@Component({
    selector: "my-heroes",
    // providers: [HeroService],
    template: `
      <h1>{{title}}</h1>
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div><input [(ngModel)]="hero.name" placeholder="name">{{hero.name}}</div>
      <hr/>
      <h2>My Heroes</h2>
        <ul class="heroes">
          <li *ngFor="#hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
              <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
      <hr/>
      <!-- *ngIf="selectedHero" -->

        <!--<my-hero-detail
            [hero]="selectedHero"
        ></my-hero-detail>-->

        <div *ngIf="selectedHero">
          <h2>
            {{selectedHero.name | uppercase}} is my hero
          </h2>
          <button (click)="gotoDetail(selectedHero)">View Details</button>
        </div>
          
        `,
    directives: [HeroDetailComponent],
})
export class HeroesComponent implements OnInit {
    title = "Tour of Heroes";
    hero: Hero = {
      id: 1,
      name: "Windstorm"
    };
    selectedHero: Hero;
    heroes: Hero[];

    onSelect(hero: Hero) { this.selectedHero = hero; }

    constructor(private _router: Router, private _heroService: HeroService) { }
    ngOnInit() {
        this.getHeroes();
      }
    getHeroes() {
       this._heroService.getHeroes().then(
            heroes => this.heroes = heroes
        );
      }

  gotoDetail(hero: Hero) {
  console.log(hero);
    let link = ["HeroDetail", { id: hero.id }];
    this._router.navigate(link);
  }

}
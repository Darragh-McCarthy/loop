import { Component } from "angular2/core";
import {
    RouteConfig,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS
} from "angular2/router";

import { HeroService }     from "./services/hero/hero.service";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { TagComponent } from "./components/tag/tag.component";

@RouteConfig([
  {
    path: "/heroes",
    name: "Heroes",
    component: HeroesComponent
  },
  {
    path: "/tag/:tagName",
    name: "Tag",
    component: TagComponent,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardComponent,
    useAsDefault: true,
  },
  {
    path: "/detail/:id",
    name: "HeroDetail",
    component: HeroDetailComponent
  },
])
@Component({
  selector: "my-app",
  template: `
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
      <a [routerLink]="['Tag', {tagName:'hi there'}]">Tag</a>
      
    </nav>
    <router-outlet></router-outlet>
    
  `,
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [
    ROUTER_PROVIDERS,
    HeroService
  ]
})
export class AppComponent {}


import { Component } from "angular2/core";
import {
    RouteConfig,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS
} from "angular2/router";

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { TagComponent } from "./components/tag/tag.component";

@RouteConfig([
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
])
@Component({
  selector: "my-app",
  template: `
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Tag', {tagName:'hi there'}]">Tag</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [
    ROUTER_PROVIDERS
  ]
})
export class AppComponent {}


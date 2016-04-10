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
    path: "/hashtag/:tagName",
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
  templateUrl: "app/app.component.html",
  styleUrls: ["app/app.component.css"],
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [
     ROUTER_PROVIDERS
  ]
})
export class AppComponent {}

